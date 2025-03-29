import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const renderQuestions = () => {
    try {
      // Get the questions array from translations
      const questions = t('faq.questions', { returnObjects: true });
      
      // Log the questions data for debugging
      console.log('FAQ questions:', questions);
      
      // Ensure questions is an array
      if (!Array.isArray(questions)) {
        console.error('FAQ questions is not an array:', questions);
        return null;
      }

      return questions.map((item: any) => (
        <div key={item.id} className="mb-4">
          <button
            className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            onClick={() => toggleQuestion(item.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
              <span className="text-gray-500">
                {openQuestionId === item.id ? '−' : '+'}
              </span>
            </div>
          </button>
          {openQuestionId === item.id && (
            <div className="mt-2 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 whitespace-pre-line">{item.answer}</p>
            </div>
          )}
        </div>
      ));
    } catch (error) {
      console.error('Error rendering FAQ questions:', error);
      return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">{t('faq.title')}</h2>
      <div className="space-y-4">
        {renderQuestions()}
      </div>
    </div>
  );
};

export default FAQ; 