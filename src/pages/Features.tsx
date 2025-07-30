import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  BarChart3, 
  Zap, 
  Mail, 
  Linkedin,
  Monitor,
  TrendingUp,
  Shield,
  Settings,
  Users,
  Database,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const FeaturesPage = () => {
  const campaignTypes = [
    {
      icon: Mail,
      title: "Email Marketing Campaigns",
      description: "Advanced email automation with personalized sequences, A/B testing, and detailed analytics.",
      features: ["Automated drip sequences", "Dynamic personalization", "Advanced segmentation", "Deliverability optimization"],
      stats: "95% Delivery Rate"
    },
    {
      icon: Linkedin,
      title: "LinkedIn B2B Campaigns",
      description: "Professional LinkedIn advertising with precision targeting for B2B decision makers.",
      features: ["InMail automation", "Sponsored content", "Lead gen forms", "Account-based targeting"],
      stats: "3.2x Higher CTR"
    },
    {
      icon: Monitor,
      title: "Display Advertising",
      description: "Programmatic display campaigns across premium publisher networks with real-time optimization.",
      features: ["Programmatic buying", "Creative optimization", "Retargeting campaigns", "Cross-device tracking"],
      stats: "85% Brand Recall"
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "ROI-focused campaigns optimized for conversions with advanced attribution modeling.",
      features: ["Multi-touch attribution", "Conversion optimization", "Budget automation", "Performance insights"],
      stats: "247% ROI Average"
    }
  ];

  const platformFeatures = [
    {
      icon: Target,
      title: "Advanced Targeting",
      description: "AI-powered audience segmentation with behavioral and demographic precision."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with live performance metrics and actionable insights."
    },
    {
      icon: Settings,
      title: "Campaign Automation",
      description: "Intelligent automation that optimizes campaigns for maximum performance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user access with role-based permissions and approval workflows."
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless integration with Salesforce, HubSpot, Zoho, and other leading CRMs."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR, CCPA compliance and data protection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Comprehensive Campaign Platform</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Drive Conversions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines advanced targeting, real-time analytics, 
            and proven campaign strategies to deliver exceptional results for your B2B sales team.
          </p>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Campaign Types That Convert
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our proven campaign formats, each optimized for maximum performance and ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {campaignTypes.map((campaign, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <campaign.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Performance</div>
                      <div className="text-lg font-bold text-primary">{campaign.stats}</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{campaign.description}</p>
                  
                  <div className="space-y-3">
                    {campaign.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline-magenta" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built for performance marketers who demand precision, automation, and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group bg-background">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to See These Features in Action?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and discover how our platform can transform 
              your campaign performance and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Book Interactive Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-magenta" size="xl">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;