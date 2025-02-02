import React, { useState, useMemo } from 'react';
    import { ArrowLeft, AlertTriangle } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    interface ToolAnalysisPageProps {
      title: string;
      loading: boolean;
      analysisResult: { isAiGenerated: boolean, percentage: number } | null;
      children: React.ReactNode;
      onAnalyze: () => void;
      type: string;
    }

    const ToolAnalysisPage: React.FC<ToolAnalysisPageProps> = React.memo(({ title, loading, analysisResult, children, onAnalyze, type }) => {
      const navigate = useNavigate();

      const getRiskColor = useMemo(() => (percentage: number | undefined) => {
        if (percentage === undefined) return 'text-gray-400';
        if (percentage < 33) return 'text-green-400';
        if (percentage < 66) return 'text-orange-400';
        return 'text-red-400';
      }, []);

      const getProgressBarColor = useMemo(() => (percentage: number | undefined) => {
        if (percentage === undefined) return 'bg-gray-500';
        if (percentage < 33) return 'bg-green-500';
        if (percentage < 66) return 'bg-orange-500';
        return 'bg-red-500';
      }, []);

      const getActionColor = useMemo(() => (percentage: number | undefined) => {
        if (percentage === undefined) return 'bg-gray-700';
        if (percentage < 33) return 'bg-green-700';
        if (percentage < 66) return 'bg-orange-700';
        return 'bg-red-700';
      }, []);

      const riskColor = useMemo(() => getRiskColor(analysisResult?.percentage), [analysisResult?.percentage]);
      const progressBarColor = useMemo(() => getProgressBarColor(analysisResult?.percentage), [analysisResult?.percentage]);
      const actionColor = useMemo(() => getActionColor(analysisResult?.percentage), [analysisResult?.percentage]);

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6">Risk Assessment</h1>
            <div className="mb-6">
              {children}
              <button
                onClick={onAnalyze}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Analyzing...' : `Analyze ${type}`}
              </button>
            </div>
            {loading ? (
              <div className="text-center">Analyzing...</div>
            ) : analysisResult ? (
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Scam Analysis</h3>
                    <div className="text-gray-300">
                      <p><span className="font-semibold text-gray-400">Type:</span> {title}</p>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Source Information</h3>
                    <div className="text-gray-300">
                      <p><span className="font-semibold text-gray-400">Origin:</span> Unknown Origin</p>
                    </div>
                  </div>
                </div>
                <div className={`${actionColor} p-4 rounded-lg mb-6`}>
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
                  <button className={`bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md`}>
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
    });

    export default ToolAnalysisPage;
