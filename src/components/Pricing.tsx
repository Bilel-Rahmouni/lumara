import { useEffect, useState } from "react"; 
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { PiRug, PiToiletLight, PiDogLight } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKitchen } from "react-icons/md";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
  const mainPrice = 3500; // Price per hour
  
  // Define frequency options with their multipliers
  const frequencyOptions = [
    { id: 1, multiplier: 1.0 },    // Weekly
    { id: 2, multiplier: 1.0 },   // Biweekly
    { id: 3, multiplier: 1.25 },   // Monthly
    { id: 4, multiplier: 1.25 }    // One-time
  ];

  const [selectedFrequency, setSelectedFrequency] = useState(1); 
  const [price, setPrice] = useState(0);
  const [firstTimePrice, setFirstTimePrice] = useState(0);
  
  // Surface area (minutes per 10m²)
  const [surface, setSurface] = useState(0);
  const surfaceMinutesPer10m2 = 15; // 15 minutes per 10m²

  // Bathrooms (minutes per bathroom)
  const [bathrooms, setBathrooms] = useState(1);
  const bathroomMinutes = 15; // 15 minutes per bathroom

  // Pets (additional minutes)
  const [pets, setPets] = useState(0);
  const petMinutes = 30; // 30 minutes for pets

  // Additional options (minutes)
  const [fridge, setFridge] = useState(0);
  const [microwave, setMicrowave] = useState(0);
  const [oven, setOven] = useState(0);
  const [kitchenHood, setKitchenHood] = useState(0);
  const [surfaceRugs, setSurfaceRugs] = useState(0);

  const fridgeMinutes = 30;
  const microwaveMinutes = 30;
  const ovenMinutes = 120;
  const hoodMinutes = 30;
  const rugMinutesPer10m2 = 10; // 10 minutes per 10m² of rugs

  useEffect(() => {
    // Calculate total minutes based on all options
    const surfaceMinutes = (surface / 10) * surfaceMinutesPer10m2;
    const bathroomTotalMinutes = bathrooms * bathroomMinutes;
    const petTotalMinutes = pets * petMinutes;
    const rugTotalMinutes = (surfaceRugs / 10) * rugMinutesPer10m2;
    
    const totalMinutes = 
      surfaceMinutes +
      bathroomTotalMinutes +
      petTotalMinutes +
      fridge +
      microwave +
      oven +
      kitchenHood +
      rugTotalMinutes;

    // Calculate price based on minutes and frequency
    let calculatedPrice = (totalMinutes / 60) * mainPrice;
    
    // Ensure minimum price of 3500 ft for areas between 0 and 30m²
    if (surface <= 30) {
      calculatedPrice = Math.max(3500, calculatedPrice);
    }
    
    // Apply frequency multiplier
    const selectedOption = frequencyOptions.find(option => option.id === selectedFrequency);
    if (selectedOption) {
      calculatedPrice *= selectedOption.multiplier;
    }

    setPrice(Number(calculatedPrice.toFixed(2)));
    
    // Calculate first-time price with 30% discount
    const firstTimeCalculatedPrice = calculatedPrice * 0.70;
    setFirstTimePrice(Number(firstTimeCalculatedPrice.toFixed(2)));
  }, [
    surface,
    bathrooms,
    pets,
    fridge,
    microwave,
    oven,
    kitchenHood,
    surfaceRugs,
    selectedFrequency
  ]);

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFrequency(Number(event.target.value));
  };

  return (
    <div className="mb-10 mt-32 sm:mt-52 pt-12 sm:pt-24 px-4 md:px-8 lg:px-16 flex flex-col items-center" id="pricing">
      <h1 className="text-3xl sm:text-4xl mb-4 sm:mb-8 text-center font-black">
        {t('pricing.title')}
      </h1>
      <h5 className="text-lg sm:text-xl mb-6 sm:mb-8 text-center font-medium">
        {t('pricing.subtitle')}
      </h5>
      <div className="flex flex-col md:flex-row items-start justify-around w-full gap-6 sm:gap-8">
        {/* Left Side - Form Inputs */}
        <div className="flex flex-col w-full md:w-2/3 space-y-4 sm:space-y-6">
          {/* Frequency of Cleaning */}
          <div>
            <div className="text-md flex items-center font-semibold mb-3 sm:mb-4">
              <CiCalendar
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              {t('pricing.frequency.title')}
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              {frequencyOptions.map((option) => (
                <label key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    value={option.id}
                    className="mr-2"
                    checked={selectedFrequency === option.id}
                    onChange={handleFrequencyChange}
                  />
                  {t(`pricing.frequency.${option.id === 1 ? 'weekly' : 
                      option.id === 2 ? 'biweekly' : 
                      option.id === 3 ? 'monthly' : 'oneTime'}`)}
                </label>
              ))}
            </div>
          </div>

          {/* Surface Area */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <BsHouse
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              {t('pricing.surface.title')}
            </div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={0}
                value={surface}
                min={0}
                max={300}
                step={10}
                onChange={(e) => setSurface(Number(e))}
              />
              <p className="ml-4">{surface}{t('pricing.surface.unit')}</p>
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <PiToiletLight
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              {t('pricing.bathrooms.title')}
            </div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={1}
                min={1}
                max={5}
                step={1}
                onChange={(e) => setBathrooms(Number(e))}
              />
              <p className="ml-4">{bathrooms} {t('pricing.bathrooms.unit')}</p>
            </div>
          </div>

          {/* Surface Rugs */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <PiRug
               size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              {t('pricing.rugs.title')}
            </div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={0}
                min={0}
                max={surface}
                step={10}
                onChange={(e) => setSurfaceRugs(Number(e))}
              />
              <p className="ml-4">{surfaceRugs}{t('pricing.rugs.unit')}</p>
            </div>
          </div>

          {/* Pets */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <PiDogLight
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              {t('pricing.pets.title')}
            </div>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  checked={pets === 1}
                  onChange={() => setPets(1)}
                />
                {t('pricing.pets.yes')}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  checked={pets === 0}
                  onChange={() => setPets(0)}
                />
                {t('pricing.pets.no')}
              </label>
            </div>
          </div>

          {/* Options */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <MdOutlineKitchen
               size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              {t('pricing.options.title')}
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setFridge(e.target.checked ? fridgeMinutes : 0)}
                />
                {t('pricing.options.fridge')}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setMicrowave(e.target.checked ? microwaveMinutes : 0)}
                />
                {t('pricing.options.microwave')}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setOven(e.target.checked ? ovenMinutes : 0)}
                />
                {t('pricing.options.oven')}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setKitchenHood(e.target.checked ? hoodMinutes : 0)}
                />
                {t('pricing.options.hood')}
              </label>
            </div>
          </div>
        </div>

        {/* Right Side - Price Summary */}
        <div className="w-full md:w-1/3 sticky top-24 sm:top-32 flex flex-col items-center space-y-4 sm:space-y-6 p-4 sm:p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold">{t('pricing.priceSummary')}</h2>
          <div className="text-base sm:text-lg mb-4 w-full">
            <div className="flex justify-between mt-2">
              <span>{t('pricing.price')}:</span>
              <span>{price} ft</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>{t('pricing.firstTimeDiscount')}:</span>
              <span>{firstTimePrice} ft</span>
            </div>
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 text-sm font-semibold text-center cursor-pointer"
          >
            {t('pricing.getDiscount')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;