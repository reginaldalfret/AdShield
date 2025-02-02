import React, { useState } from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';
    import TextInput from './inputs/TextInput';

    const CommunityForumPage: React.FC = () => {
      const navigate = useNavigate();
      const [textInput, setTextInput] = useState('');
      const [loading, setLoading] = useState(false);

      const handleAskQuestion = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Question submitted:', textInput);
        setLoading(false);
        navigate(-1);
      };

      const handleShareStory = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Story submitted:', textInput);
        setLoading(false);
        navigate(-1);
      };

      const handleShareFeedback = async () => {
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
            <h1 className="text-3xl font-bold mb-6">Community Forum</h1>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">Share your thoughts or ask a question:</p>
              <TextInput value={textInput} onChange={(e) => setTextInput(e.target.value)} />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleAskQuestion}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Ask Question'}
              </button>
              <button
                onClick={handleShareStory}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Share Story'}
              </button>
              <button
                onClick={handleShareFeedback}
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Share Feedback'}
              </button>
            </div>
            <div className="mt-8 bg-gray-800 p-4 rounded-md">
              <h2 className="text-white text-xl font-semibold mb-2">Contact Information</h2>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Admin:</span> Reginald Alfret
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Email:</span> reginaldalfret@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Phone:</span> 8122087088
              </p>
            </div>
          </div>
        </div>
      );
    };

    export default CommunityForumPage;
