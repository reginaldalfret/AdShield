import React, { useState } from 'react';
    import { ArrowLeft, AlertTriangle } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const TextAnalysisPage: React.FC = () => {
      const navigate = useNavigate();
      const [analysisResult, setAnalysisResult] = useState<{ isAiGenerated: boolean, percentage: number } | null>(null);
      const [loading, setLoading] = useState(false);
      const [textInput, setTextInput] = useState('');

      const analyzeText = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const randomPercentage = Math.floor(Math.random() * 101);
        const isAiGenerated = randomPercentage > 50;
        setAnalysisResult({ isAiGenerated, percentage: randomPercentage });
        setLoading(false);
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6">Risk Assessment</h1>
            <div className="mb-6">
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="w-full h-32 bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter text to analyze here..."
              />
              <button
                onClick={analyzeText}
                disabled={loading || !textInput}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Analyzing...' : 'Analyze Text'}
              </button>
            </div>
            {loading ? (
              <div className="text-center">Analyzing...</div>
            ) : analysisResult ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">
                    {analysisResult.percentage}% Risk Level
                  </h2>
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <div className="bg-gray-800 rounded-full h-4 overflow-hidden mb-6">
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: `${analysisResult.percentage}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Scam Analysis</h3>
                    <div className="text-gray-300">
                      <p><span className="font-semibold text-gray-400">Type:</span> Financial Fraud</p>
                      <p className="mt-2"><span className="font-semibold text-gray-400">Flagged Keywords:</span></p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-red-600 text-white px-2 py-1 rounded-md text-sm">urgent</span>
                        <span className="bg-red-600 text-white px-2 py-1 rounded-md text-sm">cryptocurrency</span>
                        <span className="bg-red-600 text-white px-2 py-1 rounded-md text-sm">immediate action required</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Source Information</h3>
                    <div className="text-gray-300">
                      <p><span className="font-semibold text-gray-400">Origin:</span> Unknown Origin</p>
                      <p className="mt-2"><span className="font-semibold text-gray-400">Sender Reputation:</span> Previously Flagged</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-700 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Immediate Actions Required
                  </h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Do not respond to the sender</li>
                    <li>Block this contact immediately</li>
                    <li>Report to relevant authorities</li>
                  </ul>
                </div>
                <div className="flex justify-between">
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                    Report & Block
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md">
                    Learn More
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      );
    };

    export default TextAnalysisPage;
