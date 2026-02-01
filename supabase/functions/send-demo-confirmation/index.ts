import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface DemoConfirmationRequest {
  email: string;
  companyName: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, companyName }: DemoConfirmationRequest = await req.json();
    
    console.log("Demo booking confirmation for:", email, companyName);

    // In a real implementation, you would:
    // 1. Use Resend or another email service
    // 2. Send a professional confirmation email
    // 3. Notify your team about the new demo request
    
    // For now, we'll just log it
    const response = {
      success: true,
      message: "Demo confirmation sent successfully",
      email,
      companyName
    };

    return new Response(
      JSON.stringify(response),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-demo-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
