import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl section-fade">
        <p className="font-mono text-primary mb-4 text-sm tracking-wider">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Mario Ezeh<span className="text-primary cursor-blink">_</span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
          Software Developer Student
        </p>
        <p className="text-secondary-foreground max-w-xl mb-8 leading-relaxed">
          CS student at building full-stack applications with 
          React, TypeScript, and AI. Currently crafting intelligent solutions 
          at GDSC Conestoga.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:marioezeh4@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
