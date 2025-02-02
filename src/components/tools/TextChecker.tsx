import React, { useState, useCallback } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import TextInput from '../inputs/TextInput';

    const TextChecker: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [textInput, setTextInput] = useState('');
      const [noThreatMessage, setNoThreatMessage] = useState<string | null>(null);

      const analyzeText = useCallback(async () => {
        setLoading(true);
        setNoThreatMessage(null);
        const keywords = ['urgent', 'cryptocurrency', 'immediate action required', 'free', 'money', 'investment', 'limited time', 'guaranteed', 'prize', 'winner', 'secret'];
        const lowerCaseText = textInput.toLowerCase();
        const foundKeyword = keywords.some(keyword => lowerCaseText.includes(keyword));

        if (foundKeyword) {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          const randomPercentage = Math.floor(Math.random() * 101);
          const isAiGenerated = randomPercentage > 50;
          setAnalysisResult({ isAiGenerated, percentage: randomPercentage });
        } else {
          setAnalysisResult(null);
          setNoThreatMessage('No threat found.');
        }
        setLoading(false);
      }, [textInput]);

      return (
        <ToolAnalysisPage
          title="AI Text Message Checker"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeText}
          type="Text"
        >
          <TextInput value={textInput} onChange={(e) => setTextInput(e.target.value)} />
          {noThreatMessage && (
            <div className="mt-4 bg-gray-800 p-4 rounded-md text-center">
              <p className="text-gray-300">{noThreatMessage}</p>
            </div>
          )}
        </ToolAnalysisPage>
      );
    };

    export default TextChecker;
