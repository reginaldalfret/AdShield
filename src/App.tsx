import React, { useState } from 'react';
    import {
      Shield, MessageSquare, Image, Mail, Globe, Phone, Layout, Search,
      Home, AlertTriangle, Flag, MessageCircle, BarChart2, Award, HelpCircle,
      Share2, FileText, Users, ShoppingBag, Wallet, Briefcase, ScanLine,
      Bell, BookOpen, Lightbulb, Moon, Sun, Languages, FileText as Mobile,
      Settings, TrendingUp, HandshakeIcon, MessageCircleWarning, Mic, Brain,
      FileText as FileInvoice, Shield as ShieldIcon, ImageOff, LayoutDashboard,
      Map, Key, Trophy, Database, Video, BookOpenCheck, Vote, Bot, Activity,
      Zap, Wrench, LineChart, BrainCircuit
    } from 'lucide-react';
    import { Routes, Route, useNavigate } from 'react-router-dom';
    import TextAnalysisPage from './components/TextAnalysisPage';
    import ImageAnalysisPage from './components/ImageAnalysisPage';
    import TextChecker from './components/tools/TextChecker';
    import ImageChecker from './components/tools/ImageChecker';
    import EmailChecker from './components/tools/EmailChecker';
    import WebsiteChecker from './components/tools/WebsiteChecker';
    import PhoneNumberChecker from './components/tools/PhoneNumberChecker';
    import AppChecker from './components/tools/AppChecker';
    import DocumentChecker from './components/tools/DocumentChecker';
    import SocialMediaProfileChecker from './components/tools/SocialMediaProfileChecker';
    import ShoppingSiteValidator from './components/tools/ShoppingSiteValidator';
    import CryptoWalletChecker from './components/tools/CryptoWalletChecker';
    import JobOfferChecker from './components/tools/JobOfferChecker';
    import QrCodeScanner from './components/tools/QrCodeScanner';
    import VoiceCallAnalyzer from './components/tools/VoiceCallAnalyzer';
    import MalwareDetector from './components/tools/MalwareDetector';
    import InvoiceChecker from './components/tools/InvoiceChecker';
    import BehavioralPatternsDetector from './components/tools/BehavioralPatternsDetector';
    import ReverseImageSearch from './components/tools/ReverseImageSearch';
    import CredentialBreachChecker from './components/tools/CredentialBreachChecker';
    import ReportScamPage from './components/ReportScamPage';
    import CommunityForumPage from './components/CommunityForumPage';
    import BadgesAndRewardsPage from './components/BadgesAndRewardsPage';
    import LanguagesPage from './components/LanguagesPage';
    import LearningCenterPage from './components/LearningCenterPage';
    import ScamMapPage from './components/ScamMapPage';
    import BrowserExtensionPage from './components/BrowserExtensionPage';
    import HomePage from './components/HomePage';
    import CyberScamNewsPage from './components/CyberScamNewsPage';
    import AiAssistant from './components/AiAssistant';

    function App() {
      const [isDarkMode, setIsDarkMode] = useState(true);
      const [searchQuery, setSearchQuery] = useState('');
      const [activeTab, setActiveTab] = useState('tools');
      const navigate = useNavigate();
      const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
      const [name, setName] = useState('');
      const [signUpUsername, setSignUpUsername] = useState('');
      const [signUpPassword, setSignUpPassword] = useState('');

      const tools = [
        { id: 1, name: 'AI Text Message Checker', icon: MessageSquare, colorClass: 'bg-blue-500', path: '/text-checker' },
        { id: 2, name: 'AI Image Analysis', icon: Image, colorClass: 'bg-purple-500', path: '/image-analysis' },
        { id: 3, name: 'AI Email Checker', icon: Mail, colorClass: 'bg-amber-500', path: '/email-checker' },
        { id: 4, name: 'AI Website Checker', icon: Globe, colorClass: 'bg-emerald-500', path: '/website-checker' },
        { id: 5, name: 'AI Phone Number Checker', icon: Phone, colorClass: 'bg-rose-500', path: '/phone-number-checker' },
        { id: 6, name: 'AI App Checker', icon: Layout, colorClass: 'bg-indigo-500', path: '/app-checker' },
        { id: 7, name: 'AI Document Checker', icon: FileText, colorClass: 'bg-cyan-500', path: '/document-checker' },
        { id: 8, name: 'AI Social Media Profile Checker', icon: Users, colorClass: 'bg-fuchsia-500', path: '/social-media-checker' },
        { id: 9, name: 'AI Shopping Site Validator', icon: ShoppingBag, colorClass: 'bg-pink-500', path: '/shopping-site-checker' },
        { id: 10, name: 'AI Crypto Wallet Address Checker', icon: Wallet, colorClass: 'bg-orange-500', path: '/crypto-wallet-checker' },
        { id: 11, name: 'AI Job Offer Checker', icon: Briefcase, colorClass: 'bg-teal-500', path: '/job-offer-checker' },
        { id: 12, name: 'AI QR Code Scanner', icon: ScanLine, colorClass: 'bg-violet-500', path: '/qr-code-scanner' },
        { id: 13, name: 'AI Voice Call Analyzer', icon: Mic, colorClass: 'bg-red-500', path: '/voice-call-analyzer' },
        { id: 14, name: 'AI Behavioral Patterns Detector', icon: Brain, colorClass: 'bg-lime-500', path: '/behavioral-patterns-detector' },
        { id: 15, name: 'AI Invoice Checker', icon: FileText as FileInvoice, colorClass: 'bg-sky-500', path: '/invoice-checker' },
        { id: 16, name: 'AI Malware Detection', icon: Shield as ShieldIcon, colorClass: 'bg-yellow-500', path: '/malware-detection' },
        { id: 17, name: 'Reverse Image Search', icon: ImageOff, colorClass: 'bg-blue-400', path: '/reverse-image-search' },
        { id: 18, name: 'Credential Breach Checker', icon: Key, colorClass: 'bg-purple-400', path: '/credential-breach-checker' }
      ];

      const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const handleToolClick = (toolName: string, path: string) => {
        navigate(path);
      };

      const handleSignInClick = () => {
        setIsSignInModalOpen(true);
      };

      const handleSignInModalClose = () => {
        setIsSignInModalOpen(false);
        setUsername('');
        setPassword('');
      };

      const handleSignInSubmit = () => {
        // Simulate authentication
        console.log('Signing in with:', { username, password });
        setIsSignInModalOpen(false);
        setUsername('');
        setPassword('');
      };

      const handleSignUpClick = () => {
        setIsSignUpModalOpen(true);
      };

      const handleSignUpModalClose = () => {
        setIsSignUpModalOpen(false);
        setName('');
        setSignUpUsername('');
        setSignUpPassword('');
      };

      const handleSignUpSubmit = () => {
        // Simulate user creation
        console.log('Signing up with:', { name, signUpUsername, signUpPassword });
        setIsSignUpModalOpen(false);
        setName('');
        setSignUpUsername('');
        setSignUpPassword('');
      };

      const handleReportScamClick = () => {
        navigate('/report-scam');
      };

      const handleCommunityForumClick = () => {
        navigate('/community-forum');
      };

      const handleBadgesAndRewardsClick = () => {
        navigate('/badges-and-rewards');
      };

      const handleLanguageClick = () => {
        navigate('/languages');
      };

      const handleBrowserExtensionClick = () => {
        navigate('/browser-extension');
      };

      const handleHomeClick = () => {
        navigate('/');
      };

      const handleAiAssistantClick = () => {
        navigate('/ai-assistant');
      };

      const renderDashboard = () => (
        <div className="bg-[#1e213a] rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Recent Scans</h3>
              <div className="text-2xl text-blue-400">24</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Threats Detected</h3>
              <div className="text-2xl text-red-400">7</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Security Score</h3>
              <div className="text-2xl text-green-400">85%</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Active Alerts</h3>
              <div className="text-2xl text-yellow-400">3</div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-xl font-semibold mb-4">Types of Scams Detected</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Phishing</li>
              <li>Malware</li>
              <li>Social Engineering</li>
              <li>Financial Fraud</li>
              <li>Identity Theft</li>
              <li>Ransomware</li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-xl font-semibold mb-4">Indian Cyber Crime Laws</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Information Technology Act, 2000</li>
              <li>Indian Penal Code, 1860 (relevant sections)</li>
              <li>The Prevention of Money Laundering Act, 2002</li>
              <li>The Copyright Act, 1957</li>
              <li>The Trademarks Act, 1999</li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-xl font-semibold mb-4">Recent Cyber Scams</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Fake job offers on social media</li>
              <li>Cryptocurrency investment scams</li>
              <li>Phishing emails targeting bank customers</li>
              <li>Ransomware attacks on small businesses</li>
              <li>Identity theft through data breaches</li>
            </ul>
          </div>
        </div>
      );

      const renderMap = () => (
        <div className="bg-[#1e213a] rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl font-semibold">Real-Time Scam Map</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">All Types</button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">Text Scams</button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">Job Scams</button>
            </div>
          </div>
          <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center">
            <Map className="h-12 w-12 text-gray-400" />
            <span className="text-gray-400 ml-2">Interactive Map Coming Soon</span>
          </div>
        </div>
      );

      const renderLearningCenter = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e213a] rounded-lg p-6">
            <Video className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Video Tutorials</h3>
            <p className="text-gray-400">Learn through our comprehensive video guides</p>
          </div>
          <div className="bg-[#1e213a] rounded-lg p-6">
            <Trophy className="h-8 w-8 text-yellow-500 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Security Quizzes</h3>
            <p className="text-gray-400">Test your knowledge and earn badges</p>
          </div>
          <div className="bg-[#1e213a] rounded-lg p-6">
            <Database className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Scam Database</h3>
            <p className="text-gray-400">Browse our extensive collection of known scams</p>
          </div>
        </div>
      );

      return (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-[#1e213a] text-gray-300 p-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mb-8">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold text-white">AdShield</span>
            </div>
            
            <a href="#" 
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'dashboard' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Dashboard</span>
            </a>
            
            <a href="#"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'tools' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              <AlertTriangle className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">AI Scam Detection Tools</span>
            </a>
            
            <a href="#"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'map' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <Map className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Scam Map</span>
            </a>
            
            <a href="#"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'learn' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('learn')}
            >
              <BookOpenCheck className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Learning Center</span>
            </a>
            
            <a href="#" onClick={handleReportScamClick} className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
              <Flag className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Report Scams</span>
            </a>
            
            <a href="#" onClick={handleCommunityForumClick} className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
              <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Community Forum</span>
            </a>
            
            <a href="#" onClick={handleBadgesAndRewardsClick} className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
              <Award className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Badges & Rewards</span>
            </a>

            <div className="mt-auto pt-4 border-t border-gray-700">
              <a href="#" onClick={handleLanguageClick} className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
                <Languages className="h-5 w-5 text-gray-400 group-hover:text-white" />
                <span className="group-hover:text-white">Language</span>
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-400 group-hover:text-white" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                )}
                <span className="group-hover:text-white">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </aside>

          <div className="flex-1">
            {/* Navigation */}
            <nav className="bg-[#1a237e] text-white p-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a href="#" onClick={handleHomeClick} className="hover:text-gray-200">Home</a>
                  <a href="#" onClick={() => navigate('/cyber-scam-news')} className="hover:text-gray-200">News</a>
                  <a href="#" className="hover:text-gray-200">Resources</a>
                  <a href="#" className="hover:text-gray-200">API</a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search tools..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-gray-800 text-white pl-10 pr-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  
                  <button
                    onClick={handleSignInClick}
                    className="bg-white text-purple-700 px-4 py-1 rounded-md hover:bg-gray-100"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleSignUpClick}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 min-h-screen p-8">
              <div className="max-w-7xl mx-auto">
                <Routes>
                  <Route path="/text-analysis" element={<TextAnalysisPage />} />
                  <Route path="/image-analysis" element={<ImageAnalysisPage />} />
                  <Route path="/text-checker" element={<TextChecker />} />
                  <Route path="/email-checker" element={<EmailChecker />} />
                  <Route path="/website-checker" element={<WebsiteChecker />} />
                  <Route path="/phone-number-checker" element={<PhoneNumberChecker />} />
                  <Route path="/app-checker" element={<AppChecker />} />
                  <Route path="/document-checker" element={<DocumentChecker />} />
                  <Route path="/social-media-checker" element={<SocialMediaProfileChecker />} />
                  <Route path="/shopping-site-checker" element={<ShoppingSiteValidator />} />
                  <Route path="/crypto-wallet-checker" element={<CryptoWalletChecker />} />
                  <Route path="/job-offer-checker" element={<JobOfferChecker />} />
                  <Route path="/qr-code-scanner" element={<QrCodeScanner />} />
                  <Route path="/voice-call-analyzer" element={<VoiceCallAnalyzer />} />
                  <Route path="/malware-detection" element={<MalwareDetector />} />
                  <Route path="/invoice-checker" element={<InvoiceChecker />} />
                  <Route path="/behavioral-patterns-detector" element={<BehavioralPatternsDetector />} />
                  <Route path="/reverse-image-search" element={<ReverseImageSearch />} />
                  <Route path="/credential-breach-checker" element={<CredentialBreachChecker />} />
                  <Route path="/report-scam" element={<ReportScamPage />} />
                  <Route path="/community-forum" element={<CommunityForumPage />} />
                  <Route path="/badges-and-rewards" element={<BadgesAndRewardsPage />} />
                  <Route path="/languages" element={<LanguagesPage />} />
                  <Route path="/scam-map" element={<ScamMapPage />} />
                  <Route path="/browser-extension" element={<BrowserExtensionPage />} />
                  <Route path="/ai-assistant" element={<AiAssistant />} />
                  <Route path="/" element={
                    <>
                      {activeTab === 'tools' && (
                        <>
                          <h1 className="text-white text-3xl font-bold mb-8">
                            Scam Detection Tools (Powered by AI)
                          </h1>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTools.map((tool) => (
                              <div 
                                key={tool.id} 
                                onClick={() => handleToolClick(tool.name, tool.path)}
                                className="bg-[#1e213a] rounded-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                              >
                                <div className={`${tool.colorClass} w-24 h-24 rounded-full flex items-center justify-center mb-6`}>
                                  <tool.icon className="h-12 w-12 text-white" />
                                </div>
                                <h2 className="text-white text-xl font-semibold">{tool.name}</h2>
                              </div>
                            ))}
                          </div>

                          {/* Integration Section */}
                          <div className="mb-12 mt-16">
                            <h2 className="text-white text-2xl font-bold mb-6">Integrations & Extensions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="bg-[#1e213a] rounded-lg p-6">
                                <Wrench className="h-8 w-8 text-blue-500 mb-4" />
                                <h3 className="text-white text-lg font-semibold mb-2">Browser Extension</h3>
                                <p className="text-gray-300">Protect yourself while browsing with our extension</p>
                              </div>
                              <div className="bg-[#1e213a] rounded-lg p-6">
                                <Zap className="h-8 w-8 text-yellow-500 mb-4" />
                                <h3 className="text-white text-lg font-semibold mb-2">API Access</h3>
                                <p className="text-gray-300">Integrate our tools into your platform</p>
                              </div>
                              <div className="bg-[#1e213a] rounded-lg p-6">
                                <BrainCircuit className="h-8 w-8 text-purple-500 mb-4" />
                                <h3 className="text-white text-lg font-semibold mb-2">ML Feedback</h3>
                                <p className="text-gray-300">Help improve our AI detection systems</p>
                              </div>
                            </div>
                          </div>

                          {/* Analytics Section */}
                          <div className="mb-12">
                            <h2 className="text-white text-2xl font-bold mb-6">Platform Analytics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                              <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                                <Activity className="h-8 w-8 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white">99.9%</div>
                                <div className="text-gray-300">Detection Rate</div>
                              </div>
                              <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white">1M+</div>
                                <div className="text-gray-300">Protected Users</div>
                              </div>
                              <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                                <MessageCircleWarning className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white">50K+</div>
                                <div className="text-gray-300">Scams Reported</div>
                              </div>
                              <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                                <HandshakeIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white">100+</div>
                                <div className="text-gray-300">Partner Companies</div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {activeTab === 'dashboard' && renderDashboard()}
                      {activeTab === 'map' && renderMap()}
                      {activeTab === 'learn' && renderLearningCenter()}
                    </>
                  } />
                </Routes>

                {/* AI Assistant */}
                <div className="fixed bottom-8 right-8 z-50">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2">
                    <Bot className="h-6 w-6" />
                    <span>AI Assistant</span>
                  </button>
                </div>
                {isSignInModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#1e213a] p-8 rounded-lg shadow-lg max-w-md w-full">
                      <h2 className="text-white text-2xl font-semibold mb-6">Sign In</h2>
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-800 text-white p-2 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={handleSignInModalClose}
                          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSignInSubmit}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isSignUpModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#1e213a] p-8 rounded-lg shadow-lg max-w-md w-full">
                      <h2 className="text-white text-2xl font-semibold mb-6">Sign Up</h2>
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Username"
                        value={signUpUsername}
                        onChange={(e) => setSignUpUsername(e.target.value)}
                        className="w-full bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        className="w-full bg-gray-800 text-white p-2 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={handleSignUpModalClose}
                          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSignUpSubmit}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      );
    }

    export default App;
