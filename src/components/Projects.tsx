import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vision Based Quality Control System for Crop Health Monitoring",
    description:
      "Developed a vision-based system for monitoring crop health and implementing quality control measures using image processing techniques.",
    tags: ["Computer Vision", "Image Processing", "Quality Control"],
    repoUrl: "#",
    demoUrl: null,
  },
  {
    title: "Analytical Model for Passive Autocatalytic Recombiner",
    description:
      "Developed a high-accuracy analytical model for natural convection in Passive Autocatalytic Recombiners (PARs), enhancing hydrogen mitigation analysis. Investigated temperature stratification and multi-zone flow.",
    tags: ["Thermal Analysis", "Modeling", "Research"],
    repoUrl: "#",
    demoUrl: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Project Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my mechanical engineering projects
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="text-4xl font-bold gradient-text opacity-50">
                  ⚙️
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
                      View Details
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
