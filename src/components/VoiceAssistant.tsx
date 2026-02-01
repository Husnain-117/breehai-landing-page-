import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useConversation } from "@elevenlabs/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mic, MicOff, PhoneOff, Activity } from "lucide-react";

export type VoiceAssistantHandle = {
  startCall: () => Promise<void>;
  endCall: () => Promise<void>;
  getStatus: () => string;
  open: () => void;
  close: () => void;
};

type MessageItem = {
  id: string;
  speaker: "You" | "AI" | string;
  text: string;
  t: number;
};

interface VoiceAssistantProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const VoiceAssistant = forwardRef<VoiceAssistantHandle, VoiceAssistantProps>(({ open: openProp, onOpenChange }, ref) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = openProp ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const [micMuted, setMicMuted] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([]);

  const conversation = useConversation({
    micMuted,
    onConnect: () => {
      // eslint-disable-next-line no-console
      console.log("Connected to dental receptionist");
    },
    onDisconnect: () => {
      // eslint-disable-next-line no-console
      console.log("Disconnected from dental receptionist");
    },
    onMessage: (message) => {
      // Try to normalize AI/user transcript depending on payload shape
      // ElevenLabs may send structured objects or strings
      let speaker: MessageItem["speaker"] = "AI";
      let text = "";
      if (typeof message === "string") {
        text = message;
      } else if (message && typeof message === "object") {
        const m: any = message;
        speaker = (m.speaker || m.role || m.author || m.from || "AI") as MessageItem["speaker"];
        text = (m.text || m.content || m.message || m.transcript || "").toString();
        if (!text && typeof m.toString === "function") text = m.toString();
      }
      if (!text) return;
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-${prev.length}`, speaker, text, t: Date.now() },
      ]);
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error("VoiceAssistant error:", error);
      const errorMessage =
        typeof error === "string"
          ? error
          : (error as any)?.message ?? String(error);
      alert("Connection error: " + errorMessage);
    },
  });

  const ensureMic = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      return true;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Microphone permission denied:", err);
      alert("Please allow microphone access to talk with our AI receptionist");
      return false;
    }
  };

  const startCall = useCallback(async () => {
    if (conversation.status === "connected" || conversation.status === "connecting") return;
    const allowed = await ensureMic();
    if (!allowed) return;
    try {
      await conversation.startSession({
        agentId: import.meta.env.VITE_ELEVENLABS_AGENT_ID,
        connectionType: "webrtc",
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to start conversation:", e);
      alert("Could not start the conversation. Please try again.");
    }
  }, [conversation]);

  const endCall = useCallback(async () => {
    try {
      await conversation.endSession();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to end conversation:", e);
    }
  }, [conversation]);

  // Auto start when dialog opens
  useEffect(() => {
    if (open) {
      startCall().catch(() => undefined);
    } else {
      if (conversation.status === "connected") {
        conversation.endSession().catch(() => undefined);
      }
      // reset soft state between sessions
      setMessages([]);
      setMicMuted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (conversation.status === "connected") {
        conversation.endSession().catch(() => undefined);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    startCall: async () => {
      setOpen(true);
      await startCall();
    },
    endCall: async () => {
      await endCall();
      setOpen(false);
    },
    getStatus: () => conversation.status,
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <div className="border-b px-5 py-4 flex items-center justify-between bg-white/70 dark:bg-background/70 backdrop-blur">
          <DialogHeader className="p-0">
            <DialogTitle className="text-xl font-bold">Talk to breeh</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            {conversation.isSpeaking && (
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                <Activity className="w-4 h-4" /> Speaking
              </span>
            )}
            <Badge variant={conversation.status === "connected" ? "default" : "secondary"} className="rounded-full">
              {conversation.status === "connected" ? "Connected" : conversation.status === "connecting" ? "Connecting" : "Disconnected"}
            </Badge>
          </div>
        </div>

        <div className="px-5 pt-4 pb-3">
          <ScrollArea className="h-72 rounded-md border bg-card/60 p-3">
            <div className="space-y-3">
              {messages.length === 0 && (
                <p className="text-sm text-muted-foreground">Say something to get started. Your transcript will appear here.</p>) }
              {messages.map((m) => (
                <div key={m.id} className="flex items-start gap-3">
                  <div className={`mt-1 w-2 h-2 rounded-full ${m.speaker === "You" ? "bg-primary" : "bg-emerald-500"}`} />
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-0.5">{m.speaker}</div>
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="px-5 pb-5 pt-3 flex items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            Tip: Use a headset for best quality.
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={micMuted ? "destructive" : "outline"}
              onClick={() => setMicMuted((v) => !v)}
              className="gap-2"
            >
              {micMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {micMuted ? "Unmute" : "Mute"}
            </Button>
            <Button variant="destructive" onClick={() => { endCall(); setOpen(false); }} className="gap-2">
              <PhoneOff className="w-4 h-4" /> End Call
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

VoiceAssistant.displayName = "VoiceAssistant";

export default VoiceAssistant;
