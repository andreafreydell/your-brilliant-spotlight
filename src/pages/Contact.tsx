import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string[]>([]);

  const interests = [
    { key: "contact.interest.courses" },
    { key: "contact.interest.membership" },
    { key: "contact.interest.custom" },
    { key: "contact.interest.advisory" },
  ];

  const toggleInterest = (interest: string) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(t("contact.success"));
  };

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-xl">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("contact.label")}</p>
          <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>
            {t("contact.title2")}
          </h1>
          <p className="text-lg text-muted-foreground font-light mb-12">
            {t("contact.subtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.name")}</label>
              <Input id="name" placeholder={t("contact.namePlaceholder")} required className="rounded-btn" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.email")}</label>
              <Input id="email" type="email" placeholder={t("contact.emailPlaceholder")} required className="rounded-btn" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.message")}</label>
              <Textarea
                id="message"
                placeholder={t("contact.messagePlaceholder")}
                rows={5}
                required
                className="rounded-md"
              />
            </div>
            <div>
              <p className="text-sm font-medium mb-3">{t("contact.interests")}</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest.key}
                    type="button"
                    onClick={() => toggleInterest(interest.key)}
                    className={`px-4 py-2 rounded-btn text-sm font-medium transition-colors ${
                      selected.includes(interest.key)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t(interest.key)}
                  </button>
                ))}
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full rounded-btn">
              {t("contact.submit")}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Contact;
