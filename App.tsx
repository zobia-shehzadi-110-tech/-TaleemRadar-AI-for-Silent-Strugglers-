import React, { useState, useCallback } from 'react';
import { Language, ClassAnalysis } from './types';
import { LOCALIZED_STRINGS } from './constants';
import { analyzeStudentData } from './services/geminiService';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import DataInputForm from './components/DataInputForm';
import AnalysisReportDisplay from './components/AnalysisReportDisplay';


export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentStage, setCurrentStage] = useState<'input' | 'loading' | 'results'>('input');
  const [analysisResult, setAnalysisResult] = useState<ClassAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const currentStrings = LOCALIZED_STRINGS[language];
  const appFont = language === 'ur' ? 'font-urdu' : 'font-sans';

  const handleDataSubmit = useCallback(async (subject: string, csvData: string) => {
      setCurrentStage('loading');
      setError(null);
      try {
          const result = await analyzeStudentData(subject, csvData, language);
          setAnalysisResult(result);
          setCurrentStage('results');
      } catch (err) {
          console.error(err);
          setError(currentStrings.errorMessage);
          setCurrentStage('input');
      }
  }, [language, currentStrings.errorMessage]);


  const handleReset = () => {
    setCurrentStage('input');
    setAnalysisResult(null);
    setError(null);
  };
  
  const renderContent = () => {
    switch (currentStage) {
      case 'input':
        return <DataInputForm onSubmit={handleDataSubmit} language={language} />;
      case 'loading':
        return (
          <div className="flex flex-col items-center justify-center h-64">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-slate-600">{currentStrings.loadingMessage}</p>
          </div>
        );
      case 'results':
        if (analysisResult) {
            return <AnalysisReportDisplay result={analysisResult} onReset={handleReset} language={language} />;
        }
        return null;
      default:
        return <DataInputForm onSubmit={handleDataSubmit} language={language} />;
    }
  }

  return (
    <div dir={language === 'ur' ? 'rtl' : 'ltr'} className={`${appFont} min-h-screen bg-slate-100 text-slate-800 transition-all duration-300`}>
      <Header language={language} setLanguage={setLanguage} />
      <main className="container mx-auto p-4 md:p-8">
        {error && (
            <div className="text-center my-8 p-6 bg-red-100 border border-red-300 rounded-lg max-w-lg mx-auto">
            <p className="text-red-700 font-semibold">{error}</p>
            <button
                onClick={handleReset}
                className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
                {currentStrings.tryAgainButton}
            </button>
        </div>
        )}
        {!error && renderContent()}
      </main>
    </div>
  );
}