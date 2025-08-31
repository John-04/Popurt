import { useState } from "react";
import { TrendingUp, Wallet, Target, Plus, Eye, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FloatingBackground } from "@/components/ui/floating-background";

export default function Dashboard() {
  const [savingsProgress] = useState(67);
  const [totalSavings] = useState(2847.32);
  const [monthlyGoal] = useState(5000);
  const [totalSpent] = useState(8234.56);

  const quickActions = [
    { icon: Plus, label: "Add Savings", color: "bg-success" },
    { icon: Eye, label: "View Transactions", color: "bg-primary" },
    { icon: Target, label: "Set Goals", color: "bg-web3-purple" },
    { icon: Gift, label: "Check Rewards", color: "bg-web3-green" }
  ];

  const recentTransactions = [
    { id: 1, type: "spend", amount: 45.99, description: "Coffee Shop", saved: 4.60 },
    { id: 2, type: "spend", amount: 123.45, description: "Grocery Store", saved: 12.35 },
    { id: 3, type: "save", amount: 100.00, description: "Manual Savings", saved: 0 },
    { id: 4, type: "spend", amount: 67.89, description: "Gas Station", saved: 6.79 }
  ];

  return (
    <div className="min-h-screen pt-20 p-4 relative">
      <FloatingBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-foreground/70">Here's your savings overview for this month</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-foreground/70">Total Savings</h3>
              <TrendingUp className="w-4 h-4 text-success group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold gradient-text">${totalSavings.toLocaleString()}</p>
            <p className="text-sm text-success mt-1">+12.5% this month</p>
          </div>

          <div className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-foreground/70">Total Spent</h3>
              <Wallet className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold">${totalSpent.toLocaleString()}</p>
            <p className="text-sm text-foreground/50 mt-1">This month</p>
          </div>

          <div className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-foreground/70">Avg. Save Rate</h3>
              <Target className="w-4 h-4 text-web3-purple group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold">10.2%</p>
            <p className="text-sm text-web3-purple mt-1">Per transaction</p>
          </div>

          <div className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-foreground/70">Rewards Earned</h3>
              <Gift className="w-4 h-4 text-web3-green group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold">247</p>
            <p className="text-sm text-web3-green mt-1">Crystal Points</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Savings Progress */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-semibold mb-6">Monthly Savings Goal</h2>
              <div className="relative">
                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-foreground/10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#progress-gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${savingsProgress * 2.51} 251`}
                        strokeLinecap="round"
                        className="animate-glow"
                      />
                      <defs>
                        <linearGradient id="progress-gradient">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--success))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold gradient-text">{savingsProgress}%</span>
                      <span className="text-sm text-foreground/70">Complete</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold mb-1">${totalSavings.toLocaleString()} / ${monthlyGoal.toLocaleString()}</p>
                  <p className="text-foreground/70">Keep going! You're doing great 🎉</p>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div 
                    key={transaction.id} 
                    className="flex items-center justify-between p-4 rounded-lg bg-glass-secondary/50 hover:bg-glass-secondary transition-colors duration-200"
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${transaction.type === 'spend' ? 'bg-primary/20' : 'bg-success/20'} flex items-center justify-center`}>
                        {transaction.type === 'spend' ? 
                          <Wallet className="w-5 h-5 text-primary" /> : 
                          <TrendingUp className="w-5 h-5 text-success" />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        {transaction.saved > 0 && (
                          <p className="text-sm text-success">+${transaction.saved.toFixed(2)} saved</p>
                        )}
                      </div>
                    </div>
                    <p className="font-semibold">${transaction.amount.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="h-24 flex-col glass-card hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center mb-2`}>
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-center">{action.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Savings Tips */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-lg font-semibold mb-4">💡 Savings Tip</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Increase your round-up percentage to 15% to reach your monthly goal faster. 
                Small changes make a big difference!
              </p>
              <Button variant="outline" size="sm" className="w-full mt-4 glass-card">
                Adjust Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}