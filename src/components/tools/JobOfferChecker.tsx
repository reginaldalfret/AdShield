import React, { useState } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import ImageInput from '../inputs/ImageInput';

    const JobOfferChecker: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [imageSrc, setImageSrc] = useState<string | null>(null);
      const [file, setFile] = useState<File | null>(null);

      const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFile(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImageSrc(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };

      const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        const items = e.clipboardData.items;
        for (let item of items) {
          if (item.type.indexOf('image') !== -1) {
            const blob = item.getAsFile();
            if (blob) {
              setFile(blob);
              const reader = new FileReader();
              reader.onloadend = () => {
                setImageSrc(reader.result as string);
              };
              reader.readAsDataURL(blob);
            }
          }
        }
      };

      const analyzeJobOffer = async () => {
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
          title="AI Job Offer Checker"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeJobOffer}
          type="Image"
        >
          <ImageInput
            imageSrc={imageSrc}
            onImageUpload={handleImageUpload}
            onPaste={handlePaste}
          />
        </ToolAnalysisPage>
      );
    };

    export default JobOfferChecker;
