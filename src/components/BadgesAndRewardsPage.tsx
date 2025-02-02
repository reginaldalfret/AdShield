import React from 'react';
    import { ArrowLeft, Shield, Eye, BookOpen, Share2, Flag, MessageSquare, BarChart2, Key, Trophy, Star } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const BadgesAndRewardsPage: React.FC = () => {
      const navigate = useNavigate();

      const badges = [
        { id: 1, name: 'Scam Spotter', icon: Shield, description: 'Successfully identified 10 potential scams', colorClass: 'bg-blue-500' },
        { id: 2, name: 'Cyber Guardian', icon: Key, description: 'Completed all cybersecurity training modules', colorClass: 'bg-purple-500' },
        { id: 3, name: 'Community Protector', icon: Star, description: 'Reported 5 scams to help protect others', colorClass: 'bg-yellow-500' },
        { id: 4, name: 'Vigilant Observer', icon: Eye, description: 'Logged in for 7 consecutive days', colorClass: 'bg-green-500' },
        { id: 5, name: 'Knowledge Seeker', icon: BookOpen, description: 'Read 20 articles about cybersecurity', colorClass: 'bg-red-500' },
        { id: 6, name: 'Story Sharer', icon: Share2, description: 'Shared your scam experience to educate others', colorClass: 'bg-indigo-500' },
        { id: 7, name: 'Scam Buster', icon: Flag, description: 'Successfully resolved a scam attempt', colorClass: 'bg-pink-500' },
        { id: 8, name: 'Inquisitive Mind', icon: MessageSquare, description: 'Asked 10 questions in the community', colorClass: 'bg-orange-500' },
        { id: 9, name: 'Poll Participant', icon: BarChart2, description: 'Participated in 5 community polls', colorClass: 'bg-teal-500' },
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white p-8">
          <div className="max-w-7xl mx-auto bg-[#1e213a] rounded-lg p-8 shadow-lg">
            <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-300 hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold mb-8">Cybersecurity Badges</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`bg-[#1e213a] rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer`}
                >
                  <div className={`${badge.colorClass} w-24 h-24 rounded-full flex items-center justify-center mb-4`}>
                    <badge.icon className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-white text-xl font-semibold mb-2">{badge.name}</h2>
                  <p className="text-gray-300">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default BadgesAndRewardsPage;
