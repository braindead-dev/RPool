"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "How do I join a carpool?",
    answer: "To join a carpool, browse available events on the Events page and click on one you're interested in. You can then request to join the carpool, and the organizer will review your request.",
  },
  {
    question: "What happens if my driver cancels?",
    answer: "If a driver cancels, all participants will be notified immediately via email and in-app notification. We'll help you find alternative transportation options or connect you with other available carpools.",
  },
  {
    question: "How is payment handled?",
    answer: "Payment arrangements should be discussed and agreed upon between riders and drivers before the trip. We recommend using common payment apps like Venmo or Cash App for convenience.",
  },
  {
    question: "Can I organize my own carpool?",
    answer: "Yes! Click the 'Create Event' button in your dashboard to set up a new carpool. You can specify details like departure time, meeting location, and available spots.",
  },
  {
    question: "Is my personal information safe?",
    answer: "We take privacy seriously. Your personal information is encrypted and only shared with verified users you choose to carpool with. You can control your privacy settings in your account settings.",
  },
  {
    question: "What if I need to cancel my participation?",
    answer: "You can cancel your participation up to 24 hours before the scheduled trip. Please notify the organizer as soon as possible so they can adjust their plans accordingly.",
  },
];

export default function HelpPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitTicket = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Support ticket submitted",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground mt-2">
          Get help with your account or find answers to common questions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Submit a Support Ticket</CardTitle>
            <CardDescription>
              Need help? Submit a ticket and we'll respond within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account">Account Issues</SelectItem>
                    <SelectItem value="carpool">Carpool Problems</SelectItem>
                    <SelectItem value="payment">Payment Questions</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe your issue in detail..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Preferred Contact Method</Label>
                <Input
                  id="contact"
                  placeholder="Email or phone number"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions about R'Pool.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Still Need Help?</CardTitle>
          <CardDescription>
            Contact us directly through these channels.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-medium">Email Support</h3>
            <p className="text-sm text-muted-foreground">
              karmas@csu.fullerton.edu
            </p>
            <p className="text-sm text-muted-foreground">
              Response time: Within 24 hours
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}