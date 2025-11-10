import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  organization: z.string().trim().max(200, "Organization name must be less than 200 characters").optional(),
  interviewType: z.string().trim().min(2, "Please specify interview type").max(100, "Interview type must be less than 100 characters"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const RequestAccess = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      interviewType: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // TODO: Implement actual form submission
    console.log("Form submitted:", data);
    toast.success("Request submitted successfully!");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Request Submitted!</h1>
          <p className="text-muted-foreground">
            Thank you for your interest in Niva AI. We'll review your request and get back to you shortly.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Request <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Test Access</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Fill out the form below to request access to Niva AI's mock interview platform.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-accent/30 p-8 rounded-2xl border border-border/50">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
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
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
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
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 234 567 8900" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="University or Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interviewType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interview Type *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., UPSC, SSB, PSC, Campus Placement" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your interview preparation needs..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;
