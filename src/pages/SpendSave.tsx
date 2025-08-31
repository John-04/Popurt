import { useState } from "react";
import { ShoppingCart, TrendingUp, Settings, RotateCcw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { FloatingBackground } from "@/components/ui/floating-background";

export default function SpendSave() {
  const [roundUpEnabled, setRoundUpEnabled] = useState(true);
  const [savePercentage, setSavePercentage] = useState([10]);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);

  const spendingData = [
    { category: "Food & Dining", amount: 342.56, saved: 34.26, icon: "🍽️", color: "bg-orange-500" },
    { category: "Shopping", amount: 189.23, saved: 18.92, icon: "🛍️", color: "bg-purple-500" },
    { category: "Transportation", amount: 156.78, saved: 15.68, icon: "🚗", color: "bg-blue-500" },
    { category: "Entertainment", amount: 98.45, saved: 9.85, icon: "🎬", color: "bg-pink-500" },
    { category: "Utilities", amount: 234.67, saved: 23.47, icon: "⚡", color: "bg-yellow-500" },
  ];

  const recentTransactions = [
    { id: 1, merchant: "Starbucks", amount: 5.75, saved: 0.25, time: "2 hours ago" },
    { id: 2, merchant: "Amazon", amount: 89.99, saved: 9.00, time: "4 hours ago" },
    { id: 3, merchant: "Shell Gas", amount: 45.67, saved: 4.57, time: "1 day ago" },
    { id: 4, merchant: "Netflix", amount: 15.99, saved: 1.60, time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen pt-20 p-4 relative">
      <FloatingBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-2">Spend & Save</h1>
          <p className="text-foreground/70">Automated savings with every purchase you make</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Spending Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Savings Settings */}
            <div className="glass-card animate-fade-in-up">
              <h2 className="text-xl font-semibold mb-6">Savings Settings</h2>
              
              <div className="space-y-6">
                {/* Round-up Toggle */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-glass-secondary/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h3 className="font-medium">Round-up Savings</h3>
                      <p className="text-sm text-foreground/70">Round purchases to nearest dollar</p>
                    </div>
                  </div>
                  <Switch 
                    checked={roundUpEnabled}
                    onCheckedChange={setRoundUpEnabled}
                  />
                </div>

                {/* Auto-save Toggle */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-glass-secondary/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Auto-save</h3>
                      <p className="text-sm text-foreground/70">Save percentage of each purchase</p>
                    </div>
                  </div>
                  <Switch 
                    checked={autoSaveEnabled}
                    onCheckedChange={setAutoSaveEnabled}
                  />
                </div>

                {/* Save Percentage Slider */}
                {autoSaveEnabled && (
                  <div className="p-4 rounded-lg bg-glass-secondary/50 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Save Percentage</h3>
                      <span className="text-lg font-bold gradient-text">{savePercentage[0]}%</span>
                    </div>
                    <Slider
                      value={savePercentage}
                      onValueChange={setSavePercentage}
                      max={25}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-foreground/70">
                      Save {savePercentage[0]}% of every purchase automatically
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Spending Categories */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-semibold mb-6">Spending by Category</h2>
              <div className="space-y-4">
                {spendingData.map((category, index) => (
                  <div 
                    key={category.category} 
                    className="flex items-center justify-between p-4 rounded-lg bg-glass-secondary/50 hover:bg-glass-secondary transition-colors group"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h3 className="font-medium">{category.category}</h3>
                        <p className="text-sm text-success">+${category.saved.toFixed(2)} saved</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${category.amount.toFixed(2)}</p>
                      <p className="text-sm text-foreground/70">spent</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Transactions</h2>
                <Button variant="outline" size="sm" className="glass-card">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage
                </Button>
              </div>
              <div className="space-y-3">
                {recentTransactions.map((transaction, index) => (
                  <div 
                    key={transaction.id} 
                    className="flex items-center justify-between p-4 rounded-lg bg-glass-secondary/50 hover:bg-glass-secondary transition-colors"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.merchant}</p>
                        <p className="text-sm text-foreground/70">{transaction.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${transaction.amount.toFixed(2)}</p>
                      <p className="text-sm text-success">+${transaction.saved.toFixed(2)} saved</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Savings Summary Panel */}
          <div className="space-y-6">
            {/* Monthly Summary */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-lg font-semibold mb-4">This Month's Impact</h2>
              <div className="space-y-4">
                <div className="text-center p-4 rounded-lg bg-glass-secondary/50">
                  <p className="text-2xl font-bold gradient-text">$124.67</p>
                  <p className="text-sm text-foreground/70">Total Saved</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-success/10">
                    <p className="text-lg font-semibold text-success">$89.23</p>
                    <p className="text-xs text-foreground/70">Auto-save</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <p className="text-lg font-semibold text-primary">$35.44</p>
                    <p className="text-xs text-foreground/70">Round-ups</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Goals */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-lg font-semibold mb-4">Savings Goal</h2>
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Emergency Fund</span>
                    <span>62%</span>
                  </div>
                  <div className="w-full bg-glass-secondary/50 rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[62%] animate-glow"></div>
                  </div>
                  <div className="flex justify-between text-xs text-foreground/70 mt-1">
                    <span>$1,240</span>
                    <span>$2,000</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full glass-card">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Update Goal
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-lg font-semibold mb-4">Quick Transfer</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full glass-card justify-start">
                  <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-success" />
                  </div>
                  Move to Savings
                </Button>
                <Button variant="outline" className="w-full glass-card justify-start">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                  </div>
                  Transfer to Spending
                </Button>
              </div>
            </div>

            {/* Savings Tip */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-lg font-semibold mb-3">💡 Pro Tip</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Enable both round-ups and auto-save for maximum savings impact. 
                You're currently saving {savePercentage[0]}% + round-ups on every purchase!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}