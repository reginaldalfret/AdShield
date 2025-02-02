import React, { useState } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import UrlInput from '../inputs/UrlInput';

    const SocialMediaProfileChecker: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [urlInput, setUrlInput] = useState('');

      const analyzeProfile = async () => {
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
          title="AI Social Media Profile Checker"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeProfile}
          type="URL"
        >
          <UrlInput value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
        </ToolAnalysisPage>
      );
    };

    export default SocialMediaProfileChecker;
