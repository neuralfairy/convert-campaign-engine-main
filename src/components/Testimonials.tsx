import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Marketing",
      company: "TechFlow Solutions",
      content: "LeadsAppointment transformed our B2B campaigns. We've seen a 300% increase in qualified leads and our ROI has never been better.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b5?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      title: "Growth Director",
      company: "ScaleUp Ventures",
      content: "The precision targeting and real-time analytics have completely changed how we approach performance marketing. Outstanding results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Manager",
      company: "InnovateCorp",
      content: "Setup was incredibly fast and the support team is phenomenal. Our conversion rates improved by 85% in just the first month.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const clientLogos = [
    "TechFlow",
    "ScaleUp",
    "InnovateCorp",
    "GrowthLabs",
    "NextGen"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped companies achieve remarkable growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-background">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8 font-medium">
            TRUSTED BY 500+ COMPANIES WORLDWIDE
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-12 mx-auto bg-gradient-to-r from-muted to-muted-foreground/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-muted-foreground text-sm">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;