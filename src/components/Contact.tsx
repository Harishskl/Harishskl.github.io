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
            <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground mb-8 text-sm md:text-base">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+916383198095" className="hover:text-primary transition-colors">
                +91 6383198095
              </a>
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
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box text-sm md:text-base" asChild>
                <a href="mailto:harihari1443@gmail.com" className="flex items-center">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="break-all">harihari1443@gmail.com</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-sm md:text-base" asChild>
                <a href="/resume.pdf" download className="flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/harish-v-31a332291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Harishskl"
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
