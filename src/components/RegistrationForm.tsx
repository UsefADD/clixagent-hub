import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const baseFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  website: z.string().url("Invalid website URL"),
  experience: z.string().min(1, "Please describe your experience"),
});

// Affiliate-specific schema
const affiliateFormSchema = baseFormSchema.extend({
  trafficSource: z.string().min(1, "Please select a traffic source"),
  monthlyTraffic: z.string().min(1, "Please select monthly traffic volume"),
});

// Influencer-specific schema
const influencerFormSchema = baseFormSchema.extend({
  platform: z.string().min(1, "Please select your main platform"),
  followers: z.string().min(1, "Please select your follower range"),
  niche: z.string().min(1, "Please enter your content niche"),
});

type AffiliateFormData = z.infer<typeof affiliateFormSchema>;
type InfluencerFormData = z.infer<typeof influencerFormSchema>;

export const RegistrationForm = ({ type }: { type: "affiliate" | "influencer" }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AffiliateFormData | InfluencerFormData>({
    resolver: zodResolver(type === "affiliate" ? affiliateFormSchema : influencerFormSchema),
  });

  const onSubmit = async (data: AffiliateFormData | InfluencerFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form submitted:", data);
      toast({
        title: "Registration Submitted",
        description: "We'll review your application and get back to you soon!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common fields that appear in both forms
  const commonFields = (
    <>
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="you@example.com" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="+1 (555) 123-4567" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website/Social Media URL</FormLabel>
            <FormControl>
              <Input placeholder="https://example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {commonFields}

        {type === "affiliate" ? (
          <>
            <FormField
              control={form.control}
              name="trafficSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Traffic Source</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Select your main traffic source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border shadow-lg">
                      <SelectItem value="search" className="hover:bg-accent">Search Traffic</SelectItem>
                      <SelectItem value="social" className="hover:bg-accent">Social Media</SelectItem>
                      <SelectItem value="email" className="hover:bg-accent">Email Marketing</SelectItem>
                      <SelectItem value="paid" className="hover:bg-accent">Paid Advertising</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="monthlyTraffic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Traffic Volume</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Select monthly traffic volume" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border shadow-lg">
                      <SelectItem value="0-1000" className="hover:bg-accent">0-1,000 visitors</SelectItem>
                      <SelectItem value="1000-10000" className="hover:bg-accent">1,000-10,000 visitors</SelectItem>
                      <SelectItem value="10000-50000" className="hover:bg-accent">10,000-50,000 visitors</SelectItem>
                      <SelectItem value="50000+" className="hover:bg-accent">50,000+ visitors</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <>
            <FormField
              control={form.control}
              name={"platform" as keyof InfluencerFormData}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Platform</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Select your main platform" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border shadow-lg">
                      <SelectItem value="instagram" className="hover:bg-accent">Instagram</SelectItem>
                      <SelectItem value="youtube" className="hover:bg-accent">YouTube</SelectItem>
                      <SelectItem value="tiktok" className="hover:bg-accent">TikTok</SelectItem>
                      <SelectItem value="twitter" className="hover:bg-accent">Twitter</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"followers" as keyof InfluencerFormData}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Followers</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Select your follower range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border shadow-lg">
                      <SelectItem value="1000-10000" className="hover:bg-accent">1K-10K followers</SelectItem>
                      <SelectItem value="10000-50000" className="hover:bg-accent">10K-50K followers</SelectItem>
                      <SelectItem value="50000-100000" className="hover:bg-accent">50K-100K followers</SelectItem>
                      <SelectItem value="100000+" className="hover:bg-accent">100K+ followers</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"niche" as keyof InfluencerFormData}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Niche</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Tech, Fashion, Gaming" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your experience in affiliate marketing or content creation"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : `Register as ${type === "affiliate" ? "Affiliate" : "Influencer"}`}
        </Button>
      </form>
    </Form>
  );
};
