import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  BarChart3,
  Zap,
  Target,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

interface AnalysisResult {
  contentType: "text" | "image" | "video" | "audio";
  confidence: number;
  sentiment: "positive" | "negative" | "neutral";
  topics: string[];
  entities: string[];
  credibilityScore: number;
  factualAccuracy: number;
  biasDetection: number;
}

const mockAnalysis: AnalysisResult = {
  contentType: "text",
  confidence: 89,
  sentiment: "negative",
  topics: ["Politics", "Healthcare", "Economy", "Climate"],
  entities: ["Government", "WHO", "Climate Change", "Public Health"],
  credibilityScore: 72,
  factualAccuracy: 84,
  biasDetection: 34
};

export const ContentAnalysisPanel = () => {
  const [selectedContent, setSelectedContent] = useState("text");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeContent = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case "text": return <FileText className="w-4 h-4" />;
      case "image": return <Image className="w-4 h-4" />;
      case "video": return <Video className="w-4 h-4" />;
      case "audio": return <Mic className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "text-success";
      case "negative": return "text-misinformation";
      case "neutral": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-accent" />
          Multi-Modal Content Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedContent} onValueChange={setSelectedContent}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Text
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              Image
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Video
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              Audio
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="mt-6">
            <div className="space-y-6">
              {/* Sample Content */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">Sample Article</span>
                  <Badge variant="outline">Live Analysis</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Recent studies suggest that the new vaccine shows promising results in preventing 
                  severe symptoms, with early trials indicating 95% effectiveness across different age groups..."
                </p>
              </div>

              {/* Analysis Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Credibility Score</span>
                    <span className="text-sm text-info">{mockAnalysis.credibilityScore}%</span>
                  </div>
                  <Progress value={mockAnalysis.credibilityScore} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Factual Accuracy</span>
                    <span className="text-sm text-success">{mockAnalysis.factualAccuracy}%</span>
                  </div>
                  <Progress value={mockAnalysis.factualAccuracy} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Bias Detection</span>
                    <span className="text-sm text-warning">{mockAnalysis.biasDetection}%</span>
                  </div>
                  <Progress value={mockAnalysis.biasDetection} className="h-2" />
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium">Sentiment Analysis</span>
                    <div className={`text-sm ${getSentimentColor(mockAnalysis.sentiment)} capitalize`}>
                      {mockAnalysis.sentiment}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium">AI Confidence</span>
                    <div className="text-sm text-primary">{mockAnalysis.confidence}%</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium">Key Topics</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mockAnalysis.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium">Entities</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mockAnalysis.entities.map((entity) => (
                        <Badge key={entity} variant="outline" className="text-xs">
                          {entity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={analyzeContent} disabled={isAnalyzing}>
                  {isAnalyzing ? (
                    <>
                      <Zap className="w-4 h-4 mr-2 animate-pulse" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Target className="w-4 h-4 mr-2" />
                      Deep Analysis
                    </>
                  )}
                </Button>
                <Button variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="image" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <Image className="w-12 h-12 mx-auto mb-4" />
              <p>Image analysis module</p>
              <p className="text-sm">OCR, deepfake detection, reverse image search</p>
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <Video className="w-12 h-12 mx-auto mb-4" />
              <p>Video analysis module</p>
              <p className="text-sm">Deepfake detection, audio-visual sync analysis</p>
            </div>
          </TabsContent>
          
          <TabsContent value="audio" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <Mic className="w-12 h-12 mx-auto mb-4" />
              <p>Audio analysis module</p>
              <p className="text-sm">Voice cloning detection, transcription analysis</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};