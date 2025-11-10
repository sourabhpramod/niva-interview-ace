import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Niva AI</span>
            </div>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Transforming interview preparation with intelligent AI technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Demo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} Niva AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
