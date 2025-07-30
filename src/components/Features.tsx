import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Mail, 
  Linkedin,
  Monitor,
  TrendingUp,
  Shield
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered audience segmentation for maximum campaign effectiveness and ROI optimization.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live campaign performance tracking with actionable insights and conversion metrics.",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Lightning Setup",
      description: "Get campaigns live in under 24 hours with our streamlined onboarding process.",
      color: "text-yellow-500"
    }
  ];

  const campaignTypes = [
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Automated drip sequences and personalized email marketing",
      stats: "95% Delivery Rate"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Ads",
      description: "B2B-focused LinkedIn campaigns with advanced targeting",
      stats: "3.2x Higher CTR"
    },
    {
      icon: Monitor,
      title: "Display Advertising",
      description: "Programmatic display ads across premium publisher networks",
      stats: "85% Brand Recall"
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "ROI-focused campaigns optimized for conversions",
      stats: "247% ROI Average"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Scale Fast
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines advanced targeting, real-time analytics, 
            and proven campaign strategies to deliver exceptional results.
          </p>
        </div>

        {/* Quick Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${feature.color.replace('text-', '')}/10 to-${feature.color.replace('text-', '')}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campaign Types */}
        <div className="bg-muted/50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Campaign Types That Drive Results
            </h3>
            <p className="text-lg text-muted-foreground">
              Choose from our proven campaign formats, each optimized for maximum performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignTypes.map((campaign, index) => (
              <Card key={index} className="bg-background border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <campaign.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{campaign.description}</p>
                  <div className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {campaign.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;