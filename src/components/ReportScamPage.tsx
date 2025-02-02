import React, { useState } from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';
    import TextInput from './inputs/TextInput';
    import ImageInput from './inputs/ImageInput';

    const ReportScamPage: React.FC = () => {
      const navigate = useNavigate();
      const [textInput, setTextInput] = useState('');
      const [imageSrc, setImageSrc] = useState<string | null>(null);
      const [file, setFile] = useState<File | null>(null);
      const [loading, setLoading] = useState(false);

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

      const handleReport = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Report submitted with:', { textInput, file });
        setLoading(false);
        navigate(-1);
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6">Report a Scam</h1>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">Describe the scam:</p>
              <TextInput value={textInput} onChange={(e) => setTextInput(e.target.value)} />
            </div>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">Upload or Paste Image (if any):</p>
              <ImageInput
                imageSrc={imageSrc}
                onImageUpload={handleImageUpload}
                onPaste={handlePaste}
              />
            </div>
            <button
              onClick={handleReport}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Reporting...' : 'Report Scam'}
            </button>
          </div>
        </div>
      );
    };

    export default ReportScamPage;
