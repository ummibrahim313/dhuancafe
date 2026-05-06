import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Check, MessageCircle } from 'lucide-react';

const ChaiCustomizer = () => {
  const [baseSelection, setBaseSelection] = useState('Kashmiri Chai');
  const [milkSelection, setMilkSelection] = useState('Full Fat');
  const [sweetnessSelection, setSweetnessSelection] = useState('Medium');
  const [addOns, setAddOns] = useState([]);

  // Base prices
  const basePrices = {
    'Kashmiri Chai': 250,
    'Doodh Patti': 180,
    'Espresso': 150,
    'Cold Brew': 350
  };

  // Add-on prices
  const addonPrices = {
    'Cardamom': 20,
    'Ginger': 15,
    'Cinnamon': 25,
    'Saffron': 50
  };

  // Calculate total price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = basePrices[baseSelection] || 0;
    addOns.forEach(addon => {
      price += addonPrices[addon] || 0;
    });
    setTotalPrice(price);
  }, [baseSelection, addOns]);

  // Toggle add-on
  const toggleAddon = (addon) => {
    setAddOns(prev => 
      prev.includes(addon) 
        ? prev.filter(item => item !== addon)
        : [...prev, addon]
    );
  };

  // Generate live preview text
  const generatePreview = () => {
    const parts = [baseSelection];
    if (milkSelection !== 'No Milk') {
      parts.push(milkSelection + ' Milk');
    }
    parts.push(sweetnessSelection + ' Sweet');
    if (addOns.length > 0) {
      parts.push('+' + addOns.join(' + '));
    }
    return parts.join(' + ');
  };

  // WhatsApp order message
  const generateWhatsAppMessage = () => {
    const customization = generatePreview();
    const message = `Hello Dhuan Cafe! I'd like to order:\n\n${customization}\n\nPrice: Rs. ${totalPrice}\n\nPlease confirm availability and payment details.`;
    return `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
  };

  const baseOptions = ['Kashmiri Chai', 'Doodh Patti', 'Espresso', 'Cold Brew'];
  const milkOptions = ['Full Fat', 'Skimmed', 'Oat', 'No Milk'];
  const sweetnessOptions = ['None', 'Less', 'Medium', 'Extra'];
  const addonOptions = ['Cardamom', 'Ginger', 'Cinnamon', 'Saffron'];

  return (
    <section className="py-20 px-4 bg-chai-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-chai-dark mb-4 uppercase">
            BUILD YOUR PERFECT CUP
          </h2>
          <p className="text-chai-dark/80 text-lg font-body">
            Customize your chai or coffee exactly how you like it
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Customizer UI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {/* BASE Selection */}
            <div>
              <h3 className="font-heading text-lg font-bold text-chai-dark uppercase mb-4">BASE</h3>
              <div className="grid grid-cols-2 gap-3">
                {baseOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setBaseSelection(option)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      baseSelection === option
                        ? 'border-chai-main bg-chai-main text-white'
                        : 'border-chai-light/30 bg-white text-chai-dark hover:border-chai-light'
                    }`}
                  >
                    <div className="font-heading text-sm font-semibold uppercase">{option}</div>
                    <div className="text-xs mt-1">Rs. {basePrices[option]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* MILK Selection */}
            <div>
              <h3 className="font-heading text-lg font-bold text-chai-dark uppercase mb-4">MILK</h3>
              <div className="flex flex-wrap gap-2">
                {milkOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setMilkSelection(option)}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                      milkSelection === option
                        ? 'border-chai-main bg-chai-main text-white'
                        : 'border-chai-light/30 bg-white text-chai-dark hover:border-chai-light'
                    }`}
                  >
                    <span className="font-heading text-sm font-semibold uppercase">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SWEETNESS Selection */}
            <div>
              <h3 className="font-heading text-lg font-bold text-chai-dark uppercase mb-4">SWEETNESS</h3>
              <div className="flex gap-2">
                {sweetnessOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSweetnessSelection(option)}
                    className={`flex-1 py-3 rounded-lg border-2 transition-all duration-300 ${
                      sweetnessSelection === option
                        ? 'border-chai-main bg-chai-main text-white'
                        : 'border-chai-light/30 bg-white text-chai-dark hover:border-chai-light'
                    }`}
                  >
                    <span className="font-heading text-sm font-semibold uppercase">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ADD-ONS Selection */}
            <div>
              <h3 className="font-heading text-lg font-bold text-chai-dark uppercase mb-4">ADD-ONS</h3>
              <div className="flex flex-wrap gap-2">
                {addonOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleAddon(option)}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                      addOns.includes(option)
                        ? 'border-chai-main bg-chai-main text-white'
                        : 'border-chai-light/30 bg-white text-chai-dark hover:border-chai-light'
                    }`}
                  >
                    <span className="font-heading text-sm font-semibold uppercase">{option}</span>
                    {addOns.includes(option) && <Check className="w-4 h-4" />}
                    <span className="text-xs">+Rs. {addonPrices[option]}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Live Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Preview Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-chai-main/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-chai-main flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-chai-dark uppercase">Your Perfect Cup</h3>
              </div>
              
              <div className="bg-chai-bg rounded-xl p-6 mb-8 border border-chai-main/30">
                <p className="text-chai-dark font-body text-lg leading-relaxed text-center font-medium">
                  {generatePreview()}
                </p>
              </div>

              {/* Price Display */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-chai-main font-heading uppercase mb-2">
                  Rs. {totalPrice}
                </div>
                <div className="text-sm text-chai-dark/60 font-body uppercase tracking-wider">Total Price</div>
              </div>

              {/* WhatsApp Order Button */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-chai-main hover:bg-chai-dark text-white sm:text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg font-heading uppercase tracking-wide text-xs sm:text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-chai-bg rounded-xl p-4 sm:p-6 text-center border border-chai-main/20">
                <div className="text-chai-main font-bold text-lg sm:text-xl font-heading uppercase mb-1">100%</div>
                <div className="text-chai-dark/70 text-xs sm:text-sm font-body uppercase tracking-wider">Customizable</div>
              </div>
              <div className="bg-chai-bg rounded-xl p-4 sm:p-6 text-center border border-chai-main/20">
                <div className="text-chai-main font-bold text-lg sm:text-xl font-heading uppercase mb-1">5 MIN</div>
                <div className="text-chai-dark/70 text-xs sm:text-sm font-body uppercase tracking-wider">Prep Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChaiCustomizer;
