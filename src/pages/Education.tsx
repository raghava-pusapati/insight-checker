import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap,
  BookOpen,
  Play,
  CheckCircle,
  Trophy,
  Users,
  Clock,
  Star,
  Brain,
  Shield,
  Eye,
  Target,
  Zap,
  Award
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  modules: number;
  enrolled: number;
  rating: number;
  progress?: number;
  completed?: boolean;
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: number;
  difficulty: "Easy" | "Medium" | "Hard";
  timeLimit: string;
  score?: number;
  completed?: boolean;
}

export default function Education() {
  const [selectedTab, setSelectedTab] = useState("courses");

  const courses: Course[] = [
    {
      id: "1",
      title: "Fundamentals of Misinformation Detection",
      description: "Learn the basic principles of identifying false information online",
      level: "Beginner",
      duration: "2 hours",
      modules: 6,
      enrolled: 12489,
      rating: 4.8,
      progress: 75,
      completed: false
    },
    {
      id: "2", 
      title: "Advanced AI Detection Techniques",
      description: "Deep dive into machine learning approaches for misinformation detection",
      level: "Advanced",
      duration: "4 hours",
      modules: 8,
      enrolled: 3421,
      rating: 4.9,
      progress: 0,
      completed: false
    },
    {
      id: "3",
      title: "Social Media Fact-Checking",
      description: "Master the art of verifying information on social platforms",
      level: "Intermediate",
      duration: "3 hours",
      modules: 7,
      enrolled: 8967,
      rating: 4.7,
      progress: 100,
      completed: true
    },
    {
      id: "4",
      title: "Deepfake Recognition & Analysis",
      description: "Identify synthetic media and manipulated content",
      level: "Intermediate",
      duration: "2.5 hours",
      modules: 5,
      enrolled: 5634,
      rating: 4.6,
      progress: 30,
      completed: false
    }
  ];

  const quizzes: Quiz[] = [
    {
      id: "1",
      title: "Basic Misinformation Patterns",
      description: "Test your knowledge of common misinformation tactics",
      questions: 15,
      difficulty: "Easy",
      timeLimit: "10 min",
      score: 87,
      completed: true
    },
    {
      id: "2",
      title: "Source Credibility Assessment", 
      description: "Evaluate the reliability of information sources",
      questions: 20,
      difficulty: "Medium",
      timeLimit: "15 min",
      score: 0,
      completed: false
    },
    {
      id: "3",
      title: "Advanced Detection Techniques",
      description: "Apply sophisticated analysis methods",
      questions: 25,
      difficulty: "Hard",
      timeLimit: "20 min",
      score: 0,
      completed: false
    }
  ];

  const achievements = [
    { icon: Trophy, title: "First Course Completed", description: "Completed your first education course", earned: true },
    { icon: Award, title: "Perfect Score", description: "Achieved 100% on a quiz", earned: true },
    { icon: Star, title: "Top Performer", description: "Ranked in top 10% of learners", earned: false },
    { icon: Brain, title: "AI Expert", description: "Mastered all AI detection courses", earned: false },
    { icon: Shield, title: "Misinformation Hunter", description: "Completed 10 detection challenges", earned: false }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-misinformation text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Hard": return "bg-misinformation text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            Educational Center
          </h1>
          <p className="text-muted-foreground">Learn to identify and combat misinformation effectively</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">Level 7</div>
          <div className="text-sm text-muted-foreground">1,250 XP</div>
          <Progress value={65} className="w-32 h-2 mt-1" />
        </div>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Courses Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground mt-1">out of 12 available</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Target className="w-4 h-4" />
              Quiz Average
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">87%</div>
            <div className="text-xs text-muted-foreground mt-1">Overall score</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time Spent Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">24h</div>
            <div className="text-xs text-muted-foreground mt-1">This month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">2</div>
            <div className="text-xs text-muted-foreground mt-1">Badges earned</div>
          </CardContent>
        </Card>
      </div>

      {/* Educational Content */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Course Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getLevelColor(course.level)}>
                            {course.level}
                          </Badge>
                          {course.completed && (
                            <Badge variant="outline" className="text-success border-success">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">{course.description}</p>
                      </div>
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {course.modules} modules
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.enrolled.toLocaleString()} enrolled
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-warning" />
                        {course.rating}
                      </span>
                    </div>

                    {/* Progress */}
                    {course.progress !== undefined && course.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    {/* Action Button */}
                    <Button 
                      className="w-full flex items-center gap-2"
                      variant={course.completed ? "outline" : "default"}
                    >
                      {course.completed ? (
                        <>
                          <Eye className="w-4 h-4" />
                          Review Course
                        </>
                      ) : course.progress && course.progress > 0 ? (
                        <>
                          <Play className="w-4 h-4" />
                          Continue Learning
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Start Course
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Quiz Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getDifficultyColor(quiz.difficulty)}>
                            {quiz.difficulty}
                          </Badge>
                          {quiz.completed && (
                            <Badge variant="outline" className="text-success border-success">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{quiz.title}</h3>
                        <p className="text-sm text-muted-foreground">{quiz.description}</p>
                      </div>
                      {quiz.completed && quiz.score && (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-success">{quiz.score}%</div>
                          <div className="text-xs text-muted-foreground">Score</div>
                        </div>
                      )}
                    </div>

                    {/* Quiz Details */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{quiz.questions} questions</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {quiz.timeLimit}
                      </span>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full flex items-center gap-2"
                      variant={quiz.completed ? "outline" : "default"}
                    >
                      {quiz.completed ? (
                        <>
                          <Eye className="w-4 h-4" />
                          Retake Quiz
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          Start Quiz
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`p-4 border rounded-lg transition-all ${
                      achievement.earned 
                        ? 'bg-primary/10 border-primary/20' 
                        : 'bg-muted/20 border-muted opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <achievement.icon className={`w-6 h-6 ${
                        achievement.earned ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{achievement.title}</h3>
                        {achievement.earned && (
                          <Badge variant="outline" className="text-xs mt-1">
                            <Trophy className="w-3 h-3 mr-1" />
                            Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Reference Guides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Misinformation Red Flags Checklist
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Source Verification Toolkit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="w-4 h-4 mr-2" />
                  Image & Video Analysis Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Detection Techniques
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practice Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Interactive Case Studies
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="w-4 h-4 mr-2" />
                  Real-time Detection Challenges
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Community Practice Groups
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" />
                  Certification Pathways
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}