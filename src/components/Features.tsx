import { Mic, Brain, Settings, Target, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "Voice-Driven Interviews",
    description: "Natural conversations with AI interviewers using advanced speech recognition and synthesis technology.",
  },
  {
    icon: Brain,
    title: "Adaptive Intelligence",
    description: "Smart question flow that adapts to your responses, creating a realistic interview experience.",
  },
  {
    icon: Settings,
    title: "Modular Configuration",
    description: "YAML-based setup allows easy customization of interview types, questions, and scoring rubrics.",
  },
  {
    icon: Target,
    title: "Domain Expertise",
    description: "Specialized interview modules for UPSC, SSB, PSC, campus placements, and more.",
  },
  {
    icon: Users,
    title: "Real-time Feedback",
    description: "Instant analysis of your performance with detailed scoring and improvement suggestions.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Browser-based platform with no installation required. Start practicing in seconds.",
  },
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Niva AI
          </span>{" "}
          from <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold">
      Qulander Tech
    </span>
        </h2>
          <p className="text-lg text-muted-foreground font-light">
            Advanced features designed to provide the most realistic and effective interview preparation experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 group bg-card/50 backdrop-blur-sm"
            >
              <div className="rounded-2xl w-14 h-14 bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
