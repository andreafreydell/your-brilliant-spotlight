import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-2xl font-light" style={{ letterSpacing: "-0.01em" }}>
          Thank you for your interest!
        </DialogTitle>
      </DialogHeader>
      <p className="text-muted-foreground font-light mb-6">
        I'd love to hear about what you're building. Reach out through any of these channels:
      </p>
      <div className="space-y-4">
        <a
          href="mailto:maria.freydell.v@gmail.com"
          className="flex items-center gap-3 p-3 rounded-btn border border-border hover:bg-muted transition-colors"
        >
          <Mail size={18} className="text-muted-foreground shrink-0" />
          <span className="text-sm">maria.freydell.v@gmail.com</span>
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

export default ContactDialog;
