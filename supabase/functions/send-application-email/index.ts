import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationEmailRequest {
  name: string;
  email: string;
  applicationType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received application email request");
    const { name, email, applicationType }: ApplicationEmailRequest = await req.json();

    console.log(`Sending application confirmation email to ${email}`);

    const emailResponse = await resend.emails.send({
      from: "ClixAgent Hub <onboarding@resend.dev>",
      to: [email],
      subject: "Application Received - ClixAgent Hub",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #1a1a1a, #333); padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">ClixAgent Hub</h1>
          </div>
          
          <div style="padding: 20px; background-color: #ffffff;">
            <h2 style="color: #333333;">Thank you for applying, ${name}!</h2>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.5;">
              We're excited to confirm that we've received your application for the ${applicationType} programme.
            </p>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.5;">
              Our team will review your application carefully and one of our managers will contact you as soon as possible to discuss the next steps.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="color: #333333; margin: 0;">
                <strong>Application Type:</strong> ${applicationType}
              </p>
            </div>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.5;">
              If you have any questions in the meantime, feel free to reach out to our support team at support@clixagent.com
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <p style="color: #999999; margin: 0; font-size: 14px;">
              © ${new Date().getFullYear()} ClixAgent Hub. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-application-email function:", error);
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