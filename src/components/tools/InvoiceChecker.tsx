import React, { useState } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import DocumentInput from '../inputs/DocumentInput';

    const InvoiceChecker: React.FC = () => {
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

      const analyzeInvoice = async () => {
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
          title="AI Invoice Checker"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeInvoice}
          type="Invoice"
        >
          <DocumentInput onDocumentUpload={handleDocumentUpload} />
          {fileName && <p className="text-gray-300 mt-2">Uploaded File: {fileName}</p>}
        </ToolAnalysisPage>
      );
    };

    export default InvoiceChecker;
