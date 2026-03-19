import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light" style={{ letterSpacing: "-0.01em" }}>
            {t("contact.title")}
          </DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground font-light mb-6">
          {t("contact.description")}
        </p>
        <div className="space-y-4">
          <a
            href="mailto:andrea.f@grupoambiente.com.co?subject=Free%2015-minute%20consultation"
            className="flex items-center gap-3 p-3 rounded-btn border border-border hover:bg-muted transition-colors"
          >
            <Mail size={18} className="text-muted-foreground shrink-0" />
            <span className="text-sm">andrea.f@grupoambiente.com.co</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
