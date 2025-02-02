import React, { useState } from 'react';
    import ToolAnalysisPage from '../ToolAnalysisPage';
    import QrCodeInput from '../inputs/QrCodeInput';

    const QrCodeScanner: React.FC = () => {
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [qrCodeValue, setQrCodeValue] = useState('');
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

      const handleQrCodeRead = (text: string) => {
        setQrCodeValue(text);
      };

      const analyzeQrCode = async () => {
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
          title="AI QR Code Scanner"
          loading={loading}
          analysisResult={analysisResult}
          onAnalyze={analyzeQrCode}
          type="QR Code"
        >
          <QrCodeInput
            onQrCodeRead={handleQrCodeRead}
            imageSrc={imageSrc}
            onImageUpload={handleImageUpload}
          />
        </ToolAnalysisPage>
      );
    };

    export default QrCodeScanner;
