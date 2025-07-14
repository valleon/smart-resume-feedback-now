import { useState } from "react";
import { Download, ArrowLeft, TrendingUp, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Results = () => {
  const [score] = useState(78); // Mock score
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    // Simulate download
    setTimeout(() => {
      setLoading(false);
      // In a real app, this would trigger a download
      console.log("Downloading full report...");
    }, 1500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "success";
    if (score >= 60) return "warning";
    return "destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    return "Needs Improvement";
  };

  const feedbackData = [
    {
      category: "Format & Structure",
      score: 85,
      status: "excellent",
      feedback: "Your resume has excellent formatting and clear structure. The sections are well-organized and easy to scan.",
      icon: CheckCircle2
    },
    {
      category: "Content Quality",
      score: 72,
      status: "good",
      feedback: "Good content overall, but could benefit from more specific achievements with quantifiable results.",
      icon: Info
    },
    {
      category: "Keywords & ATS",
      score: 65,
      status: "warning",
      feedback: "Consider adding more industry-specific keywords to improve ATS compatibility and relevance.",
      icon: AlertTriangle
    },
    {
      category: "Experience Section",
      score: 88,
      status: "excellent",
      feedback: "Excellent work experience section with clear job descriptions and relevant responsibilities.",
      icon: CheckCircle2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "success";
      case "good": return "default";
      case "warning": return "warning";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Resume Score
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's how your resume performed across key criteria
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Score Card */}
          <Card className="md:col-span-1 shadow-elegant border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Overall Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${score * 2.51} 251`}
                    className={`text-${getScoreColor(score)} transition-all duration-1000`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">{score}</span>
                </div>
              </div>
              <Badge variant={getScoreColor(score) as any} className="text-sm px-3 py-1">
                {getScoreLabel(score)}
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Your resume scored {score} out of 100
              </p>
            </CardContent>
          </Card>

          {/* Detailed Feedback */}
          <div className="md:col-span-2 space-y-6">
            {feedbackData.map((item, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full bg-${getStatusColor(item.status)}/10`}>
                      <item.icon className={`h-5 w-5 text-${getStatusColor(item.status)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{item.category}</h3>
                        <Badge variant={getStatusColor(item.status) as any}>
                          {item.score}/100
                        </Badge>
                      </div>
                      <Progress value={item.score} className="h-2 mb-3" />
                      <p className="text-sm text-muted-foreground">{item.feedback}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            onClick={handleDownload}
            disabled={loading}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Download className="h-4 w-4 mr-2" />
            {loading ? "Generating..." : "Download Full Report"}
          </Button>
          <Button variant="outline" asChild>
            <Link to="/upload">
              <TrendingUp className="h-4 w-4 mr-2" />
              Analyze Another Resume
            </Link>
          </Button>
        </div>

        {/* Tips Section */}
        <Card className="mt-12 shadow-elegant border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Quick Tips to Improve Your Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium">Content Enhancement</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Add quantifiable achievements (numbers, percentages)</li>
                  <li>• Include relevant industry keywords</li>
                  <li>• Tailor content to specific job descriptions</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Format Optimization</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use consistent formatting throughout</li>
                  <li>• Keep it to 1-2 pages maximum</li>
                  <li>• Use professional fonts and spacing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;