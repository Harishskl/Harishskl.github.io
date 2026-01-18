import { Cog, Code2, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6 animate-fade-up">
              <span className="badge-glow flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Open to internships
              </span>
              <span className="badge-glow flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Student
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up-delay-1">
              <span className="gradient-text">Automation Engineering</span>
              <br />
              <span className="text-foreground">Student & Web Developer</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 animate-fade-up-delay-2">
              Bridging the gap between automation engineering and modern web development. 
              Aiming to innovate in automation engineering with a focus on integrating hardware and software solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box">
                Explore My Work
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                Connect With Me
              </Button>
            </div>
          </div>

          {/* Right content - Profile image with floating icons */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full bg-card border-2 border-border overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <div className="text-6xl md:text-7xl font-bold gradient-text">CS</div>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="floating-icon -top-4 -left-4 animate-float">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <div className="floating-icon -bottom-4 -right-4 animate-float-delayed">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="floating-icon top-1/2 -right-8 animate-float" style={{ animationDelay: '0.5s' }}>
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
