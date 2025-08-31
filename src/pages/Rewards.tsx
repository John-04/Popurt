import { useState } from "react";
import { Gift, Star, Trophy, Target, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FloatingBackground } from "@/components/ui/floating-background";

export default function Rewards() {
  const [crystalPoints] = useState(2847);
  const [currentLevel] = useState(12);
  const [nextLevelProgress] = useState(73);

  const milestones = [
    {
      id: 1,
      title: "First Save",
      description: "Make your first automatic save",
      reward: "50 Crystal Points",
      completed: true,
      icon: Zap,
      color: "bg-success"
    },
    {
      id: 2,
      title: "Century Club",
      description: "Save $100 in total",
      reward: "100 Crystal Points + Badge",
      completed: true,
      icon: Target,
      color: "bg-primary"
    },
    {
      id: 3,
      title: "Consistency King",
      description: "Save for 30 consecutive days",
      reward: "200 Crystal Points",
      completed: true,
      icon: Crown,
      color: "bg-web3-purple"
    },
    {
      id: 4,
      title: "Big Spender",
      description: "Complete 100 transactions",
      reward: "150 Crystal Points",
      completed: false,
      progress: 78,
      icon: Star,
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Savings Master",
      description: "Reach $1,000 in savings",
      reward: "500 Crystal Points + NFT",
      completed: false,
      progress: 45,
      icon: Trophy,
      color: "bg-yellow-500"
    },
    {
      id: 6,
      title: "Round-up Rookie",
      description: "Enable round-up savings for 7 days",
      reward: "75 Crystal Points",
      completed: false,
      progress: 20,
      icon: Gift,
      color: "bg-pink-500"
    }
  ];

  const rewardTiers = [
    { points: 1000, reward: "Custom Avatar", unlocked: true },
    { points: 2500, reward: "Premium Analytics", unlocked: true },
    { points: 5000, reward: "Exclusive NFT Badge", unlocked: false },
    { points: 10000, reward: "Bonus Interest Rate", unlocked: false },
    { points: 25000, reward: "VIP Support Access", unlocked: false }
  ];

  const achievements = [
    { title: "Early Adopter", date: "Jan 2024", rarity: "Legendary" },
    { title: "Savings Streak", date: "Dec 2023", rarity: "Epic" },
    { title: "First Save", date: "Nov 2023", rarity: "Common" },
    { title: "Round-up Hero", date: "Dec 2023", rarity: "Rare" }
  ];

  return (
    <div className="min-h-screen pt-20 p-4 relative">
      <FloatingBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-2">Rewards & Milestones</h1>
          <p className="text-foreground/70">Earn rewards for your saving achievements</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Level Progress */}
            <div className="glass-card animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Level {currentLevel}</h2>
                  <p className="text-foreground/70">Savings Champion</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold gradient-text">{crystalPoints.toLocaleString()}</p>
                  <p className="text-sm text-foreground/70">Crystal Points</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to Level {currentLevel + 1}</span>
                  <span>{nextLevelProgress}%</span>
                </div>
                <Progress value={nextLevelProgress} className="h-3 bg-glass-secondary/50">
                  <div className="h-full bg-gradient-primary rounded-full animate-glow" style={{ width: `${nextLevelProgress}%` }}></div>
                </Progress>
                <p className="text-xs text-foreground/70">730 more points to level up!</p>
              </div>
            </div>

            {/* Milestones */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-semibold mb-6">Milestones</h2>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.id} 
                    className={`p-4 rounded-lg ${milestone.completed ? 'bg-success/10 border border-success/20' : 'bg-glass-secondary/50'} hover:scale-105 transition-all duration-300`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg ${milestone.color} flex items-center justify-center ${milestone.completed ? 'animate-glow' : ''}`}>
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold flex items-center">
                            {milestone.title}
                            {milestone.completed && (
                              <span className="ml-2 text-success">✓</span>
                            )}
                          </h3>
                          <p className="text-sm text-foreground/70">{milestone.description}</p>
                          <p className="text-sm font-medium text-primary">{milestone.reward}</p>
                        </div>
                      </div>
                      {milestone.completed ? (
                        <div className="text-success font-semibold">Completed!</div>
                      ) : (
                        <div className="text-right">
                          <p className="text-sm font-medium">{milestone.progress}%</p>
                          <div className="w-20 h-2 bg-glass-secondary/50 rounded-full mt-1">
                            <div 
                              className="h-full bg-gradient-primary rounded-full" 
                              style={{ width: `${milestone.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reward Tiers */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-semibold mb-6">Reward Tiers</h2>
              <div className="space-y-3">
                {rewardTiers.map((tier, index) => (
                  <div 
                    key={tier.points} 
                    className={`flex items-center justify-between p-4 rounded-lg ${tier.unlocked ? 'bg-success/10 border border-success/20' : 'bg-glass-secondary/50'}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full ${tier.unlocked ? 'bg-success' : 'bg-foreground/20'} flex items-center justify-center`}>
                        {tier.unlocked ? (
                          <span className="text-white text-sm">✓</span>
                        ) : (
                          <span className="text-foreground/50 text-sm">🔒</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{tier.reward}</p>
                        <p className="text-sm text-foreground/70">{tier.points.toLocaleString()} points required</p>
                      </div>
                    </div>
                    {tier.unlocked && (
                      <Button variant="outline" size="sm" className="glass-card">
                        Claim
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Points */}
            <div className="glass-card text-center animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center animate-glow">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Your Points</h3>
              <p className="text-3xl font-bold gradient-text mb-4">{crystalPoints.toLocaleString()}</p>
              <Button variant="outline" className="w-full glass-card">
                <Gift className="w-4 h-4 mr-2" />
                Redeem Points
              </Button>
            </div>

            {/* Achievement Badges */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold mb-4">Achievement Badges</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title} 
                    className="flex items-center justify-between p-3 rounded-lg bg-glass-secondary/50"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-foreground/70">{achievement.date}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      achievement.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-500' :
                      achievement.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-500' :
                      achievement.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-gray-500/20 text-gray-500'
                    }`}>
                      {achievement.rarity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Challenge */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-4">🎯 Weekly Challenge</h3>
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-3">
                  Complete 25 transactions this week
                </p>
                <div className="mb-3">
                  <p className="text-2xl font-bold gradient-text">18/25</p>
                </div>
                <Progress value={72} className="h-2 mb-3 bg-glass-secondary/50">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: '72%' }}></div>
                </Progress>
                <p className="text-xs text-foreground/70">7 more to complete</p>
                <p className="text-sm font-medium text-primary mt-2">Reward: 300 Crystal Points</p>
              </div>
            </div>

            {/* Referral Program */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold mb-4">🤝 Invite Friends</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Earn 500 points for each friend who joins and makes their first save!
              </p>
              <Button variant="outline" className="w-full glass-card">
                Share Invite Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}