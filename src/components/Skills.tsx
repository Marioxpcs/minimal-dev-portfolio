const skills = {
  Languages: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  Frontend: ["React.js", "React Native", "TailwindCSS", "Chakra UI"],
  Backend: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  Databases: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"],
  "Cloud & DevOps": ["AWS Lambda", "S3", "RDS", "Docker", "Heroku"],
  "AI/ML": ["OpenAI API", "AI Embeddings", "Vector Search", "Prompt Engineering"],
};

const Skills = () => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-mono font-semibold mb-12 section-fade">
          <span className="text-primary">/</span> skills
        </h2>
        <div className="grid gap-8 section-fade delay-200">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="group">
              <h3 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
