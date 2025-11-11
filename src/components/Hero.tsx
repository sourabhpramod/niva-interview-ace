import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-interview.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/30 via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">AI-Powered Interview Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Master Your <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Interview Skills</span> with AI
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              Experience realistic, voice-driven mock interviews for UPSC, SSB, PSC, and campus placements. Practice anytime, anywhere with intelligent AI interviewers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/request-access">
                <Button variant="hero" size="lg" className="group">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Tech</div>
                <div className="text-sm text-muted-foreground font-light">Interviews</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">PSC/SSC</div>
                <div className="text-sm text-muted-foreground font-light">Interviews</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">UPSC</div>
                <div className="text-sm text-muted-foreground font-light">Interviews</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-200">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-2xl opacity-50" />
            <img 
              src={heroImage}
              alt="AI-powered mock interview simulation platform"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
