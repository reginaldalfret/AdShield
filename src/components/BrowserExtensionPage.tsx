import React, { useState } from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const BrowserExtensionPage: React.FC = () => {
      const navigate = useNavigate();
      const [extensionUrl, setExtensionUrl] = useState<string | null>(null);
      const [loading, setLoading] = useState(false);

      const handleGenerateExtension = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setExtensionUrl('https://example.com/browser-extension');
        setLoading(false);
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6">Browser Extension</h1>
            <div className="bg-gray-800 p-6 rounded-md text-center">
              <p className="text-gray-300 mb-4">
                Click the button below to generate a browser extension link:
              </p>
              <button
                onClick={handleGenerateExtension}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Generating...' : 'Generate Browser Extension'}
              </button>
              {extensionUrl && (
                <div className="mt-6">
                  <p className="text-gray-300 mb-2">
                    Your browser extension link:
                  </p>
                  <a
                    href={extensionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {extensionUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };

    export default BrowserExtensionPage;
