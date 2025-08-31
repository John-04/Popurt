import { useState } from "react";
import { Wallet, LogOut, Copy, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/contexts/WalletContext";
import { toast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function WalletStatus() {
  const { isConnected, address, balance, disconnectWallet } = useWallet();
  const [showBalance, setShowBalance] = useState(true);

  if (!isConnected) return null;

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast({
        title: "Address Copied!",
        description: "Wallet address copied to clipboard",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="glass-card hover:scale-105 transition-all duration-300">
          <Wallet className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{shortenAddress(address || '')}</span>
          <span className="sm:hidden">Wallet</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 glass-card border border-glass-border p-2" align="end">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Wallet Balance</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setShowBalance(!showBalance)}
            >
              {showBalance ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
            </Button>
          </div>
          <p className="text-lg font-bold gradient-text">
            {showBalance ? `${balance} ETH` : '••••••'}
          </p>
        </div>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={copyAddress} className="cursor-pointer">
          <Copy className="w-4 h-4 mr-2" />
          Copy Address
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={disconnectWallet} className="cursor-pointer text-red-500">
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}