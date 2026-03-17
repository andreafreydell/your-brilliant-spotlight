import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const interests = ["Courses", "Membership", "Custom build", "Strategic advisory"];

const Contact = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks! Your message has been received. I will be in touch soon.");
  };

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-xl">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>
            Let&apos;s figure out the right entry point.
          </h1>
          <p className="text-lg text-muted-foreground font-light mb-12">
            Use this page if you want help choosing between the course library, membership, or a custom build.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input id="name" placeholder="Your name" required className="rounded-btn" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" required className="rounded-btn" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">What are you working on?</label>
              <Textarea
                id="message"
                placeholder="Tell me about your business, your bottleneck, and what success would look like."
                rows={5}
                required
                className="rounded-md"
              />
            </div>
            <div>
              <p className="text-sm font-medium mb-3">What are you interested in?</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-btn text-sm font-medium transition-colors ${
                      selected.includes(interest)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full rounded-btn">
              Send it {"->"}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Contact;
