import React, { useState } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import AudioInput from '../inputs/AudioInput';

    const VoiceCallAnalyzer: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [file, setFile] = useState<File | null>(null);

      const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFile(file);
        }
      };

      const analyzeVoiceCall = async () => {
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
          title="AI Voice Call Analyzer"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeVoiceCall}
          type="Audio"
        >
          <AudioInput onAudioUpload={handleAudioUpload} />
        </ToolAnalysisPage>
      );
    };

    export default VoiceCallAnalyzer;
