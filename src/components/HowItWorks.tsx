import { CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose Your Domain",
    description: "Select from UPSC, SSB, PSC, campus placements, or create a custom interview type.",
  },
  {
    step: "02",
    title: "Start the Interview",
    description: "Engage in natural voice conversations with our AI interviewer in real-time.",
  },
  {
    step: "03",
    title: "Get Instant Feedback",
    description: "Receive detailed analysis, scoring, and personalized improvement recommendations.",
  },
  {
    step: "04",
    title: "Track Progress",
    description: "Monitor your improvement over time with comprehensive analytics and insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            How It <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Four simple steps to transform your interview preparation journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
          
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center relative z-10">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      {item.step}
                    </span>
                  </div>
                  <CheckCircle className="absolute -top-2 -right-2 w-8 h-8 text-primary bg-background rounded-full" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
