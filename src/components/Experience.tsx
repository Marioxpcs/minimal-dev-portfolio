const Experience = () => {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-mono font-semibold mb-12 section-fade">
          <span className="text-primary">/</span> experience
        </h2>
        <div className="section-fade delay-200">
          <article className="relative pl-6 border-l border-border">
            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-primary" />
            <div className="mb-2">
              <h3 className="text-xl font-mono font-medium">Software Developer</h3>
              <p className="text-primary text-sm font-mono">
                Google Developer Student Club (GDSC)
              </p>
            </div>
            <p className="text-sm text-muted-foreground mb-4 font-mono">
              Sept 2024 – Present · Conestoga College
            </p>
            <ul className="space-y-2 text-secondary-foreground">
              <li className="flex gap-2">
                <span className="text-primary shrink-0">→</span>
                <span>Designing and prototyping full-stack applications in student-led teams</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">→</span>
                <span>Building UI components with React and TypeScript</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">→</span>
                <span>Practicing Git workflows, code reviews, and cloud deployment</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
