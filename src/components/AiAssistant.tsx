import React, { useState } from 'react';
    import { ArrowLeft, Bot } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';
    import TextInput from './inputs/TextInput';

    interface AiAssistantProps {
      onClose: () => void;
    }

    const AiAssistant: React.FC<AiAssistantProps> = ({ onClose }) => {
      const [textInput, setTextInput] = useState('');
      const [response, setResponse] = useState<string | null>(null);
      const [loading, setLoading] = useState(false);

      const handleAsk = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const answer = getAnswer(textInput);
        setResponse(answer);
        setLoading(false);
      };

      const getAnswer = (question: string): string => {
        const lowerCaseQuestion = question.toLowerCase();
        if (lowerCaseQuestion.includes('phishing')) {
          return 'Phishing is a type of online scam where attackers try to trick you into revealing personal information.';
        } else if (lowerCaseQuestion.includes('malware')) {
          return 'Malware is software that is designed to damage or disable computers and computer systems.';
        } else if (lowerCaseQuestion.includes('ransomware')) {
          return 'Ransomware is a type of malware that encrypts your files and demands a ransom for their release.';
        } else if (lowerCaseQuestion.includes('password')) {
          return 'A strong password should be a combination of uppercase, lowercase, numbers, and symbols.';
        } else if (lowerCaseQuestion.includes('social engineering')) {
          return 'Social engineering is the art of manipulating people into performing actions or divulging confidential information.';
        } else {
          return 'I am an AI assistant and I am still learning. Please ask a question related to cybersecurity.';
        }
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1e213a] p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-semibold">AI Assistant</h2>
              <button onClick={onClose} className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">How can I help you today?</p>
              <TextInput value={textInput} onChange={(e) => setTextInput(e.target.value)} />
            </div>
            <button
              onClick={handleAsk}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Thinking...' : 'Ask'}
            </button>
            {response && (
              <div className="mt-6 bg-gray-800 p-4 rounded-md">
                <p className="text-gray-300">{response}</p>
              </div>
            )}
          </div>
        </div>
      );
    };

    export default AiAssistant;
