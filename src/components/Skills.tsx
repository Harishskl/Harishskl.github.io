import { useState } from "react";
import { Cog, Code2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "technical",
    label: "Technical Skills",
    icon: Cog,
    skills: [
      { name: "AutoCAD", level: "Advanced" },
      { name: "SolidWorks", level: "Advanced" },
      { name: "ANSYS Workbench", level: "Intermediate" },
      { name: "Thermal Analysis", level: "Advanced" },
      { name: "Mechanical Design", level: "Advanced" },
      { name: "CAD/CAM", level: "Advanced" },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    icon: Code2,
    skills: [
      { name: "C", level: "Intermediate" },
      { name: "Python", level: "Beginner" },
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem-solving", level: "Advanced" },
      { name: "Analytical Thinking", level: "Advanced" },
      { name: "Teamwork & Collaboration", level: "Advanced" },
      { name: "Technical Documentation", level: "Advanced" },
      { name: "Adaptability", level: "Advanced" },
      { name: "Process Improvement", level: "Intermediate" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Advanced: "bg-primary/20 text-primary border-primary/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Beginner: "bg-muted text-muted-foreground border-border",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");

  const activeSkills = skillCategories.find((c) => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technical proficiency in mechanical engineering and software tools
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground glow-box"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                )}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
              <span
                className={cn(
                  "inline-block px-3 py-1 text-xs font-medium rounded-full border",
                  levelColors[skill.level]
                )}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
