import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Kakeru — Semantic Anime Recommendation Engine",
    description:
      "Semantic recommendation platform matching users to anime via natural language descriptions, serving 1,050+ enriched titles. Built a vector search pipeline using Cohere embeddings with HNSW indexing on Supabase pgvector, achieving sub-200ms query response times with in-memory caching. Implemented SSE streaming for real-time AI-generated recommendation explanations via the Claude API. Deployed on Railway (US East) with a full CI pipeline.",
    tech: ["Python", "FastAPI", "Supabase (pgvector)", "Cohere Embeddings", "Claude API", "Railway"],
  },
  {
    title: "Hive Job Match Agent — Open-Source Contribution (Aden, YC W24)",
    description:
      "Contributed a Job Match Agent to Hive, an open-source agentic framework built by YC-backed startup Aden, using the framework's graph-based execution model. Built a multi-node agent graph with fan-out/fan-in execution for parallel resume-to-job matching, leveraging LiteLLM for model-agnostic LLM calls and Pydantic v2 for output validation. Integrated MCP tool servers for web search (Google Custom Search API) and file I/O, enabling autonomous job listing evaluation.",
    tech: ["Python 3.11+", "Claude Sonnet", "LiteLLM", "Pydantic v2", "MCP", "FastMCP", "Textual TUI"],
  },
  {
    title: "DateMeNot — Satirical Bad-Date Generator",
    description:
      "Built at the Stupid Ideas Hackathon (Waterloo): a satirical web app generating bad date scenarios using the Claude API. Collaborated in a team of 3, handling full-stack development with Next.js and prompt engineering tuned for comedic output.",
    tech: ["Next.js", "TypeScript", "Claude API"],
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
