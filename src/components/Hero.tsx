import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/15 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>Trusted by 500+ B2B Companies</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Performance Campaigns{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Built to Convert
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Maximize ROI with data-driven promotional campaigns that empower your B2B sales team 
                and deliver measurable results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3.2x</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24hrs</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-magenta" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-secondary px-3 py-1 rounded-full text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span>Lightning Fast Setup</span>
              </div>
              <div className="flex items-center space-x-2 bg-secondary px-3 py-1 rounded-full text-sm">
                <Target className="w-4 h-4 text-primary" />
                <span>Precision Targeting</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <img
                src={heroImage}
                alt="Marketing Campaign Dashboard"
                className="w-full h-auto rounded-2xl shadow-elegant transform hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-glow">
                <div className="text-sm font-medium">Live Campaign</div>
                <div className="text-xs opacity-90">+247% ROI</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-foreground px-4 py-2 rounded-lg shadow-lg border">
                <div className="text-sm font-medium">Conversion Rate</div>
                <div className="text-lg font-bold text-primary">85.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;