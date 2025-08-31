export function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-success/20 rounded-full blur-3xl float-delayed"></div>
      <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-web3-purple/20 rounded-full blur-3xl float"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
    </div>
  );
}