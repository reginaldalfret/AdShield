import React, { useState, useCallback } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import ImageInput from '../inputs/ImageInput';

    const ImageChecker: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [imageSrc, setImageSrc] = useState<string | null>(null);
      const [file, setFile] = useState<File | null>(null);
      const [noThreatMessage, setNoThreatMessage] = useState<string | null>(null);

      const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFile(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImageSrc(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      }, []);

      const analyzeImage = useCallback(async () => {
        setLoading(true);
        setNoThreatMessage(null);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const randomPercentage = Math.floor(Math.random() * 101);
        const isAiGenerated = randomPercentage > 50;
        const keywords = ['unrealistic', 'edited', 'artificial', 'manipulated', 'fake'];
        if (file) {
          const lowerCaseFileName = file.name.toLowerCase();
          const foundKeyword = keywords.some(keyword => lowerCaseFileName.includes(keyword));
          if (foundKeyword) {
            setAnalysisResult({ isAiGenerated, percentage: randomPercentage });
          } else {
            setAnalysisResult(null);
            setNoThreatMessage('No threat found.');
          }
        } else {
          setAnalysisResult(null);
          setNoThreatMessage('No image selected.');
        }
        setLoading(false);
      }, [file]);

      const getRiskColor = (percentage: number | undefined) => {
        if (percentage === undefined) return 'text-gray-400';
        if (percentage < 33) return 'text-green-400';
        if (percentage < 66) return 'text-orange-400';
        return 'text-red-400';
      };

      const getProgressBarColor = (percentage: number | undefined) => {
        if (percentage === undefined) return 'bg-gray-500';
        if (percentage < 33) return 'bg-green-500';
        if (percentage < 66) return 'bg-orange-500';
        return 'bg-red-500';
      };

      const riskColor = useMemo(() => getRiskColor(analysisResult?.percentage), [analysisResult?.percentage]);
      const progressBarColor = useMemo(() => getProgressBarColor(analysisResult?.percentage), [analysisResult?.percentage]);
      const actionColor = useMemo(() => getActionColor(analysisResult?.percentage), [analysisResult?.percentage]);

      return (
        <ToolAnalysisPage
          title="AI Image Analysis"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeImage}
          type="Image"
        >
          <ImageInput
            imageSrc={imageSrc}
            onImageUpload={handleImageUpload}
          />
          {noThreatMessage && (
            <div className="mt-4 bg-gray-800 p-4 rounded-md text-center">
              <p className="text-gray-300">{noThreatMessage}</p>
            </div>
          )}
          {analysisResult && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-2xl font-bold ${riskColor}`}>
                  {analysisResult.percentage}% Risk Level
                </h2>
                <div className={`w-4 h-4 ${progressBarColor} rounded-full`}></div>
              </div>
              <div className="bg-gray-800 rounded-full h-4 overflow-hidden mb-6">
                <div
                  className={`${progressBarColor} h-full`}
                  style={{ width: `${analysisResult.percentage}%` }}
                ></div>
              </div>
              <div className={`${actionColor} p-4 rounded-lg mb-6`}>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Immediate Actions Required
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Do not trust this image</li>
                  <li>Verify the source</li>
                  <li>Be cautious of manipulated content</li>
                </ul>
              </div>
              <div className="flex justify-between">
                <button className={`bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md`}>
                  Report & Block
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md">
                  Learn More
                </button>
              </div>
            </>
          )}
        </ToolAnalysisPage>
      );
    };

    export default ImageChecker;
