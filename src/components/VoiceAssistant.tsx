import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { useConversation } from "@elevenlabs/react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, PhoneOff, X } from "lucide-react";

export type VoiceAssistantHandle = {
  startCall: () => Promise<void>;
  endCall: () => Promise<void>;
  getStatus: () => string;
  open: () => void;
  close: () => void;
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

  const conversation = useConversation({
    micMuted,
    onConnect: () => console.log("Connected to dental receptionist"),
    onDisconnect: () => console.log("Disconnected"),
    onError: (error) => {
      console.error("VoiceAssistant error:", error);
      alert("Connection error: " + (typeof error === "string" ? error : "Unknown error"));
    },
  });

  const ensureMic = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      return true;
    } catch (err) {
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
        agentId: import.meta.env.VITE_ELEVENLABS_AGENT_ID, // Ensure this env var is set
        connectionType: "webrtc",
      });
    } catch (e) {
      console.error("Failed to start conversation:", e);
      alert("Could not start the conversation. Please try again.");
    }
  }, [conversation]);

  const endCall = useCallback(async () => {
    try {
      await conversation.endSession();
    } catch (e) {
      console.error("Failed to end conversation:", e);
    }
  }, [conversation]);

  // Auto start/stop based on open state
  useEffect(() => {
    if (open) {
      startCall().catch(() => undefined);
    } else {
      if (conversation.status === "connected") {
        conversation.endSession().catch(() => undefined);
      }
      setMicMuted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

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

  const isConnected = conversation.status === "connected";
  const isSpeaking = conversation.isSpeaking;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm p-6 overflow-hidden bg-white/95 backdrop-blur-xl border-none shadow-2xl rounded-3xl">
        <div className="flex flex-col items-center justify-center space-y-8 py-4">

          {/* Status Header */}
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-gray-900">Breeh AI</h3>
            <p className="text-sm font-medium text-primary/80 uppercase tracking-wider">
              {conversation.status === "connecting" ? "Connecting..." : isConnected ? "Listening" : "Disconnecting..."}
            </p>
          </div>

          {/* Microphone Visualization */}
          <div className="relative flex items-center justify-center w-32 h-32">
            {/* Pulsing Rings (only when connected) - CSS based */}
            {isConnected && (
              <>
                <div className={`absolute w-full h-full rounded-full bg-primary/20 ${isSpeaking ? "scale-110 opacity-30" : "scale-100 opacity-10"} transition-all duration-300 ease-in-out`} />
                <div className={`absolute w-full h-full rounded-full bg-primary/10 ${isSpeaking ? "scale-125 opacity-20" : "scale-100 opacity-5"} transition-all duration-500 ease-in-out delay-75`} />
              </>
            )}

            {/* Main Mic Circle */}
            <div className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full transition-all duration-500 ${isConnected ? "bg-gradient-to-br from-primary to-violet-600 shadow-xl shadow-primary/30" : "bg-gray-100"
              }`}>
              <Mic className={`w-8 h-8 ${isConnected ? "text-white" : "text-gray-400"}`} />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 w-full justify-center">
            <Button
              variant="outline"
              size="icon"
              className={`h-12 w-12 rounded-full border-2 ${micMuted ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100 hover:text-red-600" : "border-gray-100 bg-gray-50 hover:bg-gray-100"}`}
              onClick={() => setMicMuted(!micMuted)}
            >
              {micMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>

            <Button
              variant="destructive"
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg hover:shadow-red-500/30 bg-red-500 hover:bg-red-600"
              onClick={() => { endCall(); setOpen(false); }}
            >
              <PhoneOff className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
});

VoiceAssistant.displayName = "VoiceAssistant";

export default VoiceAssistant;
