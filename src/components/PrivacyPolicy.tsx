import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const renderList = (key: string) => {
    const items = t(key, { returnObjects: true }) as string[];
    return items.map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ));
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16" key={`${i18n.language}-${forceUpdate}`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('privacyPolicy.title')}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">{t('privacyPolicy.lastUpdated')}: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.sections.introduction.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.introduction.content')}
            </p>
            <p className="text-gray-600">
              {t('privacyPolicy.sections.introduction.consent')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.sections.informationCollection.title')}</h2>
            <h3 className="text-xl font-medium text-gray-900 mb-2">{t('privacyPolicy.sections.informationCollection.subtitle')}</h3>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.informationCollection.content')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              {renderList('privacyPolicy.sections.informationCollection.list')}
            </ul>
            <p className="text-gray-600">
              {t('privacyPolicy.sections.informationCollection.additionalInfo')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.sections.informationUsage.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.informationUsage.content')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              {renderList('privacyPolicy.sections.informationUsage.list')}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.sections.informationSharing.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.informationSharing.content')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              {renderList('privacyPolicy.sections.informationSharing.list')}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.sections.dataSecurity.title')}</h2>
            <p className="text-gray-600">
              {t('privacyPolicy.sections.dataSecurity.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.sections.userRights.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('privacyPolicy.sections.userRights.content')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              {renderList('privacyPolicy.sections.userRights.list')}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.sections.contact.title')}</h2>
            <p className="text-gray-600">
              {t('privacyPolicy.sections.contact.content')}
            </p>
            <p className="text-gray-600 mt-2">
              {t('privacyPolicy.sections.contact.email')}<br />
              {t('privacyPolicy.sections.contact.phone')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 