import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Let's connect and discuss opportunities for collaboration
          </p>
        </div>

        {/* Contact content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 6383198095</span>
            </div>

            {/* Main CTA */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to work together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm currently open to internship opportunities in mechanical engineering. 
              Feel free to reach out if you'd like to collaborate!
            </p>

            {/* Email button */}
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box mb-8" asChild>
              <a href="mailto:harihari1443@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                harihari1443@gmail.com
              </a>
            </Button>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://linkedin.com/in/harish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
