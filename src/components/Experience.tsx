const experiences = [
  {
    role: "Freelance Web Developer",
    org: "Waterloo Region",
    period: "Oct 2024 – Present",
    bullets: [
      "Operating a local web development business targeting trades businesses (painters, landscapers, contractors) in the Waterloo Region",
      "Built demo landing pages and one-page website packages for prospective clients using modern responsive design",
      "Developed and executed a lead generation pipeline using Google Maps data extraction, tiered lead qualification, and structured text/email outreach",
      "Managing a pipeline of 10+ qualified leads across multiple trades verticals",
    ],
  },
  {
    role: "Software Developer (Volunteer)",
    org: "Conestoga College",
    period: "Sep 2024 – Present · Waterloo, Canada",
    bullets: [
      "Contributed to a full-stack web app for campus event discovery with React, TypeScript, and Node.js, delivering 3 production-ready features across 2 sprint cycles",
      "Designed and implemented 5 reusable UI components in React adopted across 2 separate GDSC project teams",
      "Led code review sessions for a team of 4, identifying and resolving 12+ issues related to API error handling and component state management",
      "Integrated a third-party REST API for real-time event data, reducing manual content updates by approximately 70%",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-mono font-semibold mb-12 section-fade">
          <span className="text-primary">/</span> experience
        </h2>
        <div className="space-y-12 section-fade delay-200">
          {experiences.map((exp, i) => (
            <article key={i} className="relative pl-6 border-l border-border">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-primary" />
              <div className="mb-2">
                <h3 className="text-xl font-mono font-medium">{exp.role}</h3>
                <p className="text-primary text-sm font-mono">{exp.org}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-mono">
                {exp.period}
              </p>
              <ul className="space-y-2 text-secondary-foreground">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
