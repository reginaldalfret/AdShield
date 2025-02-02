import React from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const CyberScamNewsPage: React.FC = () => {
      const navigate = useNavigate();

      const news = [
        {
          id: 1,
          title: 'New Cryptocurrency Scam Alert',
          category: 'Crypto Scams',
          date: 'January 24, 2025',
          description: 'A new wave of cryptocurrency scams has been detected targeting users through social media platforms...',
        },
        {
          id: 2,
          title: 'Rising Cases of AI-Generated Voice Scams',
          category: 'Voice Scams',
          date: 'January 23, 2025',
          description: 'Security researchers have identified an increase in scams using AI-generated voice cloning...',
        },
        {
          id: 3,
          title: 'Major Phishing Campaign Targets Banking Customers',
          category: 'Phishing',
          date: 'January 22, 2025',
          description: 'A sophisticated phishing campaign impersonating major banks has been detected...',
        },
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-8">Cyber Scam News</h1>
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <div className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm w-fit mb-2">{item.category}</div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default CyberScamNewsPage;
