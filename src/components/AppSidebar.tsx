import {
  Shield,
  BarChart3,
  Eye,
  Scan,
  Network,
  TrendingUp,
  GraduationCap,
  Users,
  Code,
  Settings,
  Home,
  AlertTriangle,
  Brain,
  Zap
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    description: "Main overview"
  },
  {
    title: "Live Monitoring",
    url: "/monitoring",
    icon: Eye,
    description: "Real-time feeds",
    badge: "Live"
  },
  {
    title: "Source Credibility",
    url: "/credibility",
    icon: Shield,
    description: "AI-powered scoring",
    badge: "New"
  },
  {
    title: "Deepfake Detection",
    url: "/deepfake",
    icon: Scan,
    description: "Media analysis",
    badge: "AI"
  },
  {
    title: "Cross-Platform Tracker",
    url: "/tracking",
    icon: Network,
    description: "Multi-platform analysis"
  },
  {
    title: "Analytics Hub",
    url: "/analytics",
    icon: BarChart3,
    description: "Advanced insights"
  },
  
  {
    title: "Community",
    url: "/community",
    icon: Users,
    description: "Collaborative verification"
  },
  
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    description: "Configuration"
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    `w-full justify-start transition-all duration-200 ${
      isActive 
        ? "bg-primary text-primary-foreground shadow-md" 
        : "hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">MisinfoShield</h2>
              <p className="text-xs text-sidebar-foreground/70">AI Detection Platform</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup  className="bg-stone-600">
          <SidebarGroupLabel className={isCollapsed ? "sr-only text-white" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!isCollapsed && (
                        <div className="flex-1 flex items-center justify-between">
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-xs opacity-70">{item.description}</div>
                          </div>
                          {item.badge && (
                            <Badge 
                              variant={
                                item.badge === "Live" ? "destructive" :
                                item.badge === "New" ? "default" :
                                item.badge === "AI" ? "secondary" :
                                "outline"
                              }
                              className="text-xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!isCollapsed && (
          <SidebarGroup className="mt-auto bg-orange-200">
            <SidebarGroupLabel>Status</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sidebar-foreground/70">System Online</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-3 h-3 text-warning" />
                  <span className="text-sidebar-foreground/70">Processing: 847/min</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-3 h-3 text-misinformation" />
                  <span className="text-sidebar-foreground/70">3 Active Threats</span>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}