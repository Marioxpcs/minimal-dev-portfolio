import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RideIQ",
    description:
      "Cross-platform mobile app (iOS & Android) comparing Uber and Lyft prices in real time, reducing manual price comparison time by ~80%. Features surge pricing trend analysis, Google Maps traffic integration for dynamic ETA prediction, and an ML regression model forecasting ride cost fluctuations with ~78% accuracy. Node.js backend with Redis caching reduced average API response time from ~900ms to ~150ms.",
    tech: ["TypeScript", "React Native", "Expo", "Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    title: "SplitSnap",
    description:
      "AI-powered expense splitting app with a two-stage OCR pipeline (Google Vision → Claude API), parsing receipt photos into structured line-item JSON with ~90% field extraction accuracy. Reduces manual expense entry from ~5 minutes to under 15 seconds per bill. Features a real-time group ledger with live balance tracking, per-item tagging, and Venmo/PayPal deeplink settlement with pre-filled amounts.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Google Vision API", "Claude API"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-mono font-semibold mb-12 section-fade">
          <span className="text-primary">/</span> projects
        </h2>
        <div className="space-y-6 section-fade delay-200">
          {projects.map((project, index) => (
            <article
              key={index}
              className="p-6 bg-card border border-border rounded-lg card-hover group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-mono font-medium group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-muted-foreground">
                  <button className="hover:text-primary transition-colors duration-300">
                    <Github size={18} />
                  </button>
                  <button className="hover:text-primary transition-colors duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <p className="text-secondary-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
