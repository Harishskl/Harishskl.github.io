import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationData = [
  {
    institution: "Uva Wellassa University of Sri Lanka",
    degree: "BEng Technology in Mechanical Engineering Technology",
    period: "2024 - 2028",
    coursework: [
      "Engineering Mathematics",
      "Engineering Physics",
      "Workshop Technology",
      "Mechanical Design",
      "Control Systems",
      "Thermodynamics",
    ],
    activities: [
      "Member of SOMET (Society of Mechanical Engineering Technology)",
      "Participated in engineering design competitions",
      "Organized technical workshops for junior students",
    ],
  },
  {
    institution: "Institute of Computer Engineering Technology",
    degree: "Software Engineering Training",
    period: "2022 - 2023",
    coursework: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Web Development",
      "Database Management Systems",
      "Software Testing",
      "Agile Development",
    ],
    activities: [
      "Developed a web-based student information system",
      "Portfolio of software projects",
      "Developed POS system for a local business",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My academic journey in engineering and software development
          </p>
        </div>

        {/* Education cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Coursework */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Activities & Involvement</h4>
                <ul className="space-y-2">
                  {edu.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
