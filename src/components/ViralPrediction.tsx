import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  Target, 
  Zap,
  Share2,
  Users,
  Eye
} from "lucide-react";

interface ViralContent {
  id: string;
  content: string;
  platform: string;
  currentShares: number;
  predictedShares: number;
  viralProbability: number;
  timeToViral: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  factChecked: boolean;
}

const mockViralContent: ViralContent[] = [
  {
    id: "1",
    content: "Shocking government announcement leaked - officials deny everything",
    platform: "Twitter",
    currentShares: 1247,
    predictedShares: 45000,
    viralProbability: 89,
    timeToViral: "2-4 hours",
    riskLevel: "critical",
    factChecked: false
  },
  {
    id: "2", 
    content: "New study reveals surprising health benefits of common household item",
    platform: "Facebook",
    currentShares: 892,
    predictedShares: 12000,
    viralProbability: 67,
    timeToViral: "6-8 hours",
    riskLevel: "medium",
    factChecked: true
  },
  {
    id: "3",
    content: "Celebrity caught in controversial situation - photos surface",
    platform: "Reddit",
    currentShares: 445,
    predictedShares: 28000,
    viralProbability: 73,
    timeToViral: "4-6 hours", 
    riskLevel: "high",
    factChecked: false
  }
];

export const ViralPrediction = () => {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-success";
      case "medium": return "text-info"; 
      case "high": return "text-warning";
      case "critical": return "text-misinformation";
      default: return "text-muted-foreground";
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low":
        return <Badge className="bg-success text-success-foreground">Low Risk</Badge>;
      case "medium": 
        return <Badge variant="secondary">Medium Risk</Badge>;
      case "high":
        return <Badge className="bg-warning text-warning-foreground">High Risk</Badge>;
      case "critical":
        return <Badge className="bg-misinformation text-destructive-foreground">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-warning" />
          Viral Content Prediction Engine
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockViralContent.map((item) => (
            <div 
              key={item.id}
              className={`border rounded-lg p-4 cursor-pointer transition-colors hover:bg-muted/50 ${
                selectedContent === item.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedContent(selectedContent === item.id ? null : item.id)}
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-2 mb-2">{item.content}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{item.platform}</span>
                      <span>•</span>
                      <span>{item.currentShares} shares</span>
                      {!item.factChecked && (
                        <>
                          <span>•</span>
                          <AlertTriangle className="w-3 h-3 text-warning" />
                          <span>Unverified</span>
                        </>
                      )}
                    </div>
                  </div>
                  {getRiskBadge(item.riskLevel)}
                </div>

                {/* Viral Probability */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Viral Probability
                    </span>
                    <span className={`font-medium ${getRiskColor(item.riskLevel)}`}>
                      {item.viralProbability}%
                    </span>
                  </div>
                  <Progress value={item.viralProbability} className="h-2" />
                </div>

                {/* Predictions */}
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Share2 className="w-3 h-3" />
                    </div>
                    <div className="font-medium text-primary">{item.predictedShares.toLocaleString()}</div>
                    <div className="text-muted-foreground">Predicted shares</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-3 h-3" />
                    </div>
                    <div className="font-medium text-warning">{item.timeToViral}</div>
                    <div className="text-muted-foreground">Time to viral</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Target className="w-3 h-3" />
                    </div>
                    <div className={`font-medium ${getRiskColor(item.riskLevel)}`}>
                      {(item.predictedShares / item.currentShares).toFixed(1)}x
                    </div>
                    <div className="text-muted-foreground">Growth factor</div>
                  </div>
                </div>

                {/* Expanded details */}
                {selectedContent === item.id && (
                  <div className="border-t pt-3 mt-3 space-y-3">
                    <div className="text-xs space-y-2">
                      <div>
                        <span className="font-medium">Engagement Signals:</span>
                        <ul className="ml-4 mt-1 space-y-1 text-muted-foreground">
                          <li>• Rapid initial engagement (+{Math.floor(Math.random() * 50 + 20)}% in 1st hour)</li>
                          <li>• Cross-platform sharing detected</li>
                          <li>• High comment-to-share ratio ({(Math.random() * 0.3 + 0.1).toFixed(2)})</li>
                          <li>• Influencer amplification ({Math.floor(Math.random() * 5 + 2)} accounts)</li>
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium">Risk Factors:</span>
                        <ul className="ml-4 mt-1 space-y-1 text-muted-foreground">
                          {!item.factChecked && <li>• Content not fact-checked</li>}
                          <li>• Emotional language detected</li>
                          <li>• Similar content previously flagged</li>
                          {item.riskLevel === "critical" && <li>• Government/political sensitivity</li>}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-3 h-3 mr-1" />
                        Monitor
                      </Button>
                      <Button size="sm" variant="outline">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Flag for Review
                      </Button>
                      {!item.factChecked && (
                        <Button size="sm" className="bg-primary text-primary-foreground">
                          <Zap className="w-3 h-3 mr-1" />
                          Priority Check
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="border-t pt-4 mt-4">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-misinformation">
                {mockViralContent.filter(item => item.riskLevel === "critical" || item.riskLevel === "high").length}
              </div>
              <div className="text-xs text-muted-foreground">High Risk Items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">
                {Math.round(mockViralContent.reduce((acc, item) => acc + item.viralProbability, 0) / mockViralContent.length)}%
              </div>
              <div className="text-xs text-muted-foreground">Avg Viral Prob</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {mockViralContent.reduce((acc, item) => acc + item.predictedShares, 0).toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">Total Predicted</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};