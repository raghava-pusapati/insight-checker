import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Monitoring from "./pages/Monitoring";
import SourceCredibility from "./pages/SourceCredibility";
import DeepfakeDetection from "./pages/DeepfakeDetection";
import CrossPlatformTracker from "./pages/CrossPlatformTracker";
import Analytics from "./pages/Analytics";
import Education from "./pages/Education";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/credibility" element={<SourceCredibility />} />
            <Route path="/deepfake" element={<DeepfakeDetection />} />
            <Route path="/tracking" element={<CrossPlatformTracker />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/education" element={<Education />} />
            {/* Placeholder routes for remaining features */}
            <Route path="/community" element={<div className="p-6"><h1 className="text-2xl font-bold">Community Features Coming Soon</h1></div>} />
            <Route path="/api-hub" element={<div className="p-6"><h1 className="text-2xl font-bold">API Marketplace Coming Soon</h1></div>} />
            <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings Coming Soon</h1></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
