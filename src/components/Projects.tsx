import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const projectCategories = ["All Projects", "Mechanical", "Software"];

const projects = [
  {
    title: "Gesture-Controlled Lighting System",
    description:
      "Developed a gesture-based lighting control system using Arduino Uno, IR sensor, and LEDs. The system allows users to turn lights on/off and change brightness using hand gestures.",
    tags: ["Arduino", "IR Sensor", "Embedded Systems"],
    category: "Mechanical",
    repoUrl: "#",
    demoUrl: null,
    image: null,
  },
  {
    title: "Restaurant Web Application",
    description:
      "Created a full-featured restaurant website with online ordering capabilities, menu management, and reservation system.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Software",
    repoUrl: "#",
    demoUrl: "#",
    image: null,
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a responsive portfolio website showcasing projects and skills with modern animations and dark theme.",
    tags: ["Next.js", "Tailwind", "JavaScript"],
    category: "Software",
    repoUrl: "#",
    demoUrl: "#",
    image: null,
  },
  {
    title: "Automated Irrigation System",
    description:
      "Built an IoT-based irrigation system that monitors soil moisture and automatically waters plants when needed.",
    tags: ["Arduino", "IoT", "Sensors"],
    category: "Mechanical",
    repoUrl: "#",
    demoUrl: null,
    image: null,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Project Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my engineering and software development projects
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="text-4xl font-bold gradient-text opacity-50">
                  {project.category === "Mechanical" ? "⚙️" : "💻"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button size="sm" className="bg-primary text-primary-foreground" asChild>
                      <a href={project.demoUrl} className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
