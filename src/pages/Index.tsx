import { Link } from "react-router-dom";
import { Upload, Shield, Zap, TrendingUp, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get comprehensive feedback on your resume in seconds, not hours."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is processed securely and deleted immediately after analysis."
    },
    {
      icon: TrendingUp,
      title: "ATS Optimization",
      description: "Ensure your resume passes Applicant Tracking Systems successfully."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content: "This tool helped me improve my resume score from 65 to 89. I got 3 interviews in the first week!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content: "The AI feedback was incredibly detailed and actionable. Highly recommend for anyone job hunting.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Data Analyst",
      content: "Finally, a resume checker that actually understands what recruiters are looking for.",
      rating: 5
    }
  ];

  const stats = [
    { value: "50K+", label: "Resumes Analyzed" },
    { value: "94%", label: "Success Rate" },
    { value: "2.5x", label: "More Interviews" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Upload className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">ResumeScore</span>
            </div>
            <Button variant="outline" asChild>
              <Link to="/upload">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            AI-Powered Resume Analysis
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Score Your Resume
            <br />
            <span className="text-primary">Land Your Dream Job</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant AI-powered feedback on your resume. Our advanced analysis helps you 
            optimize for ATS systems and impress hiring managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <Link to="/upload">
                Analyze My Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              See Sample Report
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose ResumeScore?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive analysis to help you create 
              a resume that stands out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get professional feedback in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload</h3>
              <p className="text-muted-foreground">
                Upload your resume in PDF or DOCX format
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Analyze</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your resume across multiple criteria
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Improve</h3>
              <p className="text-muted-foreground">
                Get actionable feedback and improve your score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Job Seekers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who've improved their resumes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Score Your Resume?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of job seekers who've improved their resumes with our AI-powered analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/upload">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <Upload className="h-3 w-3 text-white" />
              </div>
              <span className="font-semibold text-foreground">ResumeScore</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border/10 text-center text-sm text-muted-foreground">
            © 2024 ResumeScore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
