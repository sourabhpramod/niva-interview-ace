import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-600/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Ready to Ace Your <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Next Interview?</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Join thousands of successful candidates who transformed their interview skills with Niva AI's intelligent practice platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Get Started for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground font-light">
            No credit card required • Instant access • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
