import { useState } from "react";
import { Send, Download, QrCode, Copy, Filter, Search, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FloatingBackground } from "@/components/ui/floating-background";
import { TransactionModal } from "@/components/ui/transaction-modal";
import { toast } from "@/hooks/use-toast";

export default function Transactions() {
  const [selectedToken, setSelectedToken] = useState("ETH");
  const [walletAddress] = useState("0x742d35cc4...39f6a5");
  
  const tokens = [
    { symbol: "ETH", name: "Ethereum", balance: "2.4567", icon: "⟠" },
    { symbol: "USDC", name: "USD Coin", balance: "1,234.56", icon: "💵" },
    { symbol: "USDT", name: "Tether", balance: "856.90", icon: "🟢" }
  ];

  const transactions = [
    {
      id: 1,
      type: "send",
      amount: "0.125",
      token: "ETH",
      to: "0x8ba1f109e...7a63ef82",
      status: "success",
      timestamp: "2024-01-15 14:30",
      fee: "0.002",
      hash: "0xabc123...def456"
    },
    {
      id: 2,
      type: "receive",
      amount: "500.00",
      token: "USDC",
      from: "0x9cb2e209a...8c73bf91",
      status: "success",
      timestamp: "2024-01-15 12:15",
      fee: "0.001",
      hash: "0xdef789...abc123"
    },
    {
      id: 3,
      type: "send",
      amount: "1.2345",
      token: "ETH",
      to: "0x7ab3d408b...6d82cf74",
      status: "pending",
      timestamp: "2024-01-15 10:45",
      fee: "0.003",
      hash: "0x123abc...789def"
    },
    {
      id: 4,
      type: "savings_transfer",
      amount: "100.00",
      token: "USDC",
      to: "Savings Vault",
      status: "success",
      timestamp: "2024-01-14 16:20",
      fee: "0.001",
      hash: "0x456def...123abc"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Address copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen pt-20 p-4 relative">
      <FloatingBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-2">Transactions</h1>
          <p className="text-foreground/70">Send, receive, and manage your digital assets</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Balance Overview */}
          <div className="lg:col-span-1">
            <div className="glass-card mb-6 animate-fade-in-up">
              <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
              <div className="space-y-4">
                {tokens.map((token) => (
                  <div key={token.symbol} className="flex items-center justify-between p-3 rounded-lg bg-glass-secondary/50 hover:bg-glass-secondary transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{token.icon}</span>
                      <div>
                        <p className="font-medium">{token.symbol}</p>
                        <p className="text-sm text-foreground/70">{token.name}</p>
                      </div>
                    </div>
                    <p className="font-semibold">{token.balance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet Address */}
            <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold mb-4">Your Address</h3>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-glass-secondary/50">
                <p className="font-mono text-sm flex-1">{walletAddress}</p>
                <Button size="icon" variant="ghost" onClick={() => copyToClipboard(walletAddress)}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full mt-4 glass-card">
                <QrCode className="w-4 h-4 mr-2" />
                Show QR Code
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="send" className="w-full">
              <TabsList className="grid w-full grid-cols-3 glass mb-6">
                <TabsTrigger value="send">Send</TabsTrigger>
                <TabsTrigger value="receive">Receive</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="send" className="space-y-6">
                <div className="glass-card animate-fade-in-up">
                  <h2 className="text-xl font-semibold mb-6">Send Tokens</h2>
                  <div className="text-center py-8">
                    <TransactionModal
                      title="Send Transaction"
                      description="Send tokens to any wallet address"
                    >
                      <Button className="pulse-glow text-lg px-8 py-4">
                        <Send className="w-5 h-5 mr-2" />
                        Open Send Modal
                      </Button>
                    </TransactionModal>
                    <p className="text-sm text-foreground/70 mt-4">
                      Click above to open the secure transaction modal
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="receive" className="space-y-6">
                <div className="glass-card text-center animate-fade-in-up">
                  <h2 className="text-xl font-semibold mb-6">Receive Tokens</h2>
                  <div className="w-48 h-48 mx-auto mb-6 bg-glass-secondary/50 rounded-lg flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-foreground/50" />
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    Scan this QR code or copy your wallet address below
                  </p>
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-glass-secondary/50 mb-4">
                    <p className="font-mono text-sm flex-1">{walletAddress}</p>
                    <Button size="icon" variant="ghost" onClick={() => copyToClipboard(walletAddress)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    className="glass-card"
                    onClick={() => toast({
                      title: "QR Code Saved! 📱",
                      description: "QR code has been saved to your downloads",
                    })}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Save QR Code
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <div className="glass-card animate-fade-in-up">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h2 className="text-xl font-semibold">Transaction History</h2>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                        <Input placeholder="Search transactions..." className="pl-10 glass-card" />
                      </div>
                      <Button variant="outline" size="icon" className="glass-card">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {transactions.map((tx, index) => (
                      <div 
                        key={tx.id} 
                        className="flex items-center justify-between p-4 rounded-lg bg-glass-secondary/50 hover:bg-glass-secondary transition-colors cursor-pointer group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            tx.type === 'send' ? 'bg-primary/20' : 
                            tx.type === 'receive' ? 'bg-success/20' : 'bg-web3-purple/20'
                          }`}>
                            {tx.type === 'send' ? 
                              <ArrowUpRight className="w-5 h-5 text-primary" /> :
                              tx.type === 'receive' ?
                              <ArrowDownLeft className="w-5 h-5 text-success" /> :
                              <ArrowUpRight className="w-5 h-5 text-web3-purple" />
                            }
                          </div>
                          <div>
                            <p className="font-medium">
                              {tx.type === 'send' ? 'Sent' : 
                               tx.type === 'receive' ? 'Received' : 'Savings Transfer'}
                            </p>
                            <p className="text-sm text-foreground/70">
                              {tx.type === 'send' ? `To: ${tx.to}` : 
                               tx.type === 'receive' ? `From: ${tx.from}` : 
                               `To: ${tx.to}`}
                            </p>
                            <p className="text-xs text-foreground/50">{tx.timestamp}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${
                            tx.type === 'send' ? 'text-primary' : 'text-success'
                          }`}>
                            {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.token}
                          </p>
                          <p className={`text-xs px-2 py-1 rounded-full ${
                            tx.status === 'success' ? 'bg-success/20 text-success' :
                            tx.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                            'bg-red-500/20 text-red-500'
                          }`}>
                            {tx.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}