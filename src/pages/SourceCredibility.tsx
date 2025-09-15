import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Search, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Star,
  Award,
  XCircle,
  BarChart3,
  Filter,
  Download
} from "lucide-react";

interface Source {
  id: string;
  name: string;
  domain: string;
  credibilityScore: number;
  category: string;
  articlesAnalyzed: number;
  accuracy: number;
  bias: string;
  factCheckStatus: "verified" | "mixed" | "unreliable";
  lastUpdated: string;
  trend: "up" | "down" | "stable";
}

export default function SourceCredibility() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sources] = useState<Source[]>([
    {
      id: "1",
      name: "Reuters",
      domain: "reuters.com",
      credibilityScore: 95,
      category: "News",
      articlesAnalyzed: 15420,
      accuracy: 96,
      bias: "Center",
      factCheckStatus: "verified",
      lastUpdated: "2 hours ago",
      trend: "up"
    },
    {
      id: "2", 
      name: "Associated Press",
      domain: "apnews.com",
      credibilityScore: 94,
      category: "News",
      articlesAnalyzed: 12890,
      accuracy: 95,
      bias: "Center-Left",
      factCheckStatus: "verified",
      lastUpdated: "1 hour ago",
      trend: "stable"
    },
    {
      id: "3",
      name: "BBC News",
      domain: "bbc.com",
      credibilityScore: 91,
      category: "News",
      articlesAnalyzed: 18750,
      accuracy: 92,
      bias: "Center-Left",
      factCheckStatus: "verified",
      lastUpdated: "30 minutes ago",
      trend: "up"
    },
    {
      id: "4",
      name: "InfoWars",
      domain: "infowars.com", 
      credibilityScore: 23,
      category: "Opinion",
      articlesAnalyzed: 3420,
      accuracy: 34,
      bias: "Far-Right",
      factCheckStatus: "unreliable",
      lastUpdated: "5 hours ago",
      trend: "down"
    },
    {
      id: "5",
      name: "The Onion",
      domain: "theonion.com",
      credibilityScore: 15,
      category: "Satire",
      articlesAnalyzed: 2150,
      accuracy: 12,
      bias: "Satirical",
      factCheckStatus: "mixed",
      lastUpdated: "1 hour ago",
      trend: "stable"
    }
  ]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-misinformation";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return CheckCircle;
    if (score >= 60) return AlertTriangle;
    return XCircle;
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return TrendingUp;
    if (trend === "down") return TrendingDown;
    return BarChart3;
  };

  const filteredSources = sources.filter(source => 
    source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    source.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            Source Credibility AI
          </h1>
          <p className="text-muted-foreground">AI-powered source reliability analysis and scoring</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Sources Analyzed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <div className="text-xs text-muted-foreground mt-1">+47 this week</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Award className="w-4 h-4" />
              High Credibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">1,245</div>
            <div className="text-xs text-muted-foreground mt-1">Score 80+</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Mixed Reliability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">892</div>
            <div className="text-xs text-muted-foreground mt-1">Score 60-79</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Low Credibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-misinformation">710</div>
            <div className="text-xs text-muted-foreground mt-1">Score below 60</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search sources, domains, or publishers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              Analyze New Source
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Source Analysis Results */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
          <TabsTrigger value="trends">Credibility Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4">
            {filteredSources.map((source) => {
              const ScoreIcon = getScoreIcon(source.credibilityScore);
              const TrendIcon = getTrendIcon(source.trend);
              
              return (
                <Card key={source.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                      {/* Source Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                          <ScoreIcon className={`w-5 h-5 ${getScoreColor(source.credibilityScore)}`} />
                          <div>
                            <h3 className="font-semibold">{source.name}</h3>
                            <p className="text-sm text-muted-foreground">{source.domain}</p>
                          </div>
                        </div>
                      </div>

                      {/* Credibility Score */}
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(source.credibilityScore)}`}>
                          {source.credibilityScore}
                        </div>
                        <Progress value={source.credibilityScore} className="mt-1 h-2" />
                        <p className="text-xs text-muted-foreground mt-1">Credibility Score</p>
                      </div>

                      {/* Analytics */}
                      <div className="text-center">
                        <div className="text-lg font-semibold">{source.articlesAnalyzed.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Articles Analyzed</p>
                      </div>

                      {/* Accuracy & Status */}
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-lg font-semibold">{source.accuracy}%</span>
                          <TrendIcon className={`w-4 h-4 ${
                            source.trend === 'up' ? 'text-success' :
                            source.trend === 'down' ? 'text-misinformation' :
                            'text-muted-foreground'
                          }`} />
                        </div>
                        <Badge variant={
                          source.factCheckStatus === 'verified' ? 'default' :
                          source.factCheckStatus === 'mixed' ? 'secondary' :
                          'destructive'
                        } className="text-xs">
                          {source.factCheckStatus}
                        </Badge>
                      </div>

                      {/* Actions */}
                      <div className="text-center">
                        <Button variant="outline" size="sm" className="mb-2 w-full">
                          View Details
                        </Button>
                        <p className="text-xs text-muted-foreground">{source.lastUpdated}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Credibility Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a source from the overview to view detailed analysis</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Credibility Trends Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Historical credibility trends and analysis coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}