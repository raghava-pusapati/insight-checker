import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Network, 
  Share2,
  TrendingUp,
  MapPin,
  Clock,
  Users,
  Globe,
  Twitter,
  Facebook,
  Youtube,
  MessageSquare,
  Instagram,
  ExternalLink,
  AlertTriangle,
  Filter
} from "lucide-react";

interface MisinformationSpread {
  id: string;
  content: string;
  originalSource: string;
  platforms: Array<{
    name: string;
    icon: any;
    engagements: number;
    shares: number;
    firstSeen: string;
    viralityScore: number;
  }>;
  totalReach: number;
  spreadVelocity: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  category: string;
}

export default function CrossPlatformTracker() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  
  const [trackedContent] = useState<MisinformationSpread[]>([
    {
      id: "1",
      content: "False claim about vaccine side effects spreads through multiple channels",
      originalSource: "conspiracy-blog.net",
      platforms: [
        {
          name: "Twitter/X",
          icon: Twitter,
          engagements: 45200,
          shares: 8900,
          firstSeen: "2 hours ago",
          viralityScore: 87
        },
        {
          name: "Facebook",
          icon: Facebook,
          engagements: 67300,
          shares: 12400,
          firstSeen: "4 hours ago", 
          viralityScore: 92
        },
        {
          name: "YouTube",
          icon: Youtube,
          engagements: 23100,
          shares: 3400,
          firstSeen: "6 hours ago",
          viralityScore: 76
        },
        {
          name: "Reddit",
          icon: MessageSquare,
          engagements: 18900,
          shares: 2100,
          firstSeen: "8 hours ago",
          viralityScore: 68
        }
      ],
      totalReach: 154500,
      spreadVelocity: 89,
      riskLevel: "critical",
      category: "Health Misinformation"
    },
    {
      id: "2", 
      content: "Misleading political statement taken out of context",
      originalSource: "partisan-news.com",
      platforms: [
        {
          name: "Twitter/X", 
          icon: Twitter,
          engagements: 12800,
          shares: 2100,
          firstSeen: "1 hour ago",
          viralityScore: 54
        },
        {
          name: "Instagram",
          icon: Instagram,
          engagements: 8900,
          shares: 890,
          firstSeen: "3 hours ago",
          viralityScore: 42
        }
      ],
      totalReach: 21700,
      spreadVelocity: 48,
      riskLevel: "medium",
      category: "Political Misinformation"
    }
  ]);

  const [platformStats] = useState([
    { platform: "Facebook", total: 342, active: 28, high_risk: 8, color: "bg-blue-500" },
    { platform: "Twitter/X", total: 567, active: 45, high_risk: 12, color: "bg-black" },
    { platform: "YouTube", total: 234, active: 19, high_risk: 5, color: "bg-red-500" },
    { platform: "Instagram", total: 189, active: 15, high_risk: 3, color: "bg-pink-500" },
    { platform: "TikTok", total: 445, active: 67, high_risk: 15, color: "bg-slate-800" },
    { platform: "Reddit", total: 123, active: 12, high_risk: 2, color: "bg-orange-500" }
  ]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case "critical": return "text-misinformation";
      case "high": return "text-destructive";  
      case "medium": return "text-warning";
      default: return "text-success";
    }
  };

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "critical": return { variant: "destructive" as const, text: "Critical" };
      case "high": return { variant: "destructive" as const, text: "High Risk" };
      case "medium": return { variant: "secondary" as const, text: "Medium Risk" };
      default: return { variant: "default" as const, text: "Low Risk" };
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Network className="w-8 h-8 text-primary" />
            Cross-Platform Tracker
          </h1>
          <p className="text-muted-foreground">Track misinformation spread across social media platforms</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </Button>
          <select 
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Active Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <div className="text-xs text-muted-foreground mt-1">+5 in last 6hrs</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Total Reach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <div className="text-xs text-muted-foreground mt-1">Estimated exposure</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Viral Velocity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">847</div>
            <div className="text-xs text-muted-foreground mt-1">Shares per minute</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              High Risk Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-misinformation">8</div>
            <div className="text-xs text-muted-foreground mt-1">Critical attention needed</div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Activity Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Activity Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformStats.map((platform) => (
              <div key={platform.platform} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{platform.platform}</h3>
                  <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total Tracked:</span>
                    <span className="font-medium">{platform.total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Now:</span>
                    <span className="font-medium text-warning">{platform.active}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>High Risk:</span>
                    <span className="font-medium text-misinformation">{platform.high_risk}</span>
                  </div>
                  <Progress 
                    value={(platform.high_risk / platform.total) * 100} 
                    className="h-2 mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tracked Misinformation Campaigns */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Campaigns</TabsTrigger>
          <TabsTrigger value="network">Network Analysis</TabsTrigger>
          <TabsTrigger value="timeline">Spread Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="space-y-4">
            {trackedContent.map((content) => {
              const riskBadge = getRiskBadge(content.riskLevel);
              
              return (
                <Card key={content.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={riskBadge.variant}>{riskBadge.text}</Badge>
                            <Badge variant="outline">{content.category}</Badge>
                          </div>
                          <h3 className="font-semibold mb-1">{content.content}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            Original source: {content.originalSource}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{content.totalReach.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Total Reach</div>
                        </div>
                      </div>

                      {/* Platform Breakdown */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {content.platforms.map((platform) => (
                          <div key={platform.name} className="p-3 border rounded-lg bg-muted/20">
                            <div className="flex items-center gap-2 mb-2">
                              <platform.icon className="w-4 h-4" />
                              <span className="font-medium text-sm">{platform.name}</span>
                            </div>
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <span>Engagements:</span>
                                <span className="font-medium">{platform.engagements.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Shares:</span>
                                <span className="font-medium">{platform.shares.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Virality:</span>
                                <span className={`font-medium ${
                                  platform.viralityScore > 75 ? 'text-misinformation' :
                                  platform.viralityScore > 50 ? 'text-warning' :
                                  'text-success'
                                }`}>
                                  {platform.viralityScore}%
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>First seen:</span>
                                <span className="text-muted-foreground">{platform.firstSeen}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Velocity: {content.spreadVelocity}%
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {content.platforms.length} platforms
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Network Map
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Track Source
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="network" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Network className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Interactive network visualization showing misinformation spread patterns</p>
                <Button variant="outline" className="mt-4">
                  Launch Network Viewer
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Spread Timeline Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Temporal analysis of how misinformation spreads across platforms over time</p>
                <Button variant="outline" className="mt-4">
                  View Timeline
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}