import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Eye,
  Share2,
  MessageSquare,
  Globe,
  Zap,
  Brain,
  Target
} from "lucide-react";
import { ContentAnalysisPanel } from "./ContentAnalysisPanel";
import { RealTimeFeeds } from "./RealTimeFeeds";
import { FactCheckResults } from "./FactCheckResults";
import { ExplainableAI } from "./ExplainableAI";
import { ThreatLevel } from "./ThreatLevel";
import { MisinformationNetwork } from "./MisinformationNetwork";
import { ViralPrediction } from "./ViralPrediction";
import dashboardHero from "@/assets/dashboard-hero.jpg";

interface DashboardStats {
  totalProcessed: number;
  verified: number;
  misinformation: number;
  suspicious: number;
  pending: number;
  accuracyRate: number;
  responseTime: number;
  threatLevel: "low" | "medium" | "high" | "critical";
}

export const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalProcessed: 15847,
    verified: 12456,
    misinformation: 1891,
    suspicious: 987,
    pending: 513,
    accuracyRate: 94.8,
    responseTime: 0.3,
    threatLevel: "medium"
  });

  const [isLive, setIsLive] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalProcessed: prev.totalProcessed + Math.floor(Math.random() * 5),
        pending: Math.max(0, prev.pending + Math.floor(Math.random() * 3) - 1),
        responseTime: Math.round((0.2 + Math.random() * 0.4) * 10) / 10
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    change, 
    variant = "default" 
  }: {
    title: string;
    value: string | number;
    icon: any;
    change?: string;
    variant?: "default" | "success" | "warning" | "destructive";
  }) => (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${
          variant === 'success' ? 'text-success' :
          variant === 'warning' ? 'text-warning' :
          variant === 'destructive' ? 'text-misinformation' :
          'text-primary'
        }`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground mt-1">
            {change}
          </p>
        )}
      </CardContent>
      {isLive && (
        <div className="absolute top-2 right-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
        </div>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative h-48 bg-gradient-to-r from-primary to-accent overflow-hidden">
        <img 
          src={dashboardHero}
          alt="Dashboard visualization"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">MisinfoShield AI</h1>
            <p className="text-xl opacity-90">Real-time misinformation detection & analysis</p>
            <div className="flex items-center gap-4 mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Zap className="w-3 h-3 mr-1" />
                Live Monitoring
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Brain className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Target className="w-3 h-3 mr-1" />
                {stats.accuracyRate}% Accuracy
              </Badge>
            </div>
          </div>
          <div className="ml-auto">
            <Button
              variant={isLive ? "secondary" : "default"}
              onClick={() => setIsLive(!isLive)}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              {isLive ? "Pause" : "Resume"} Live Feed
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Threat Level Alert */}
        <ThreatLevel level={stats.threatLevel} className="mb-6" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Processed"
            value={stats.totalProcessed.toLocaleString()}
            icon={Globe}
            change="+47 in last hour"
          />
          <StatCard
            title="Verified Content"
            value={stats.verified.toLocaleString()}
            icon={CheckCircle}
            change="+12 this hour"
            variant="success"
          />
          <StatCard
            title="Misinformation Detected"
            value={stats.misinformation.toLocaleString()}
            icon={AlertTriangle}
            change="+3 flagged recently"
            variant="destructive"
          />
          <StatCard
            title="Pending Analysis"
            value={stats.pending}
            icon={Clock}
            change="Processing queue"
            variant="warning"
          />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Accuracy Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success mb-2">
                {stats.accuracyRate}%
              </div>
              <Progress value={stats.accuracyRate} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                Based on verified fact-checks
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-warning" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-info mb-2">
                {stats.responseTime}s
              </div>
              <div className="text-sm text-muted-foreground">
                Average analysis time per content item
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Detection Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">
                {((stats.misinformation / stats.totalProcessed) * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground">
                Misinformation in processed content
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Panels */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2 space-y-6">
            <RealTimeFeeds />
            <ContentAnalysisPanel />
          </div>
          <div className="space-y-6">
            <FactCheckResults />
            <ExplainableAI />
          </div>
        </div>

        {/* Network Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MisinformationNetwork />
          <ViralPrediction />
        </div>
      </div>
    </div>
  );
};