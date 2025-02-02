import React from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const HomePage: React.FC = () => {
      const navigate = useNavigate();

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6">Welcome to AdShield</h1>
            <div className="bg-gray-800 p-6 rounded-md text-center">
              <p className="text-gray-300">
                Your all-in-one solution for detecting and preventing online scams.
              </p>
            </div>
          </div>
        </div>
      );
    };

    export default HomePage;
