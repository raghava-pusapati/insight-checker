import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Globe,
  Twitter,
  Facebook,
  Youtube,
  MessageSquare,
  TrendingUp,
  Filter
} from "lucide-react";
import { RealTimeFeeds } from "@/components/RealTimeFeeds";
import { ContentAnalysisPanel } from "@/components/ContentAnalysisPanel";

interface MonitoringStats {
  totalSources: number;
  activeSources: number;
  processingRate: number;
  queueSize: number;
  avgResponseTime: number;
}

export default function Monitoring() {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [stats, setStats] = useState<MonitoringStats>({
    totalSources: 847,
    activeSources: 812,
    processingRate: 1247,
    queueSize: 156,
    avgResponseTime: 0.3
  });

  const [platformStats] = useState([
    { platform: "Twitter/X", icon: Twitter, monitored: 245, flagged: 12, status: "active" },
    { platform: "Facebook", icon: Facebook, monitored: 189, flagged: 8, status: "active" },
    { platform: "YouTube", icon: Youtube, monitored: 167, flagged: 15, status: "active" },
    { platform: "Reddit", icon: MessageSquare, monitored: 134, flagged: 6, status: "active" },
    { platform: "News APIs", icon: Globe, monitored: 312, flagged: 23, status: "active" }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    if (!isMonitoring) return;
    
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        processingRate: Math.floor(1200 + Math.random() * 100),
        queueSize: Math.max(0, prev.queueSize + Math.floor(Math.random() * 10) - 5),
        avgResponseTime: Math.round((0.2 + Math.random() * 0.3) * 100) / 100
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Live Monitoring</h1>
          <p className="text-muted-foreground">Real-time content analysis across all platforms</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant={isMonitoring ? "destructive" : "default"}
            onClick={() => setIsMonitoring(!isMonitoring)}
            className="flex items-center gap-2"
          >
            {isMonitoring ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isMonitoring ? "Pause Monitoring" : "Resume Monitoring"}
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Reset Filters
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </Button>
        </div>
      </div>

      {/* Status Indicator */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-success animate-pulse' : 'bg-muted'}`} />
              <span className="font-medium">
                {isMonitoring ? "Live Monitoring Active" : "Monitoring Paused"}
              </span>
            </div>
            <Badge variant="secondary" className="bg-white/50">
              <TrendingUp className="w-3 h-3 mr-1" />
              {stats.processingRate}/min
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </CardContent>
      </Card>

      {/* Monitoring Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSources}</div>
            <Progress value={95} className="mt-2 h-1" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.activeSources}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {Math.round((stats.activeSources / stats.totalSources) * 100)}% online
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Processing Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.processingRate}</div>
            <div className="text-xs text-muted-foreground mt-1">items per minute</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Queue Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.queueSize}</div>
            <div className="text-xs text-muted-foreground mt-1">pending analysis</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">{stats.avgResponseTime}s</div>
            <div className="text-xs text-muted-foreground mt-1">average latency</div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Status */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Monitoring Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {platformStats.map((platform) => (
              <div key={platform.platform} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <platform.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">{platform.platform}</div>
                    <div className="text-xs text-muted-foreground">
                      {platform.monitored} monitored
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-misinformation">{platform.flagged}</div>
                  <div className="text-xs text-muted-foreground">flagged</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live Data Streams */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RealTimeFeeds />
        <ContentAnalysisPanel />
      </div>
    </div>
  );
}