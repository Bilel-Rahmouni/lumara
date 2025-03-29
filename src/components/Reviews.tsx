import React from 'react';
import { useTranslation } from 'react-i18next';

const Reviews: React.FC = () => {
  const { t, i18n } = useTranslation();

  const reviews = {
    hu: [
      {
        id: 1,
        name: "Kovács János",
        rating: 5,
        text: "Kiváló szolgáltatás! A takarítók professzionálisak és alaposak voltak. Az egész lakás ragyogott a tisztaságtól.",
        date: "2024.03.15"
      },
      {
        id: 2,
        name: "Nagy Éva",
        rating: 5,
        text: "Nagyon elégedett vagyok a szolgáltatással. Pontosak, megbízhatóak és az áruk is korrekt.",
        date: "2024.03.10"
      },
      {
        id: 3,
        name: "Szabó Péter",
        rating: 5,
        text: "A takarítók nagyon kedvesek és szakértőek voltak. Minden apró részletre odafigyeltek.",
        date: "2024.03.05"
      },
      {
        id: 4,
        name: "Tóth Anna",
        rating: 5,
        text: "Rendkívül elégedett vagyok! A szolgáltatás minősége kivételes, és a kommunikáció is zökkenőmentes volt.",
        date: "2024.02.28"
      },
      {
        id: 5,
        name: "Kiss Béla",
        rating: 5,
        text: "Professzionális csapat, kiváló munkát végeztek. Mindenképpen ajánlom a szolgáltatásukat!",
        date: "2024.02.20"
      },
      {
        id: 6,
        name: "Balogh Zsuzsa",
        rating: 5,
        text: "A takarítók rendkívül precízek és hatékonyak voltak. A lakás tökéletesen tiszta lett, és a szolgáltatás gyors volt.",
        date: "2024.02.15"
      }
    ],
    en: [
      {
        id: 1,
        name: "Kovács János",
        rating: 5,
        text: "Excellent service! The cleaners were professional and thorough. The entire apartment was sparkling clean.",
        date: "2024.03.15"
      },
      {
        id: 2,
        name: "Nagy Éva",
        rating: 5,
        text: "Very satisfied with the service. They are punctual, reliable, and the pricing is fair.",
        date: "2024.03.10"
      },
      {
        id: 3,
        name: "Szabó Péter",
        rating: 5,
        text: "The cleaners were very friendly and expert. They paid attention to every small detail.",
        date: "2024.03.05"
      },
      {
        id: 4,
        name: "Tóth Anna",
        rating: 5,
        text: "Extremely satisfied! The service quality is exceptional, and communication was smooth.",
        date: "2024.02.28"
      },
      {
        id: 5,
        name: "Kiss Béla",
        rating: 5,
        text: "Professional team, excellent work. I definitely recommend their service!",
        date: "2024.02.20"
      },
      {
        id: 6,
        name: "Balogh Zsuzsa",
        rating: 5,
        text: "The cleaners were extremely precise and efficient. The apartment was perfectly clean, and the service was quick.",
        date: "2024.02.15"
      }
    ],
    fr: [
      {
        id: 1,
        name: "Kovács János",
        rating: 5,
        text: "Service excellent ! Les nettoyeurs étaient professionnels et minutieux. L'appartement entier brillait de propreté.",
        date: "2024.03.15"
      },
      {
        id: 2,
        name: "Nagy Éva",
        rating: 5,
        text: "Très satisfaite du service. Ils sont ponctuels, fiables et les prix sont équitables.",
        date: "2024.03.10"
      },
      {
        id: 3,
        name: "Szabó Péter",
        rating: 5,
        text: "Les nettoyeurs étaient très sympathiques et experts. Ils ont fait attention à chaque petit détail.",
        date: "2024.03.05"
      },
      {
        id: 4,
        name: "Tóth Anna",
        rating: 5,
        text: "Extrêmement satisfaite ! La qualité du service est exceptionnelle et la communication était fluide.",
        date: "2024.02.28"
      },
      {
        id: 5,
        name: "Kiss Béla",
        rating: 5,
        text: "Équipe professionnelle, travail excellent. Je recommande vivement leur service !",
        date: "2024.02.20"
      },
      {
        id: 6,
        name: "Balogh Zsuzsa",
        rating: 5,
        text: "Les nettoyeurs étaient extrêmement précis et efficaces. L'appartement était parfaitement propre, et le service était rapide.",
        date: "2024.02.15"
      }
    ],
    it: [
      {
        id: 1,
        name: "Kovács János",
        rating: 5,
        text: "Servizio eccellente! I pulitori erano professionali e accurati. L'intero appartamento brillava di pulito.",
        date: "2024.03.15"
      },
      {
        id: 2,
        name: "Nagy Éva",
        rating: 5,
        text: "Molto soddisfatta del servizio. Sono puntuali, affidabili e i prezzi sono equi.",
        date: "2024.03.10"
      },
      {
        id: 3,
        name: "Szabó Péter",
        rating: 5,
        text: "I pulitori erano molto gentili ed esperti. Hanno prestato attenzione a ogni piccolo dettaglio.",
        date: "2024.03.05"
      },
      {
        id: 4,
        name: "Tóth Anna",
        rating: 5,
        text: "Estremamente soddisfatta! La qualità del servizio è eccezionale e la comunicazione è stata fluida.",
        date: "2024.02.28"
      },
      {
        id: 5,
        name: "Kiss Béla",
        rating: 5,
        text: "Team professionale, lavoro eccellente. Consiglio vivamente il loro servizio!",
        date: "2024.02.20"
      },
      {
        id: 6,
        name: "Balogh Zsuzsa",
        rating: 5,
        text: "I pulitori erano estremamente precisi ed efficienti. L'appartamento era perfettamente pulito e il servizio è stato rapido.",
        date: "2024.02.15"
      }
    ],
    de: [
      {
        id: 1,
        name: "Kovács János",
        rating: 5,
        text: "Ausgezeichneter Service! Die Reinigungskräfte waren professionell und gründlich. Die gesamte Wohnung strahlte vor Sauberkeit.",
        date: "2024.03.15"
      },
      {
        id: 2,
        name: "Nagy Éva",
        rating: 5,
        text: "Sehr zufrieden mit dem Service. Sie sind pünktlich, zuverlässig und die Preise sind fair.",
        date: "2024.03.10"
      },
      {
        id: 3,
        name: "Szabó Péter",
        rating: 5,
        text: "Die Reinigungskräfte waren sehr freundlich und kompetent. Sie haben auf jedes kleine Detail geachtet.",
        date: "2024.03.05"
      },
      {
        id: 4,
        name: "Tóth Anna",
        rating: 5,
        text: "Äußerst zufrieden! Die Servicequalität ist außergewöhnlich und die Kommunikation war reibungslos.",
        date: "2024.02.28"
      },
      {
        id: 5,
        name: "Kiss Béla",
        rating: 5,
        text: "Professionelles Team, ausgezeichnete Arbeit. Ich empfehle ihren Service auf jeden Fall!",
        date: "2024.02.20"
      },
      {
        id: 6,
        name: "Balogh Zsuzsa",
        rating: 5,
        text: "Die Reinigungskräfte waren äußerst präzise und effizient. Die Wohnung war perfekt sauber und der Service war schnell.",
        date: "2024.02.15"
      }
    ],
    es: [
      {
        id: 1,
        name: "Kovács János",
        rating: 5,
        text: "¡Servicio excelente! Los limpiadores fueron profesionales y minuciosos. Todo el apartamento brillaba de limpieza.",
        date: "2024.03.15"
      },
      {
        id: 2,
        name: "Nagy Éva",
        rating: 5,
        text: "Muy satisfecha con el servicio. Son puntuales, confiables y los precios son justos.",
        date: "2024.03.10"
      },
      {
        id: 3,
        name: "Szabó Péter",
        rating: 5,
        text: "Los limpiadores fueron muy amables y expertos. Prestaron atención a cada pequeño detalle.",
        date: "2024.03.05"
      },
      {
        id: 4,
        name: "Tóth Anna",
        rating: 5,
        text: "¡Extremadamente satisfecha! La calidad del servicio es excepcional y la comunicación fue fluida.",
        date: "2024.02.28"
      },
      {
        id: 5,
        name: "Kiss Béla",
        rating: 5,
        text: "Equipo profesional, trabajo excelente. ¡Definitivamente recomiendo su servicio!",
        date: "2024.02.20"
      },
      {
        id: 6,
        name: "Balogh Zsuzsa",
        rating: 5,
        text: "Los limpiadores fueron extremadamente precisos y eficientes. El apartamento quedó perfectamente limpio y el servicio fue rápido.",
        date: "2024.02.15"
      }
    ]
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const currentReviews = reviews[i18n.language as keyof typeof reviews] || reviews.en;

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('reviews.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-600">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-500">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => window.location.href = '#contact'}
          >
            {t('reviews.cta')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 