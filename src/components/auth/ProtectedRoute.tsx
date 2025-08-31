import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@/contexts/WalletContext';
import { toast } from '@/hooks/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isConnected } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to access this page.",
        variant: "destructive",
      });
      navigate('/auth');
    }
  }, [isConnected, navigate]);

  if (!isConnected) {
    return null;
  }

  return <>{children}</>;
}