import React from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const LanguagesPage: React.FC = () => {
      const navigate = useNavigate();

      const languages = [
        { id: 1, name: 'English' },
        { id: 2, name: 'Spanish' },
        { id: 3, name: 'French' },
        { id: 4, name: 'German' },
        { id: 5, name: 'Chinese' },
        { id: 6, name: 'Japanese' },
        { id: 7, name: 'Russian' },
        { id: 8, name: 'Arabic' },
        { id: 9, name: 'Hindi' },
        { id: 10, name: 'Portuguese' },
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-3xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6">Select Language</h1>
            <ul className="space-y-2">
              {languages.map((language) => (
                <li
                  key={language.id}
                  className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 cursor-pointer"
                >
                  {language.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

    export default LanguagesPage;
