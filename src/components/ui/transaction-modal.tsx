import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface TransactionModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function TransactionModal({ children, title, description }: TransactionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("ETH");

  const tokens = [
    { symbol: "ETH", name: "Ethereum", balance: "2.4567" },
    { symbol: "USDC", name: "USD Coin", balance: "1,234.56" },
    { symbol: "USDT", name: "Tether", balance: "856.90" }
  ];

  const handleSend = async () => {
    if (!recipient || !amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate transaction
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
      
      toast({
        title: "Transaction Sent! 🚀",
        description: `Successfully sent ${amount} ${selectedToken} to ${recipient.slice(0, 6)}...${recipient.slice(-4)}`,
      });
      
      // Reset form
      setRecipient("");
      setAmount("");
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="glass-card border border-glass-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="gradient-text">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="recipient">Recipient Address</Label>
            <Input
              id="recipient"
              placeholder="0x... or ENS name"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="glass-card"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="token">Token</Label>
              <select 
                className="w-full p-3 rounded-lg glass-card bg-transparent border"
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
              >
                {tokens.map((token) => (
                  <option key={token.symbol} value={token.symbol} className="bg-background">
                    {token.symbol} - {token.balance}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="glass-card"
              />
            </div>
          </div>

          <div className="bg-glass-secondary/50 p-4 rounded-lg">
            <div className="flex justify-between text-sm">
              <span>Estimated Gas Fee:</span>
              <span>0.002 ETH (~$3.45)</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Total:</span>
              <span className="font-semibold">{amount ? `${parseFloat(amount) + 0.002} ${selectedToken}` : '0.0 ETH'}</span>
            </div>
          </div>

          <Button 
            onClick={handleSend} 
            className="w-full pulse-glow"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Transaction...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Transaction
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}