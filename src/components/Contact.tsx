import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center section-fade">
        <h2 className="text-2xl font-mono font-semibold mb-6">
          <span className="text-primary">/</span> contact
        </h2>
        <p className="text-secondary-foreground mb-8 max-w-md mx-auto">
          Currently looking for new opportunities. Feel free to reach out—I'd love to connect.
        </p>
        <a
          href="mailto:marioezeh4@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Mail size={18} />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
