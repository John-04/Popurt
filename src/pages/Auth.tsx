import { useState } from "react";
import { Link } from "react-router-dom";
import { Wallet, Mail, Lock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FloatingBackground } from "@/components/ui/floating-background";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);

  const walletOptions = [
    { name: "MetaMask", icon: "🦊", popular: true },
    { name: "WalletConnect", icon: "🔗", popular: false },
    { name: "Coinbase Wallet", icon: "🔵", popular: true },
    { name: "Base Wallet", icon: "🔷", popular: false }
  ];

  const handleWalletConnect = async (walletName: string) => {
    setIsLoading(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsLoading(false);
      // In real app, navigate to dashboard on success
    }, 2000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <FloatingBackground />
      
      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6 glass-card">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Auth Card */}
        <div className="glass-card p-8 animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 animate-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold gradient-text">Welcome to CrystalFlow</h1>
            <p className="text-foreground/70 mt-2">Connect securely to start saving</p>
          </div>

          <Tabs defaultValue="wallet" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass mb-6">
              <TabsTrigger value="wallet" className="text-sm">Wallet Connect</TabsTrigger>
              <TabsTrigger value="email" className="text-sm">Email & Password</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wallet" className="space-y-4">
              <div className="space-y-3">
                {walletOptions.map((wallet) => (
                  <Button
                    key={wallet.name}
                    variant="outline"
                    className="w-full glass-card justify-start hover:scale-105 transition-all duration-300 relative"
                    onClick={() => handleWalletConnect(wallet.name)}
                    disabled={isLoading}
                  >
                    <span className="text-2xl mr-3">{wallet.icon}</span>
                    <span className="flex-1 text-left">{wallet.name}</span>
                    {wallet.popular && (
                      <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </Button>
                ))}
              </div>
              
              {isLoading && (
                <div className="text-center py-4">
                  <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-foreground/70">Connecting wallet...</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="email" className="space-y-4">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 glass mb-4">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="glass-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="glass-card"
                    />
                  </div>
                  <Button className="w-full pulse-glow">
                    <Mail className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      className="glass-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      className="glass-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      className="glass-card"
                    />
                  </div>
                  <Button className="w-full pulse-glow">
                    <Lock className="w-4 h-4 mr-2" />
                    Create Account
                  </Button>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>

          <p className="text-xs text-foreground/50 text-center mt-6">
            By connecting, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}