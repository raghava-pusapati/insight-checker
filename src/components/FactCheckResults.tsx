import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Clock,
  Star,
  Globe
} from "lucide-react";

interface FactCheckSource {
  name: string;
  verdict: "true" | "false" | "mixed" | "unverified";
  confidence: number;
  url: string;
  reputation: number;
}

const mockFactChecks: FactCheckSource[] = [
  {
    name: "Snopes",
    verdict: "true",
    confidence: 94,
    url: "#",
    reputation: 95
  },
  {
    name: "PolitiFact",
    verdict: "true",
    confidence: 91,
    url: "#",
    reputation: 92
  },
  {
    name: "FactCheck.org",
    verdict: "mixed",
    confidence: 87,
    url: "#",
    reputation: 89
  },
  {
    name: "Reuters Fact Check",
    verdict: "true",
    confidence: 96,
    url: "#",
    reputation: 97
  }
];

export const FactCheckResults = () => {
  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "true":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "false":
        return <XCircle className="w-4 h-4 text-misinformation" />;
      case "mixed":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "unverified":
        return <Clock className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getVerdictBadge = (verdict: string) => {
    switch (verdict) {
      case "true":
        return <Badge className="bg-success text-success-foreground">True</Badge>;
      case "false":
        return <Badge className="bg-misinformation text-destructive-foreground">False</Badge>;
      case "mixed":
        return <Badge className="bg-suspicious text-warning-foreground">Mixed</Badge>;
      case "unverified":
        return <Badge variant="outline">Unverified</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const averageConfidence = mockFactChecks.reduce((acc, check) => acc + check.confidence, 0) / mockFactChecks.length;
  const consensusVerdict = mockFactChecks.filter(check => check.verdict === "true").length > mockFactChecks.length / 2 ? "true" : "mixed";

  return (
    <Card >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Fact-Check Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Consensus Summary */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">Consensus Verdict</span>
              {getVerdictBadge(consensusVerdict)}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Overall Confidence</span>
                <span className="text-primary">{Math.round(averageConfidence)}%</span>
              </div>
              <Progress value={averageConfidence} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on {mockFactChecks.length} trusted fact-checking sources
            </p>
          </div>

          {/* Individual Fact Check Results */}
          <div>
            <h4 className="font-medium mb-3">Source Breakdown</h4>
            <ScrollArea className="h-64">
              <div className="space-y-3">
                {mockFactChecks.map((check, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-sm">{check.name}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-warning fill-current" />
                          <span className="text-xs text-muted-foreground">
                            {check.reputation}%
                          </span>
                        </div>
                      </div>
                      {getVerdictIcon(check.verdict)}
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>Confidence</span>
                          <span>{check.confidence}%</span>
                        </div>
                        <Progress value={check.confidence} className="h-1" />
                      </div>
                      <Button size="sm" variant="ghost" className="ml-2">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {getVerdictBadge(check.verdict)}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Cross-Reference Analysis */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3 text-sm">Cross-Reference Analysis</h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-muted-foreground">Sources Agreeing:</span>
                <div className="font-medium text-success">
                  {mockFactChecks.filter(check => check.verdict === "true").length}/{mockFactChecks.length}
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Avg Reputation:</span>
                <div className="font-medium text-primary">
                  {Math.round(mockFactChecks.reduce((acc, check) => acc + check.reputation, 0) / mockFactChecks.length)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};