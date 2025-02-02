import React, { useState } from 'react';
    import { ArrowLeft, Video, Trophy, Database, BookOpen } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const LearningCenterPage: React.FC = () => {
      const navigate = useNavigate();

      const lessons = [
        { id: 1, title: 'Understanding Phishing Attacks', content: 'Learn how to identify and avoid phishing attempts.', icon: Video, colorClass: 'bg-blue-500' },
        { id: 2, title: 'Protecting Your Passwords', content: 'Best practices for creating and managing strong passwords.', icon: Trophy, colorClass: 'bg-purple-500' },
        { id: 3, title: 'Recognizing Social Engineering', content: 'Understand how social engineering works and how to protect yourself.', icon: Database, colorClass: 'bg-amber-500' },
        { id: 4, title: 'Securing Your Devices', content: 'Tips for keeping your computers and mobile devices safe.', icon: Video, colorClass: 'bg-emerald-500' },
        { id: 5, title: 'Identifying Malware', content: 'Learn about different types of malware and how to detect them.', icon: Trophy, colorClass: 'bg-rose-500' },
        { id: 6, title: 'Safe Browsing Habits', content: 'Best practices for browsing the internet safely.', icon: BookOpen, colorClass: 'bg-indigo-500' },
        { id: 7, title: 'Understanding Ransomware', content: 'Learn about ransomware attacks and how to prevent them.', icon: Video, colorClass: 'bg-cyan-500' },
        { id: 8, title: 'Protecting Your Data', content: 'Tips for keeping your personal data secure.', icon: Trophy, colorClass: 'bg-fuchsia-500' },
        { id: 9, title: 'Staying Safe on Social Media', content: 'Best practices for using social media safely.', icon: Database, colorClass: 'bg-pink-500' },
      ];

      const quizzes = [
        {
          id: 1,
          question: 'What is phishing?',
          options: ['A type of fishing', 'A type of malware', 'A fraudulent attempt to obtain sensitive information', 'A type of social media'],
          answer: 'A fraudulent attempt to obtain sensitive information',
        },
        {
          id: 2,
          question: 'What is a strong password?',
          options: ['Your name', 'A simple word', 'A combination of uppercase, lowercase, numbers, and symbols', 'Your birthday'],
          answer: 'A combination of uppercase, lowercase, numbers, and symbols',
        },
        {
          id: 3,
          question: 'What is social engineering?',
          options: ['A type of software', 'A method of hacking', 'Manipulating people to gain access to information', 'A type of social media'],
          answer: 'Manipulating people to gain access to information',
        },
      ];

      const [currentQuiz, setCurrentQuiz] = useState<number | null>(null);
      const [selectedOption, setSelectedOption] = useState<string | null>(null);
      const [quizResult, setQuizResult] = useState<boolean | null>(null);

      const handleStartQuiz = (quizId: number) => {
        setCurrentQuiz(quizId);
        setSelectedOption(null);
        setQuizResult(null);
      };

      const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
      };

      const handleCheckAnswer = () => {
        if (currentQuiz !== null && selectedOption !== null) {
          const quiz = quizzes.find((q) => q.id === currentQuiz);
          if (quiz) {
            setQuizResult(quiz.answer === selectedOption);
          }
        }
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-7xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-8">Cybersecurity Lessons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`bg-[#1e213a] rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer`}
                >
                  <div className={`${lesson.colorClass} w-24 h-24 rounded-full flex items-center justify-center mb-4`}>
                    <lesson.icon className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-white text-xl font-semibold mb-2">{lesson.title}</h2>
                  <p className="text-gray-300">{lesson.content}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-6">Security Quizzes</h2>
            <div className="space-y-4">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="bg-gray-800 p-4 rounded-md">
                  <h3 className="text-white text-lg font-semibold mb-2">{quiz.question}</h3>
                  {currentQuiz === quiz.id ? (
                    <>
                      <ul className="space-y-2">
                        {quiz.options.map((option) => (
                          <li key={option}>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name={`quiz-${quiz.id}`}
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleOptionSelect(option)}
                                className="mr-2"
                              />
                              {option}
                            </label>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={handleCheckAnswer}
                        disabled={!selectedOption}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Check Answer
                      </button>
                      {quizResult !== null && (
                        <p className={`mt-4 ${quizResult ? 'text-green-400' : 'text-red-400'}`}>
                          {quizResult ? 'Correct!' : 'Incorrect. Try again.'}
                        </p>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleStartQuiz(quiz.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                    >
                      Start Quiz
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default LearningCenterPage;
