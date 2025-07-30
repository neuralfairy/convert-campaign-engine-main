import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  Star,
  Zap,
  Crown,
  Building
} from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$297",
      period: "/month",
      description: "Perfect for small businesses getting started with performance campaigns",
      badge: null,
      features: [
        { name: "Up to 5,000 contacts", included: true },
        { name: "Email campaigns", included: true },
        { name: "Basic analytics", included: true },
        { name: "Standard support", included: true },
        { name: "Campaign templates", included: true },
        { name: "LinkedIn campaigns", included: false },
        { name: "Display advertising", included: false },
        { name: "Advanced automation", included: false },
        { name: "Custom integrations", included: false },
        { name: "Dedicated account manager", included: false }
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      icon: Star,
      price: "$797",
      period: "/month",
      description: "For scaling companies that need advanced campaign capabilities",
      badge: "Most Popular",
      features: [
        { name: "Up to 25,000 contacts", included: true },
        { name: "Email campaigns", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: true },
        { name: "Campaign templates", included: true },
        { name: "LinkedIn campaigns", included: true },
        { name: "Display advertising", included: true },
        { name: "Advanced automation", included: true },
        { name: "Standard integrations", included: true },
        { name: "Dedicated account manager", included: false }
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "",
      description: "Fully customized campaigns for large organizations with complex needs",
      badge: "Best Value",
      features: [
        { name: "Unlimited contacts", included: true },
        { name: "All campaign types", included: true },
        { name: "Custom analytics", included: true },
        { name: "24/7 white-glove support", included: true },
        { name: "Custom templates", included: true },
        { name: "Multi-channel campaigns", included: true },
        { name: "Programmatic advertising", included: true },
        { name: "Custom automation", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated account manager", included: true }
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all plans. No credit card required to start your trial."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support. Professional plans get priority support, and Enterprise customers receive 24/7 dedicated support."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, our Enterprise plan is fully customizable to meet your organization's specific needs and requirements."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building className="w-4 h-4" />
            <span>Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Choose the Plan That{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fits Your Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Scale as you grow with 
            flexible plans designed for businesses of all sizes.
          </p>
          <div className="inline-flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>14-day free trial</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>No setup fees</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-elegant hover:shadow-glow transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    {plan.name !== "Enterprise" && (
                      <p className="text-sm text-muted-foreground">Billed annually</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.popular ? "hero" : "outline-magenta"} 
                    className="w-full group"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how much revenue you could generate with our performance campaigns. 
            Our clients typically see 3.2x ROI within the first 90 days.
          </p>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">90 days</div>
                <div className="text-sm text-muted-foreground">Time to ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="mt-8 group">
              Get Personalized ROI Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We have answers. Contact us if you don't see what you're looking for.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;