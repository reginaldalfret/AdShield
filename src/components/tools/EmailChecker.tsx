import React, { useState } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import EmailInput from '../inputs/EmailInput';

    const EmailChecker: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [emailInput, setEmailInput] = useState('');

      const analyzeEmail = async () => {
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
          title="AI Email Checker"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeEmail}
          type="Email"
        >
          <EmailInput value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        </ToolAnalysisPage>
      );
    };

    export default EmailChecker;
