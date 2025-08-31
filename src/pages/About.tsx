import { Shield, Zap, TrendingUp, Users, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingBackground } from "@/components/ui/floating-background";
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Your funds are secured by smart contracts on Ethereum and Base networks. Full transparency with every transaction verifiable on-chain."
    },
    {
      icon: Zap,
      title: "Automatic Savings",
      description: "Set your percentage and let our technology handle the rest. Round-ups and percentage-based savings happen seamlessly with every purchase."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Wealth",
      description: "Earn rewards through our gamified system while building long-term wealth. Every save counts toward your financial goals."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of users building financial discipline together. Share achievements and learn from the community."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "$12M+", label: "Total Saved" },
    { number: "2.1M+", label: "Transactions" },
    { number: "99.9%", label: "Uptime" }
  ];

  const team = [
    { name: "Alex Chen", role: "Founder & CEO", image: "👨‍💼" },
    { name: "Sarah Kim", role: "CTO", image: "👩‍💻" },
    { name: "Marcus Johnson", role: "Head of Product", image: "👨‍🔬" },
    { name: "Elena Rodriguez", role: "Lead Designer", image: "👩‍🎨" }
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      <FloatingBackground />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <section className="text-center py-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Future of <span className="gradient-text">Smart Saving</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            CrystalFlow revolutionizes personal finance by combining Web3 technology with 
            automated savings. Build wealth transparently, securely, and effortlessly.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="glass-card p-12 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              We believe everyone deserves financial freedom without complexity. By leveraging 
              blockchain technology, we're creating a transparent, secure, and user-friendly 
              platform that makes saving money as natural as spending it. Every transaction 
              builds toward your financial goals while you maintain complete control of your assets.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose CrystalFlow?</h2>
            <p className="text-lg text-foreground/70">
              Built on cutting-edge technology with user experience at the forefront
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="glass-card p-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted by Thousands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-4xl font-bold gradient-text mb-2">{stat.number}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Built on Solid Foundations</h2>
            <p className="text-lg text-foreground/70">
              Leveraging the best of Web3 technology for security and transparency
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center animate-fade-in-up">
              <div className="text-4xl mb-4">⟠</div>
              <h3 className="text-xl font-semibold mb-3">Ethereum Network</h3>
              <p className="text-foreground/70">
                Secure smart contracts on the world's most trusted blockchain
              </p>
            </div>
            <div className="glass-card text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">🔷</div>
              <h3 className="text-xl font-semibold mb-3">Base Network</h3>
              <p className="text-foreground/70">
                Fast, low-cost transactions on Coinbase's L2 solution
              </p>
            </div>
            <div className="glass-card text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-3">Multi-Sig Security</h3>
              <p className="text-foreground/70">
                Enterprise-grade security with multiple signature requirements
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-foreground/70">
              Passionate builders creating the future of personal finance
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="glass-card text-center hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-foreground/70">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation & Resources */}
        <section className="py-20">
          <div className="glass-card p-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">Learn More</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Button variant="outline" className="h-20 flex-col glass-card">
                <ExternalLink className="w-6 h-6 mb-2" />
                Whitepaper
              </Button>
              <Button variant="outline" className="h-20 flex-col glass-card">
                <ExternalLink className="w-6 h-6 mb-2" />
                Documentation
              </Button>
              <Button variant="outline" className="h-20 flex-col glass-card">
                <ExternalLink className="w-6 h-6 mb-2" />
                GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="glass-card p-12 hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Savings Journey</span>?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join the revolution in automated savings. Start building wealth today 
              with the security and transparency of blockchain technology.
            </p>
            <Button asChild size="lg" className="pulse-glow text-lg px-12 py-4">
              <Link to="/auth">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}