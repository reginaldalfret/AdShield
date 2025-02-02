import React, { useState } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import DocumentInput from '../inputs/DocumentInput';
    import { FileText } from 'lucide-react';

    const DocumentChecker: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [file, setFile] = useState<File | null>(null);
      const [fileName, setFileName] = useState<string | null>(null);

      const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFile(file);
          setFileName(file.name);
        }
      };

      const analyzeDocument = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const randomPercentage = Math.floor(Math.random() * 101);
        const isAiGenerated = randomPercentage > 50;
        setAnalysisResult({ isAiGenerated, percentage: randomPercentage });
        setLoading(false);
      };

      return (
        <ToolAnalysisPage
          title="AI Document Checker"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeDocument}
          type="Document"
        >
          <DocumentInput onDocumentUpload={handleDocumentUpload} />
          {file && (
            <div className="bg-gray-800 p-4 rounded-md flex items-center mt-4">
              <FileText className="h-8 w-8 text-gray-400 mr-4" />
              <span className="text-gray-300">{fileName}</span>
            </div>
          )}
        </ToolAnalysisPage>
      );
    };

    export default DocumentChecker;
