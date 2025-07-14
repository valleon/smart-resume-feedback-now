import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const validateFile = (file: File): boolean => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please select a file smaller than 5MB",
        variant: "destructive",
      });
      return false;
    }
    
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleFileUpload = async (file: File) => {
    if (!validateFile(file)) return;
    
    setSelectedFile(file);
    setUploading(true);
    setProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "Upload successful!",
            description: "Your resume has been processed successfully",
          });
          // Navigate to results after a brief delay
          setTimeout(() => navigate("/results"), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Upload Your Resume
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your resume and get instant AI-powered scoring and feedback
          </p>
        </div>

        <Card className="shadow-elegant border-0">
          <CardContent className="p-8">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                isDragOver
                  ? "border-primary bg-primary/5 shadow-glow"
                  : "border-muted-foreground/30 hover:border-primary/50"
              }`}
            >
              <UploadIcon className="mx-auto h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Drag & Drop Your Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                or click to browse files
              </p>
              
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
                disabled={uploading}
              />
              
              <Button
                asChild
                className="mb-6 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={uploading}
              >
                <label htmlFor="file-upload" className="cursor-pointer">
                  Choose File
                </label>
              </Button>
              
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>PDF, DOCX</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Max 5MB</span>
                </div>
              </div>
            </div>

            {uploading && (
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium">{selectedFile?.name}</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">
                  Processing your resume... {progress}%
                </p>
              </div>
            )}

            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Privacy & Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Your resume is processed securely and deleted immediately after analysis. 
                    We never store your personal information.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upload;