import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Twitter, 
  Globe, 
  MessageSquare, 
  ExternalLink, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Share2,
  Filter
} from "lucide-react";

interface ContentItem {
  id: string;
  source: "twitter" | "news" | "reddit";
  author: string;
  content: string;
  timestamp: Date;
  status: "verified" | "misinformation" | "suspicious" | "pending";
  engagementScore: number;
  viralPotential: number;
  confidence: number;
}

const mockContent: ContentItem[] = [
  {
    id: "1",
    source: "twitter",
    author: "@BreakingNews",
    content: "BREAKING: Major earthquake detected in California region, magnitude estimated at 7.2",
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    status: "pending",
    engagementScore: 89,
    viralPotential: 94,
    confidence: 0
  },
  {
    id: "2",
    source: "news",
    author: "Reuters",
    content: "Study shows 95% effectiveness of new vaccine variant in clinical trials",
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    status: "verified",
    engagementScore: 76,
    viralPotential: 82,
    confidence: 96
  },
  {
    id: "3",
    source: "reddit",
    author: "u/concerned_citizen",
    content: "Government officials secretly meeting with alien representatives, leaked documents reveal...",
    timestamp: new Date(Date.now() - 32 * 60 * 1000),
    status: "misinformation",
    engagementScore: 45,
    viralPotential: 78,
    confidence: 91
  },
  {
    id: "4",
    source: "twitter",
    author: "@TechReporter",
    content: "New AI breakthrough could revolutionize climate change solutions within the next decade",
    timestamp: new Date(Date.now() - 45 * 60 * 1000),
    status: "suspicious",
    engagementScore: 67,
    viralPotential: 71,
    confidence: 73
  }
];

export const RealTimeFeeds = () => {
  const [content, setContent] = useState<ContentItem[]>(mockContent);
  const [selectedSource, setSelectedSource] = useState<string>("all");

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new content arriving
      if (Math.random() > 0.7) {
        const newItem: ContentItem = {
          id: Date.now().toString(),
          source: ["twitter", "news", "reddit"][Math.floor(Math.random() * 3)] as any,
          author: ["@NewsSource", "AP News", "u/user123"][Math.floor(Math.random() * 3)],
          content: "New content item being analyzed...",
          timestamp: new Date(),
          status: "pending",
          engagementScore: Math.floor(Math.random() * 100),
          viralPotential: Math.floor(Math.random() * 100),
          confidence: 0
        };
        
        setContent(prev => [newItem, ...prev].slice(0, 20));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (status: ContentItem["status"]) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="w-3 h-3 mr-1" />Verified</Badge>;
      case "misinformation":
        return <Badge className="bg-misinformation text-destructive-foreground"><AlertTriangle className="w-3 h-3 mr-1" />False</Badge>;
      case "suspicious":
        return <Badge className="bg-suspicious text-warning-foreground"><AlertTriangle className="w-3 h-3 mr-1" />Suspicious</Badge>;
      case "pending":
        return <Badge variant="outline"><Clock className="w-3 h-3 mr-1" />Analyzing</Badge>;
    }
  };

  const getSourceIcon = (source: ContentItem["source"]) => {
    switch (source) {
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "news":
        return <Globe className="w-4 h-4" />;
      case "reddit":
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  const filteredContent = selectedSource === "all" 
    ? content 
    : content.filter(item => item.source === selectedSource);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            Real-Time Content Ingestion
          </CardTitle>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={selectedSource === "all" ? "default" : "outline"}
              onClick={() => setSelectedSource("all")}
            >
              All Sources
            </Button>
            <Button
              size="sm"
              variant={selectedSource === "twitter" ? "default" : "outline"}
              onClick={() => setSelectedSource("twitter")}
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant={selectedSource === "news" ? "default" : "outline"}
              onClick={() => setSelectedSource("news")}
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant={selectedSource === "reddit" ? "default" : "outline"}
              onClick={() => setSelectedSource("reddit")}
            >
              <MessageSquare className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {filteredContent.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getSourceIcon(item.source)}
                    <span className="font-medium text-sm">{item.author}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  {getStatusBadge(item.status)}
                </div>
                
                <p className="text-sm mb-3 line-clamp-2">{item.content}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Share2 className="w-3 h-3" />
                      <span>Engagement: {item.engagementScore}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Viral Risk: {item.viralPotential}%</span>
                    </div>
                    {item.confidence > 0 && (
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Confidence: {item.confidence}%</span>
                      </div>
                    )}
                  </div>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};