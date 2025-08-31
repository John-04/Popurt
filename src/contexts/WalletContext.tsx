import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
  connectWallet: (walletType: string) => Promise<void>;
  disconnectWallet: () => void;
  isLoading: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: React.ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check for existing connection on mount
  useEffect(() => {
    const savedConnection = localStorage.getItem('wallet_connected');
    const savedAddress = localStorage.getItem('wallet_address');
    const savedBalance = localStorage.getItem('wallet_balance');
    
    if (savedConnection === 'true' && savedAddress) {
      setIsConnected(true);
      setAddress(savedAddress);
      setBalance(savedBalance || '2.4567');
    }
  }, []);

  const connectWallet = async (walletType: string) => {
    setIsLoading(true);
    
    try {
      // Simulate wallet connection delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock wallet connection
      const mockAddress = '0x742d35cc6df32ce51060dcf906bf6a5f9df39f6a5';
      const mockBalance = '2.4567';
      
      setIsConnected(true);
      setAddress(mockAddress);
      setBalance(mockBalance);
      
      // Persist connection
      localStorage.setItem('wallet_connected', 'true');
      localStorage.setItem('wallet_address', mockAddress);
      localStorage.setItem('wallet_balance', mockBalance);
      localStorage.setItem('wallet_type', walletType);
      
      toast({
        title: "Wallet Connected! 🎉",
        description: `Successfully connected to ${walletType}`,
      });
      
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    setBalance(null);
    
    // Clear persisted connection
    localStorage.removeItem('wallet_connected');
    localStorage.removeItem('wallet_address');
    localStorage.removeItem('wallet_balance');
    localStorage.removeItem('wallet_type');
    
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected safely.",
    });
  };

  return (
    <WalletContext.Provider value={{
      isConnected,
      address,
      balance,
      connectWallet,
      disconnectWallet,
      isLoading
    }}>
      {children}
    </WalletContext.Provider>
  );
};