import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Scan, 
  Upload, 
  Play, 
  Pause,
  AlertTriangle,
  CheckCircle,
  Eye,
  Camera,
  Video,
  Image,
  Zap,
  Brain,
  Shield,
  Download,
  RefreshCw
} from "lucide-react";

interface DetectionResult {
  id: string;
  filename: string;
  type: "image" | "video" | "audio";
  deepfakeConfidence: number;
  analysisTime: number;
  details: {
    faceSwap: number;
    lipSync: number;
    voiceClone: number;
    frameConsistency: number;
  };
  timestamp: string;
}

export default function DeepfakeDetection() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [recentResults] = useState<DetectionResult[]>([
    {
      id: "1",
      filename: "political_speech_video.mp4",
      type: "video",
      deepfakeConfidence: 87,
      analysisTime: 45.2,
      details: {
        faceSwap: 92,
        lipSync: 78,
        voiceClone: 23,
        frameConsistency: 65
      },
      timestamp: "2 minutes ago"
    },
    {
      id: "2",
      filename: "celebrity_interview.mp4",
      type: "video", 
      deepfakeConfidence: 15,
      analysisTime: 32.1,
      details: {
        faceSwap: 12,
        lipSync: 8,
        voiceClone: 25,
        frameConsistency: 95
      },
      timestamp: "5 minutes ago"
    },
    {
      id: "3",
      filename: "news_anchor_photo.jpg",
      type: "image",
      deepfakeConfidence: 72,
      analysisTime: 3.8,
      details: {
        faceSwap: 85,
        lipSync: 0,
        voiceClone: 0,
        frameConsistency: 68
      },
      timestamp: "12 minutes ago"
    }
  ]);

  const [stats] = useState({
    totalAnalyzed: 15847,
    deepfakesDetected: 3421,
    accuracyRate: 96.7,
    avgAnalysisTime: 28.5
  });

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsAnalyzing(true);
      // Simulate analysis progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        setUploadProgress(Math.min(progress, 100));
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
            setUploadProgress(0);
          }, 1000);
        }
      }, 500);
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 70) return "text-misinformation";
    if (confidence >= 30) return "text-warning";
    return "text-success";
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 70) return { variant: "destructive" as const, text: "High Risk" };
    if (confidence >= 30) return { variant: "secondary" as const, text: "Medium Risk" };
    return { variant: "default" as const, text: "Authentic" };
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Scan className="w-8 h-8 text-primary" />
            Deepfake Detection AI
          </h1>
          <p className="text-muted-foreground">Advanced AI-powered synthetic media detection</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Results
          </Button>
          <Button className="flex items-center gap-2" onClick={handleFileUpload}>
            <Upload className="w-4 h-4" />
            Analyze Media
          </Button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*,audio/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Total Analyzed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalAnalyzed.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">+156 today</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Deepfakes Found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-misinformation">{stats.deepfakesDetected.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {((stats.deepfakesDetected / stats.totalAnalyzed) * 100).toFixed(1)}% detection rate
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Accuracy Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.accuracyRate}%</div>
            <Progress value={stats.accuracyRate} className="mt-2 h-1" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Avg Analysis Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">{stats.avgAnalysisTime}s</div>
            <div className="text-xs text-muted-foreground mt-1">per media file</div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 animate-spin text-primary" />
                <span className="font-medium">Analyzing media file...</span>
              </div>
              <Badge variant="secondary">
                <Brain className="w-3 h-3 mr-1" />
                AI Processing
              </Badge>
            </div>
            <Progress value={uploadProgress} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Detecting synthetic patterns</span>
              <span>{Math.round(uploadProgress)}% complete</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upload Zone */}
      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer" onClick={handleFileUpload}>
        <CardContent className="p-12 text-center">
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Upload Media for Analysis</h3>
          <p className="text-muted-foreground mb-4">
            Drag & drop or click to upload images, videos, or audio files
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Image className="w-4 h-4" />
              Images
            </span>
            <span className="flex items-center gap-1">
              <Video className="w-4 h-4" />
              Videos
            </span>
            <span className="flex items-center gap-1">
              <Camera className="w-4 h-4" />
              Audio
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Recent Analysis Results */}
      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Analysis</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Results</TabsTrigger>
          <TabsTrigger value="batch">Batch Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4">
            {recentResults.map((result) => {
              const confidenceBadge = getConfidenceBadge(result.deepfakeConfidence);
              const TypeIcon = result.type === 'video' ? Video : result.type === 'audio' ? Camera : Image;
              
              return (
                <Card key={result.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      {/* File Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                          <TypeIcon className="w-5 h-5 text-primary" />
                          <div>
                            <h3 className="font-semibold text-sm">{result.filename}</h3>
                            <p className="text-xs text-muted-foreground">{result.timestamp}</p>
                          </div>
                        </div>
                      </div>

                      {/* Deepfake Confidence */}
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getConfidenceColor(result.deepfakeConfidence)}`}>
                          {result.deepfakeConfidence}%
                        </div>
                        <Badge variant={confidenceBadge.variant} className="text-xs">
                          {confidenceBadge.text}
                        </Badge>
                      </div>

                      {/* Analysis Details */}
                      <div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Face Swap:</span>
                            <span className={result.details.faceSwap > 50 ? 'text-misinformation' : 'text-success'}>
                              {result.details.faceSwap}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Lip Sync:</span>
                            <span className={result.details.lipSync > 50 ? 'text-misinformation' : 'text-success'}>
                              {result.details.lipSync}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Voice Clone:</span>
                            <span className={result.details.voiceClone > 50 ? 'text-misinformation' : 'text-success'}>
                              {result.details.voiceClone}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="text-center">
                        <Button variant="outline" size="sm" className="mb-2 w-full">
                          View Report
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Analyzed in {result.analysisTime}s
                        </p>
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
              <CardTitle>Detailed Detection Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a result to view detailed AI analysis breakdown</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="batch" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Batch Analysis Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Upload className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Upload multiple files for batch processing</p>
                <Button variant="outline" className="mt-4">
                  Upload Multiple Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}