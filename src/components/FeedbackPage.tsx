import React, { useState } from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';
    import TextInput from './inputs/TextInput';

    const FeedbackPage: React.FC = () => {
      const navigate = useNavigate();
      const [textInput, setTextInput] = useState('');
      const [loading, setLoading] = useState(false);

      const handleSendFeedback = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Feedback submitted:', textInput);
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
            <h1 className="text-3xl font-bold mb-6">Provide Feedback</h1>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">Please provide your feedback:</p>
              <TextInput value={textInput} onChange={(e) => setTextInput(e.target.value)} />
            </div>
            <button
              onClick={handleSendFeedback}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Feedback'}
            </button>
          </div>
        </div>
      );
    };

    export default FeedbackPage;
