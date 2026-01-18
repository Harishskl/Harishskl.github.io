import { Award, Calendar } from "lucide-react";

const timelineData = [
  {
    year: "2024",
    title: "Started B.Eng at Uva Wellassa University",
    description: "Began my journey in Mechanical Engineering Technology",
  },
  {
    year: "2023",
    title: "Completed Software Engineering Training",
    description: "Finished comprehensive training at Institute of Computer Engineering Technology",
  },
  {
    year: "2023",
    title: "First Web Development Project",
    description: "Developed a POS system for a local business using modern web technologies",
  },
  {
    year: "2022",
    title: "Started Software Engineering Training",
    description: "Enrolled in software engineering program to expand technical skills",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Key milestones and achievements in my academic and professional path
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
