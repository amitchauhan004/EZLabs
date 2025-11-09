import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Form submission successful:", responseData);
        toast({
          title: "Form Submitted",
          description: "Thank you for reaching out! We'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Unable to submit form. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream relative overflow-hidden bg-[url('/src/assets/BG.png')] bg-cover bg-center bg-no-repeat">
      {/* Left decorative mandala */}
      <div className="absolute left-0 bottom-0 w-96 h-96 opacity-10">
        <div className="w-full h-full border-8 border-primary rounded-full"></div>
        <div className="absolute inset-12 border-4 border-primary rounded-full"></div>
        <div className="absolute inset-24 border-2 border-primary rounded-full"></div>
      </div>

      {/* Right decorative mandala */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="w-full h-full border-8 border-primary rounded-full"></div>
        <div className="absolute inset-12 border-4 border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl handwriting text-navy">
              Join the Story
            </h2>
            <p className="text-xl text-foreground">
              Ready to bring your vision to life? Let's talk.
            </p>

            <div className="space-y-4 text-foreground pt-8">
              <p>
                Whether you have an idea, a question, or simply want
                to explore how V can work together, V're just a
                message away.
              </p>
              <p className="font-semibold">Let's catch up over coffee.</p>
              <p>Great stories always begin with a good conversation</p>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-primary font-semibold">vernita@varnanfilms.co.in</p>
              <p className="text-primary font-semibold">+91 98736 84567</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/50 p-8 rounded-lg shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name*</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white" />
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
                      <FormLabel>Your email*</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className="bg-white" />
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
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white" />
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
                      <FormLabel>Your message*</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="bg-white min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary/20 to-transparent"></div>
    </section>
  );
};

export default Contact;
