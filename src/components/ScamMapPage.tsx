import React from 'react';
    import { ArrowLeft, Map } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const ScamMapPage: React.FC = () => {
      const navigate = useNavigate();

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6">Real-Time Scam Map</h1>
            <div className="bg-gray-800 h-96 rounded-lg relative flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Blank_map_of_the_world_%28Robinson_projection%29.svg" alt="World Map" className="max-h-full max-w-full" />
              <Map className="absolute h-12 w-12 text-gray-400" />
            </div>
          </div>
        </div>
      );
    };

    export default ScamMapPage;
