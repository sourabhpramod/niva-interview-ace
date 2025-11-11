import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Watch <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Niva AI</span> in Action
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our AI-powered platform simulates realistic interview experiences and helps you prepare effectively.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-accent/30 border border-border/50">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/MK83clSv6-k"
            title="Niva AI Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/request-access">
              <Button variant="hero" size="lg">
                Request Test Access
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
