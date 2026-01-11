import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sneaker Finder",
    description:
      "Intelligent API service integrating price tracking, store locators, and sale detection with AI embeddings for fast query results.",
    tech: ["TypeScript", "React", "Node.js", "REST API", "Chakra UI"],
  },
  {
    title: "ClassSense",
    description:
      "AI-powered student productivity app that analyzes course syllabi to generate daily class attendance priorities with risk scoring.",
    tech: ["React Native", "TypeScript", "Firebase", "OpenAI API"],
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
