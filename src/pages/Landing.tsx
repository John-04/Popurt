import { Link } from "react-router-dom";
import { ArrowRight, Shield, TrendingUp, Zap, Wallet, Eye, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const features = [
    {
      icon: Zap,
      title: "Spend & Save",
      description: "Automatically save a percentage of every transaction. Build wealth while you spend with our smart round-up technology."
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Beautiful real-time analytics show your savings growth. Set goals and watch your wealth accumulate transparently."
    },
    {
      icon: Gift,
      title: "Earn Rewards",
      description: "Unlock milestone rewards and achievements. The more you save, the more you earn through our gamified system."
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Built on blockchain technology. Every transaction is verifiable, secure, and completely under your control."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            Smart Savings
            <br />
            <span className="text-foreground">For Web3 Era</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary spend-to-save technology that automatically builds your wealth. 
            Connect your wallet and start earning while you spend.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero">
              <Link to="/auth">
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                <Eye className="w-5 h-5 mr-2" />
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">CrystalFlow</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of saving with transparent, automated, and rewarding financial technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="card p-6 hover-lift text-center group"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card p-12 hover-lift">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start <span className="gradient-text">Saving Smart</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already building wealth automatically. 
              No monthly fees, no hidden costs, just transparent savings.
            </p>
            <Button asChild variant="hero">
              <Link to="/auth">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}