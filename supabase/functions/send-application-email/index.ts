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
      from: "ClixAgent <no-reply@clixagent.com>",
      to: [email],
      subject: "Welcome to ClixAgent! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to ClixAgent</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%); padding: 40px 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to ClixAgent!</h1>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 20px;">
                <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                  Dear ${name},
                </p>
                
                <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                  Thank you for applying to join ClixAgent as a ${applicationType}! We're excited to review your application and potentially welcome you to our community of successful digital entrepreneurs.
                </p>
                
                <div style="background-color: #f8f9fa; border-left: 4px solid #FF6B6B; padding: 20px; margin: 30px 0; border-radius: 4px;">
                  <p style="color: #666; margin: 0;">
                    <strong>Next Steps:</strong><br>
                    Our team will carefully review your application within the next 48-72 hours. We'll reach out to you directly with more information about moving forward.
                  </p>
                </div>
                
                <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                  If you have any questions in the meantime, feel free to reach out to our support team at <a href="mailto:support@clixagent.com" style="color: #FF6B6B; text-decoration: none;">support@clixagent.com</a>
                </p>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  © ${new Date().getFullYear()} ClixAgent. All rights reserved.
                </p>
              </div>
            </div>
          </body>
        </html>
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