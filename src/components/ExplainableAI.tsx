import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Target, 
  BarChart3, 
  Lightbulb, 
  AlertTriangle,
  CheckCircle,
  Eye,
  Zap
} from "lucide-react";

interface AIDecision {
  factor: string;
  weight: number;
  impact: "positive" | "negative" | "neutral";
  explanation: string;
}

const mockDecisions: AIDecision[] = [
  {
    factor: "Source Credibility",
    weight: 85,
    impact: "positive",
    explanation: "Content originates from a verified news organization with high factual reporting history."
  },
  {
    factor: "Language Patterns",
    weight: 72,
    impact: "positive", 
    explanation: "Text uses balanced, fact-based language without emotional manipulation indicators."
  },
  {
    factor: "Cross-Reference Match",
    weight: 91,
    impact: "positive",
    explanation: "Claims are corroborated by multiple independent, reliable sources."
  },
  {
    factor: "Temporal Consistency",
    weight: 45,
    impact: "negative",
    explanation: "Some timing details conflict with established timeline of events."
  },
  {
    factor: "Expert Citations",
    weight: 88,
    impact: "positive",
    explanation: "References credentialed experts in relevant fields with verifiable backgrounds."
  }
];

export const ExplainableAI = () => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive": return "text-success";
      case "negative": return "text-misinformation";
      case "neutral": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "positive": return <CheckCircle className="w-3 h-3 text-success" />;
      case "negative": return <AlertTriangle className="w-3 h-3 text-misinformation" />;
      case "neutral": return <Eye className="w-3 h-3 text-muted-foreground" />;
      default: return <Eye className="w-3 h-3" />;
    }
  };

  const overallConfidence = mockDecisions.reduce((acc, decision) => {
    const multiplier = decision.impact === "positive" ? 1 : decision.impact === "negative" ? -0.5 : 0.5;
    return acc + (decision.weight * multiplier);
  }, 0) / mockDecisions.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-accent" />
          Explainable AI Decision
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="factors" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="factors">Decision Factors</TabsTrigger>
            <TabsTrigger value="reasoning">AI Reasoning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="factors" className="space-y-4">
            {/* Overall Decision */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Final Assessment</span>
                <Badge className="bg-success text-success-foreground">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Likely Accurate
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>AI Confidence</span>
                  <span className="text-success font-medium">{Math.max(0, Math.round(overallConfidence))}%</span>
                </div>
                <Progress value={Math.max(0, overallConfidence)} className="h-2" />
              </div>
            </div>

            {/* Decision Factors */}
            <div className="space-y-3">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <Target className="w-4 h-4" />
                Key Decision Factors
              </h4>
              {mockDecisions.map((decision, index) => (
                <div key={index} className="border rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getImpactIcon(decision.impact)}
                      <span className="font-medium text-sm">{decision.factor}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Weight: {decision.weight}%
                    </div>
                  </div>
                  
                  <Progress value={decision.weight} className="h-1" />
                  
                  <p className="text-xs text-muted-foreground">
                    {decision.explanation}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reasoning" className="space-y-4">
            <div className="space-y-4">
              {/* Model Architecture */}
              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Model Architecture
                </h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Transformer-based ensemble model (BERT + RoBERTa)</p>
                  <p>• Fine-tuned on 50M+ fact-checked articles</p>
                  <p>• Multi-modal analysis pipeline</p>
                  <p>• Real-time cross-referencing system</p>
                </div>
              </div>

              {/* Decision Process */}
              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  Analysis Pipeline
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span>1. Content Preprocessing</span>
                    <Badge variant="outline" className="text-xs">Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>2. Feature Extraction</span>
                    <Badge variant="outline" className="text-xs">Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3. Source Verification</span>
                    <Badge variant="outline" className="text-xs">Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>4. Cross-Reference Check</span>
                    <Badge variant="outline" className="text-xs">Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>5. Ensemble Decision</span>
                    <Badge className="bg-success text-success-foreground text-xs">Complete</Badge>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-warning" />
                  Key Insights
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• High source credibility score (+85%) significantly impacts final verdict</li>
                  <li>• Multiple independent confirmations strengthen confidence</li>
                  <li>• Temporal inconsistencies detected but deemed minor (-5% impact)</li>
                  <li>• Expert citation verification adds substantial credibility</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};