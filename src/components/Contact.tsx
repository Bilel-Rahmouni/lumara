import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from 'react';
import hr from '../assets/hr.jpg';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgjrqyd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: t("contact.form.success"),
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: t("contact.form.error"),
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information and Form */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <FaPhone
                    size={24}
                    color="white"
                    className="bg-sky-400 rounded-full p-1"
                  />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.phone')}</h3>
                    <p>+36 30 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope
                    size={24}
                    color="white"
                    className="bg-sky-400 rounded-full p-1"
                  />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.email')}</h3>
                    <p>info@lumara.hu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt
                    size={24}
                    color="white"
                    className="bg-sky-400 rounded-full p-1"
                  />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.address')}</h3>
                    <p>1234 Budapest, Hungary</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaClock
                    size={24}
                    color="white"
                    className="bg-sky-400 rounded-full p-1"
                  />
                  <div>
                    <h3 className="font-semibold">{t('contact.info.hoursTitle')}</h3>
                    <p>{t('contact.info.hours.monday')} - {t('contact.info.hours.friday')}: 9:00 - 18:00</p>
                    <p>{t('contact.info.hours.saturday')}: 9:00 - 14:00</p>
                    <p>{t('contact.info.hours.sunday')}: {t('contact.info.hours.closed')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.email')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.phone')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.message')}
                  />
                </div>
                {formStatus && (
                  <div
                    className={`p-4 rounded ${
                      formStatus.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
                    formStatus ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {formStatus ? 'Sending...' : t('contact.form.submit')}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-full hidden lg:block max-w-[90%] mx-auto"
          >
            <img 
              src={hr} 
              alt="Contact" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 