import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Network, 
  Share2, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Eye,
  Zap
} from "lucide-react";

interface NetworkNode {
  id: string;
  platform: "twitter" | "facebook" | "reddit" | "news";
  content: string;
  shares: number;
  reach: number;
  verified: boolean;
  influence: number;
}

const mockNetworkData: NetworkNode[] = [
  {
    id: "origin",
    platform: "twitter", 
    content: "Breaking: Unverified claim about...",
    shares: 1247,
    reach: 45000,
    verified: false,
    influence: 85
  },
  {
    id: "amplifier1",
    platform: "facebook",
    content: "Shared article with misleading headline",
    shares: 892,
    reach: 67000,
    verified: false,
    influence: 72
  },
  {
    id: "amplifier2", 
    platform: "reddit",
    content: "Discussion thread spreading claim",
    shares: 445,
    reach: 23000,
    verified: false,
    influence: 58
  },
  {
    id: "fact-check",
    platform: "news",
    content: "Fact-check debunking the claim",
    shares: 156,
    reach: 12000,
    verified: true,
    influence: 91
  }
];

export const MisinformationNetwork = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(true);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "twitter": return "bg-blue-500";
      case "facebook": return "bg-blue-600"; 
      case "reddit": return "bg-orange-500";
      case "news": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter": return "𝕏";
      case "facebook": return "f";
      case "reddit": return "r";
      case "news": return "📰";
      default: return "?";
    }
  };

  const totalReach = mockNetworkData.reduce((acc, node) => acc + node.reach, 0);
  const misinformationNodes = mockNetworkData.filter(node => !node.verified);
  const factCheckNodes = mockNetworkData.filter(node => node.verified);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Network className="w-5 h-5 text-accent" />
          Misinformation Spread Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Network Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-misinformation">{misinformationNodes.length}</div>
              <div className="text-xs text-muted-foreground">False Sources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{totalReach.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{factCheckNodes.length}</div>
              <div className="text-xs text-muted-foreground">Fact Checks</div>
            </div>
          </div>

          {/* Network Visualization (Simplified) */}
          <div className="relative bg-muted/30 rounded-lg p-6 h-64 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Central origin node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div 
                    className={`w-16 h-16 ${getPlatformColor("twitter")} rounded-full flex items-center justify-center text-white font-bold cursor-pointer transition-transform hover:scale-110 ${
                      selectedNode === "origin" ? "ring-4 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedNode(selectedNode === "origin" ? null : "origin")}
                  >
                    {getPlatformIcon("twitter")}
                  </div>
                  {isLive && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-misinformation rounded-full animate-pulse" />
                  )}
                </div>

                {/* Connected nodes */}
                <div className="absolute top-4 left-4">
                  <div 
                    className={`w-12 h-12 ${getPlatformColor("facebook")} rounded-full flex items-center justify-center text-white text-sm cursor-pointer transition-transform hover:scale-110 ${
                      selectedNode === "amplifier1" ? "ring-4 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedNode(selectedNode === "amplifier1" ? null : "amplifier1")}
                  >
                    {getPlatformIcon("facebook")}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div 
                    className={`w-12 h-12 ${getPlatformColor("reddit")} rounded-full flex items-center justify-center text-white text-sm cursor-pointer transition-transform hover:scale-110 ${
                      selectedNode === "amplifier2" ? "ring-4 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedNode(selectedNode === "amplifier2" ? null : "amplifier2")}
                  >
                    {getPlatformIcon("reddit")}
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div 
                    className={`w-12 h-12 ${getPlatformColor("news")} rounded-full flex items-center justify-center text-white text-sm cursor-pointer transition-transform hover:scale-110 ${
                      selectedNode === "fact-check" ? "ring-4 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedNode(selectedNode === "fact-check" ? null : "fact-check")}
                  >
                    {getPlatformIcon("news")}
                  </div>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="hsl(var(--misinformation))" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="hsl(var(--misinformation))" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="hsl(var(--success))" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Live indicator */}
            <div className="absolute top-2 right-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs text-muted-foreground">Live Tracking</span>
            </div>
          </div>

          {/* Node Details */}
          {selectedNode && (
            <div className="border rounded-lg p-4 bg-muted/30">
              {(() => {
                const node = mockNetworkData.find(n => n.id === selectedNode);
                if (!node) return null;
                
                return (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 ${getPlatformColor(node.platform)} rounded-full flex items-center justify-center text-white text-sm`}>
                          {getPlatformIcon(node.platform)}
                        </div>
                        <span className="font-medium capitalize">{node.platform}</span>
                        {node.verified ? (
                          <Badge className="bg-success text-success-foreground">Verified</Badge>
                        ) : (
                          <Badge className="bg-misinformation text-destructive-foreground">Unverified</Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{node.content}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        <span>{node.shares.toLocaleString()} shares</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{node.reach.toLocaleString()} reach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{node.influence}% influence</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Block Source
              </Button>
              <Button size="sm" variant="outline">
                <Zap className="w-4 h-4 mr-2" />
                Counter-Narrative
              </Button>
            </div>
            
            <Button
              size="sm"
              variant={isLive ? "default" : "outline"}
              onClick={() => setIsLive(!isLive)}
            >
              {isLive ? "Pause" : "Resume"} Tracking
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};