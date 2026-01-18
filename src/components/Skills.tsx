import { useState } from "react";
import { Cog, Code2, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "engineering",
    label: "Engineering",
    icon: Cog,
    skills: [
      { name: "AutoCAD", level: "Advanced" },
      { name: "SolidWorks", level: "Advanced" },
      { name: "Arduino Programming", level: "Intermediate" },
      { name: "Mechanical Design", level: "Advanced" },
      { name: "Control Systems", level: "Intermediate" },
      { name: "PLC Programming", level: "Beginner" },
    ],
  },
  {
    id: "software",
    label: "Software",
    icon: Code2,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    id: "additional",
    label: "Additional",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Project Management", level: "Intermediate" },
      { name: "Technical Writing", level: "Intermediate" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Advanced: "bg-primary/20 text-primary border-primary/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Beginner: "bg-muted text-muted-foreground border-border",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("engineering");

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
            A combination of engineering knowledge and software development skills
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
