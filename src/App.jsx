import React, { useEffect, useState, useRef } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Zap, Leaf, Wrench, Shield, Settings, Battery, Home, DollarSign } from 'lucide-react';
import BeatLoader from 'react-spinners/BeatLoader';

// Initialize EmailJS
emailjs.init("OEQub9r3E-RtTQ7SC");

const products = [
  { id: 1, name: 'Panel Solar 400W Mono', price: 299.99, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Panel Solar 450W Poly', price: 349.99, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Panel Solar 500W Bifacial', price: 449.99, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Inverter 3kW', price: 599.99, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Inverter 5kW', price: 799.99, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Bateria Litium 5kWh', price: 2499.99, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
];

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cnlkqwf', 'template_pn6hzqe', form.current, 'OEQub9r3E-RtTQ7SC')
      .then(
        () => {
          toast.success('Mesazhi u dërgua me sukses!');
        },
        (error) => {
          toast.error('Ndodhi një gabim. Ju lutem provoni përsëri.');
        },
      );
  };

  return (
    <div className="bg-gray-100 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 transition-colors duration-500">Na Kontaktoni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-500">Informacioni i Kontaktit</h3>
            <p className="text-gray-600 mb-4 transition-colors duration-500">Nëse keni ndonjë pyetje ose kërkesë, ju lutemi mos hezitoni të na kontaktoni duke përdorur formularin më poshtë ose informacionin e kontaktit të dhënë.</p>
            <p className="text-gray-600 mb-2 transition-colors duration-500"><strong>Adresa:</strong> Rruga e Dëshmorëve, Prishtinë, Kosovë</p>
            <p className="text-gray-600 mb-2 transition-colors duration-500"><strong>Telefoni:</strong> +383 44 123 456</p>
            <p className="text-gray-600 mb-2 transition-colors duration-500"><strong>Email:</strong> info@unisolar-ks.com</p>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-md transition-colors duration-500">
              <div className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Emri</label>
                  <input type="text" name="from_name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500" required />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Email</label>
                  <input type="email" name="from_email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500" required />
                </div>
                <div>
                  <label htmlFor="from_phone" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Numri i Telefonit</label>
                  <input type="text" name="from_phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Mesazhi</label>
                  <textarea name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500" required></textarea>
                </div>
                <input type="submit" value="Dërgo" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-500" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✕</button>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.price.toFixed(2)}€</p>
        <p className="text-gray-600">Specifikimet e produktit do të shfaqen këtu.</p>
        <button onClick={onClose} className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-500">Mbyll</button>
      </div>
    </div>
  );
};

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: '',
    lastName: '', 
    phone: '',
    email: '',
    city: '',
    address: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isCheckoutFormVisible, setIsCheckoutFormVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds
  }, []);

  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
    toast.success('Produkti u shtua në shportë!');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success('Produkti u hoq nga shporta!');
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

      try {
        // Format cart items for email
        const cartItemsList = cart.map(item => `
          Produkti: ${item.name}
          Sasia: ${item.quantity}
          Çmimi për njësi: ${item.price.toFixed(2)}€
          Totali: ${(item.price * item.quantity).toFixed(2)}€
        `).join('\n');
  
        const totalAmount = calculateTotal();
  
        // Prepare email template parameters
        const emailParams = {
          // Customer details
          to_name: checkoutForm.name,
          customer_email: checkoutForm.email,
          customer_phone: checkoutForm.phone,
          customer_city: checkoutForm.city,
          customer_address: checkoutForm.address,
          
          // Order details
          order_items: cartItemsList,
          total_amount: totalAmount.toFixed(2),
          order_date: new Date().toLocaleString('sq-AL'),
        };
  
        // Send email notification
        const emailResult = await emailjs.send(
          'service_cnlkqwf', 
          'template_pn6hzqe', 
          emailParams
        );
  
        if (emailResult.status === 200) {
          toast.success('Porosia juaj u dërgua me sukses!');
          // Clear cart and form
          setCart([]);
          setIsCartOpen(false);
          setCheckoutForm({
            name: '',
            email: '',
            phone: '',
            city: '',
            address: ''
          });
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Ndodhi një gabim. Ju lutem provoni përsëri.');
      } finally {
        setIsProcessing(false);
      }
    };
  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_cnlkqwf',
        'template_pn6hzqe',
        contactForm
      );
      toast.success('Mesazhi u dërgua me sukses!');
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Ndodhi një gabim. Ju lutem provoni përsëri.');
    }
  };


  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-100 flex justify-center items-center">
        <BeatLoader color="#3b52c0" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-colors duration-500 font-sans">
      <Toaster position="top-right" />

       {/* Hero Section */}
       <section className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Smart Swiss Energy</h1>
          <p className="text-xl md:text-2xl mb-8">Zgjidhja juaj për energji të pastër dhe të qëndrueshme</p>
          <button
            onClick={() => scrollToSection('rreth')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Eksploro
          </button>
        </div>
      </section>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Smart Swiss Energy</h1>
          <div className="flex items-center space-x-8">
            <button onClick={() => scrollToSection('rreth')} className="hover:text-blue-600 hover:underline transition-colors duration-500">Rreth Nesh</button>
            <button onClick={() => scrollToSection('produktet')} className="hover:text-blue-600 hover:underline transition-colors duration-500">Produktet</button>
            <button onClick={() => scrollToSection('sherbimet-tona')} className="hover:text-blue-600 hover:underline transition-colors duration-500">Shërbimet Tona</button>
            <button onClick={() => scrollToSection('kontakti')} className="hover:text-blue-600 hover:underline transition-colors duration-500">Kontakti</button>
            <button 
              onClick={() => setIsCartOpen(true)} // Ensure the cart opens when the cart button is clicked
              className="relative p-2 hover:text-blue-600 hover:underline transition-colors duration-500"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center transition-colors duration-500">
          <div className="bg-white p-8 rounded-lg shadow-md transition-colors duration-500">
            <h2 className="text-2xl font-bold mb-4">Shporta</h2>
            {cart.length === 0 ? (
              <p className="text-gray-600 transition-colors duration-500">Shporta është bosh.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="mb-4">
                    {item.name} - {item.price} €
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md transition-colors duration-500"
              >
                Mbyll
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutFormVisible(true);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md transition-colors duration-500"
              >
                Vazhdo me Blerjen
              </button>
            </div>
          </div>
        </div>
      )}

       {/* Checkout Form */}
       {isCheckoutFormVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center transition-colors duration-500">
          <div className="bg-white p-8 rounded-lg shadow-md transition-colors duration-500">
            <h2 className="text-2xl font-bold mb-4">Forma e Blerjes</h2>
            <form onSubmit={handleCheckoutFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Emri</label>
                <input
                  type="text"
                  id="firstName"
                  value={checkoutForm.firstName}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, firstName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Mbiemri</label>
                <input
                  type="text"
                  id="lastName"
                  value={checkoutForm.lastName}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, lastName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Numri i Telefonit</label>
                <input
                  type="text"
                  id="phone"
                  value={checkoutForm.phone}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Email</label>
                <input
                  type="email"
                  id="email"
                  value={checkoutForm.email}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Qyteti</label>
                <input
                  type="text"
                  id="city"
                  value={checkoutForm.city}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-500">Adresa</label>
                <input
                  type="text"
                  id="address"
                  value={checkoutForm.address}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsCheckoutFormVisible(false)}
                  className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md transition-colors duration-500"
                >
                  Anulo
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md transition-colors duration-500"
                >
                  Dërgo
                </button>
              </div>
            </form>
          </div>
        </div>
       )}

      {/* Main Content */}
      <div className="pt-16 transition-colors duration-500">
        {/* About Section */}
        <section id="rreth" className="py-20 bg-white transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 transition-colors duration-500">Rreth Nesh</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed mb-8 transition-colors duration-500">
                Ne jemi një kompani e specializuar në instalimin dhe mirëmbajtjen e paneleve solare. 
                Me përvojë mbi 10 vjeçare në treg, ne ofrojmë zgjidhje të qëndrueshme energjetike për 
                shtëpitë dhe bizneset tuaja.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed transition-colors duration-500">
                Misioni ynë është të ndihmojmë në kalimin drejt energjisë së pastër dhe të rinovueshme, 
                duke kontribuar në një të ardhme më të gjelbër për të gjithë.
              </p>
            </div>
          </div>
        </section>

        {/* Company Leaders Section */}
        <section id="leaders" className="py-20 bg-gray-100 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 transition-colors duration-500">Liderët e Kompanisë</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-colors duration-500">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Leader 1"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900 transition-colors duration-500">Emri i Shefit 1</h3>
                <p className="text-gray-600 transition-colors duration-500">Pozita e Shefit 1</p>
                <p className="text-gray-600 mt-4 transition-colors duration-500">Përshkrimi i shkurtër për Shefin 1 dhe rolin e tij në kompani.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-colors duration-500">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Leader 2"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900 transition-colors duration-500">Emri i Shefit 2</h3>
                <p className="text-gray-600 transition-colors duration-500">Pozita e Shefit 2</p>
                <p className="text-gray-600 mt-4 transition-colors duration-500">Përshkrimi i shkurtër për Shefin 2 dhe rolin e tij në kompani.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Energy Savings with Solar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">90%</h3>
              <p>Reduction in electricity bills with our solar solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">25+ Years</h3>
              <p>Of clean, renewable energy for your home</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">ROI in 5-7 Years</h3>
              <p>Average return on investment period</p>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Annual Energy Production</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Residential System (10kW)</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Average Daily Production:</span>
                    <span className="font-bold">40-50 kWh</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Annual Production:</span>
                    <span className="font-bold">14,600-18,250 kWh</span>
                  </li>
                  <li className="flex justify-between">
                    <span>CO₂ Reduction:</span>
                    <span className="font-bold">10.2 tons/year</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Commercial System (50kW)</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Average Daily Production:</span>
                    <span className="font-bold">200-250 kWh</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Annual Production:</span>
                    <span className="font-bold">73,000-91,250 kWh</span>
                  </li>
                  <li className="flex justify-between">
                    <span>CO₂ Reduction:</span>
                    <span className="font-bold">51 tons/year</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Products Section */}
        <section id="produktet" className="py-20 bg-gray-100 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 transition-colors duration-500">Produktet Tona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-500 transform hover:scale-105" onClick={() => setSelectedProduct(product)}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500">{product.name}</h3>
                    <p className="text-gray-600 mt-2 transition-colors duration-500">{product.price.toFixed(2)}€</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-500"
                    >
                      Shto në shportë
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sherbimet-tona" className="py-16 bg-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 transition-colors duration-500">Shërbimet Tona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow transition-colors duration-500">
              <div className="bg-blue-100 p-3 rounded-full mb-4 transition-colors duration-500">
                <Zap className="h-8 w-8 text-blue-600 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-500">High Efficiency</h3>
              <p className="text-gray-600 transition-colors duration-500">Our solar panels deliver maximum energy conversion with industry-leading efficiency rates.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow transition-colors duration-500">
              <div className="bg-green-100 p-3 rounded-full mb-4 transition-colors duration-500">
                <Leaf className="h-8 w-8 text-green-600 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-500">Sustainable Solution</h3>
              <p className="text-gray-600 transition-colors duration-500">Environmentally friendly energy solutions that help reduce your carbon footprint.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow transition-colors duration-500">
              <div className="bg-orange-100 p-3 rounded-full mb-4 transition-colors duration-500">
                <Wrench className="h-8 w-8 text-orange-600 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-500">Professional Installation</h3>
              <p className="text-gray-600 transition-colors duration-500">Expert installation by certified professionals ensuring optimal performance.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow transition-colors duration-500">
              <div className="bg-red-100 p-3 rounded-full mb-4 transition-colors duration-500">
                <Shield className="h-8 w-8 text-red-600 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-500">High Security</h3>
              <p className="text-gray-600 transition-colors duration-500">Advanced safety features and robust construction for long-term reliability.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow transition-colors duration-500">
              <div className="bg-purple-100 p-3 rounded-full mb-4 transition-colors duration-500">
                <Settings className="h-8 w-8 text-purple-600 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-500">Easy Maintenance</h3>
              <p className="text-gray-600 transition-colors duration-500">Simple maintenance requirements with long-lasting durability and performance.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="kontakti" className="py-20 bg-gray-100 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <ContactUs />
            </div>
          </div>
        </section>
      </div>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg overflow-y-auto transition-colors duration-500">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 transition-colors duration-500">Shporta</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-500"
                >
                  ✕
                </button>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 transition-colors duration-500">Shporta është e zbrazët</p>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-900 transition-colors duration-500">{item.name}</p>
                          <p className="text-gray-600 transition-colors duration-500">{item.price.toFixed(2)}€</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-500"
                        >
                          Hiq
                        </button>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Emri dhe Mbiemri</label>
                      <input
                        type="text"
                        value={checkoutForm.name}
                        onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        value={checkoutForm.email}
                        onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Numri i Telefonit</label>
                      <input
                        type="tel"
                        value={checkoutForm.phone}
                        onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Qyteti</label>
                      <input
                        type="text"
                        value={checkoutForm.city}
                        onChange={(e) => setCheckoutForm({...checkoutForm, city: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Adresa</label>
                      <textarea
                        value={checkoutForm.address}
                        onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})}
                        rows={2}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center font-bold mb-4">
                  
                      <span>Totali:</span>
                        <span>{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}€</span>
                      </div>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:bg-green-400"
                      >
                      {isProcessing ? 'Duke procesuar...' : 'Vazhdo me Pagesën'}
                    </button>
                  </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;