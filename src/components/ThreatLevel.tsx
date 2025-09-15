import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Info, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThreatLevelProps {
  level: "low" | "medium" | "high" | "critical";
  className?: string;
}

export const ThreatLevel = ({ level, className }: ThreatLevelProps) => {
  const getThreatConfig = (level: string) => {
    switch (level) {
      case "low":
        return {
          icon: <Shield className="w-5 h-5" />,
          color: "text-success",
          bgColor: "bg-success/10",
          borderColor: "border-success/20",
          title: "Low Threat Level",
          description: "Minimal misinformation detected. Normal monitoring active.",
          badgeVariant: "default" as const
        };
      case "medium":
        return {
          icon: <Info className="w-5 h-5" />,
          color: "text-info",
          bgColor: "bg-info/10",
          borderColor: "border-info/20",
          title: "Medium Threat Level",
          description: "Moderate misinformation activity. Enhanced monitoring engaged.",
          badgeVariant: "secondary" as const
        };
      case "high":
        return {
          icon: <AlertTriangle className="w-5 h-5" />,
          color: "text-warning",
          bgColor: "bg-warning/10",
          borderColor: "border-warning/20",
          title: "High Threat Level",
          description: "Significant misinformation spread detected. Active countermeasures deployed.",
          badgeVariant: "default" as const
        };
      case "critical":
        return {
          icon: <Zap className="w-5 h-5" />,
          color: "text-misinformation",
          bgColor: "bg-misinformation/10",
          borderColor: "border-misinformation/20",
          title: "Critical Threat Level",
          description: "Widespread misinformation campaign detected. Emergency protocols active.",
          badgeVariant: "destructive" as const
        };
      default:
        return {
          icon: <Info className="w-5 h-5" />,
          color: "text-muted-foreground",
          bgColor: "bg-muted/10",
          borderColor: "border-muted/20",
          title: "Unknown Threat Level",
          description: "Threat assessment in progress.",
          badgeVariant: "outline" as const
        };
    }
  };

  const config = getThreatConfig(level);

  return (
    <Card className={cn(
      "border-2",
      config.borderColor,
      config.bgColor,
      className
    )}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-full", config.bgColor)}>
              <div className={config.color}>
                {config.icon}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm">{config.title}</h3>
              <p className="text-xs text-muted-foreground">{config.description}</p>
            </div>
          </div>
          <Badge variant={config.badgeVariant} className="uppercase">
            {level}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};