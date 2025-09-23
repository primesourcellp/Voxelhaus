import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  CheckCircle, 
  Target, 
  Shield, 
  Users, 
  Award, 
  Zap, 
  DollarSign, 
  Handshake,
  Eye,
  Clock,
  Star,
  Building,
  Lightbulb,
  Heart,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Palette
} from 'lucide-react';
import aboutHeroImage from '../assets/Image1.jpg';
import houseAnimation from '../assets/house-animation.gif';
import trustImage from '../assets/Image3.jpg';
import commitmentImage from '../assets/Image4.jpg';
import whyChooseImage from '../assets/Image.jpg';
import valuesImage from '../assets/bg.jpeg';
import advantageImage from '../assets/bg2.jpeg';
import partnerImage from '../assets/bg3.jpeg';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const trustPoints = [
    {
      icon: Shield,
      title: "Transparency from the Start",
      description: "We provide clear, confidential quotes and straightforward communication, so you always know what to expect. There are no hidden fees or surprises, just honest and open collaboration."
    },
    {
      icon: Award,
      title: "Expertise You Can Count On",
      description: "Our team is composed of seasoned professionals who are masters of their craft. From the intricate details of a floor plan to the artistic finesse of a virtual stage, our work is backed by years of experience and a passion for perfection."
    },
    {
      icon: Star,
      title: "Consistent Quality",
      description: "We have a rigorous quality control process to ensure that every image and plan we deliver meets our high standards. You can rely on us for consistent, exceptional results on every project, no matter the scale."
    },
    {
      icon: MessageSquare,
      title: "Reliable Support",
      description: "We are always here to listen and respond. Whether you have a question, need a quick adjustment, or are working on a tight deadline, our team provides prompt and attentive support."
    }
  ];

  const whyChooseUs = [
    {
      icon: Eye,
      title: "Unmatched Visual Impact",
      description: "We don't just create images; we create a compelling visual narrative for your property. Our Photoshop enhancements and virtual staging transform standard photos into engaging, memorable visuals that capture a buyer's attention immediately."
    },
    {
      icon: Target,
      title: "Precision and Accuracy",
      description: "Our floor plans are renowned for their meticulous detail and accuracy. We provide buyers with the confidence to understand a property's layout and flow, reducing the need for multiple in-person viewings."
    },
    {
      icon: Clock,
      title: "Accelerated Marketing Timelines",
      description: "Time is critical in real estate. Our efficient process and fast turnaround times mean you get your high-quality visuals quickly, allowing you to list your properties sooner and meet your marketing deadlines with ease."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Excellence",
      description: "Investing in professional visuals shouldn't break the bank. Our services are a high-value, affordable solution that provides a significant return on investment by attracting more potential buyers and helping you achieve a better sales price."
    },
    {
      icon: Handshake,
      title: "Seamless Collaboration",
      description: "We make the process simple. Just send us your materials—photos, sketches, or drafts—and our team takes it from there. We work closely with you through a simple feedback and revision loop to ensure the final product is exactly what you envisioned."
    },
    {
      icon: Building,
      title: "Full-Service Visual Solutions",
      description: "From foundational floor plans to polished retouched photos and captivating virtual staging, we offer a complete suite of services under one roof."
    }
  ];

  const coreValues = [
    {
      icon: Star,
      title: "Excellence in Every Detail",
      description: "We are meticulous about quality, from the clean lines of a 2D floor plan to the lifelike textures in a virtual staged room. Our team is dedicated to perfecting every detail to ensure the final product is flawless."
    },
    {
      icon: Users,
      title: "Client-Centric Collaboration",
      description: "Your vision is our priority. We work as an extension of your team, listening to your needs and providing proactive solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of visualization technology and design trends. By continuously learning and adapting, we offer the most effective and modern visual solutions for a competitive market."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty and transparency. You can trust that our pricing is fair, our communication is clear, and our commitment to your project is unwavering."
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Faster Sales Cycles",
      description: "High-quality visuals like professional photos and accurate floor plans help buyers make faster, more confident decisions. This leads to shorter time on the market for your properties."
    },
    {
      icon: TrendingUp,
      title: "Higher Online Engagement",
      description: "Eye-catching visuals stop the scroll. Our virtual staging and Photoshop work increase click-through rates and capture the interest of serious buyers, leading to more inquiries and showings."
    },
    {
      icon: Award,
      title: "Elevated Brand Perception",
      description: "Partnering with us signals professionalism and a commitment to quality. Our polished, high-resolution work enhances your brand, builds trust with clients, and helps you win more listings."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${aboutHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container-custom relative z-10 overflow-hidden py-35">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="space-y-8 px-4 lg:px-8"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="block"
                    >
                      About{' '}
                    </motion.span>
                    <motion.span 
                      className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent block"
                      style={{ textShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: '0 0 40px rgba(0, 240, 255, 0.8)'
                      }}
                    >
                      Voxelhaus
                    </motion.span>
                  </motion.h1>
                </div>
                
                <div className="space-y-6">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl text-gray-300 leading-relaxed"
                    whileHover={{ 
                      scale: 1.02,
                      color: '#ffffff'
                    }}
                  >
                    At Voxelhaus consultancy, we specialize in providing essential visual marketing tools that empower real estate professionals to sell properties faster and at a higher value.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-wrap gap-4 mt-8"
                  >
                    <motion.div 
                      className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Shield className="w-4 h-4 text-[#00F0FF]" />
                      <span className="text-white/90 text-sm font-medium">Trusted Service</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-4 h-4 text-[#00F0FF]" />
                      <span className="text-white/90 text-sm font-medium">Quality Assured</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Zap className="w-4 h-4 text-[#00F0FF]" />
                      <span className="text-white/90 text-sm font-medium">Fast Delivery</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ 


                    opacity: 1, 
                    x: 0,
                    boxShadow: [
                      '0 0 20px rgba(0, 240, 255, 0.3)',
                      '0 0 30px rgba(0, 240, 255, 0.5)',
                      '0 0 20px rgba(0, 240, 255, 0.3)'
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 1.4 },
                    x: { duration: 0.6, delay: 1.4 },
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white font-bold rounded-xl flex items-center gap-3 group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

           
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="space-y-8"
          >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Commitment to{' '}
                  <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                    You
                  </span>
            </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  We are more than just a service provider; Our commitment is to deliver not just stunning images but a seamless and reliable experience from start to finish.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  We work tirelessly to ensure that every visual we create contributes directly to your success, helping you win more listings, impress your clients, and stand out in a competitive market. Your goals are our goals, and we are committed to helping you achieve them with speed, quality, and professionalism.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF]" />
                    <span className="text-white font-medium">Transform empty spaces into stunning properties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF]" />
                    <span className="text-white font-medium">Accelerate sales with compelling visuals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF]" />
                    <span className="text-white font-medium">Deliver results that exceed expectations</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full">
                  <CheckCircle className="w-5 h-5 text-[#00F0FF]" />
                  <span className="text-white font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full">
                  <Clock className="w-5 h-5 text-[#00F0FF]" />
                  <span className="text-white font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full">
                  <Shield className="w-5 h-5 text-[#00F0FF]" />
                  <span className="text-white font-medium">Secure Service</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={houseAnimation} 
                  alt="House Animation - Our Commitment to Excellence" 
                  className="w-full h-96 object-cover"
                />
                {/* Blue Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0099FF]/30 via-transparent to-[#00F0FF]/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Our Commitment in Action</h3>
                  <p className="text-white/90 text-sm">Transforming properties with dedication and expertise</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#0099FF] to-[#00F0FF] rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Building Trust Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Building Trust with{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Voxelhaus
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              The success of any partnership is fundamentally rooted in the trust shared between its members. Here is how we build it with every client, every day:
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              const trustImages = [trustImage, commitmentImage, whyChooseImage, valuesImage];
              const currentImage = trustImages[index] || trustImage;
              
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  onClick={() => handleCardClick(index)}
                  className={`group relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer aspect-square transform ${
                    activeCard === index 
                      ? 'border-[#00F0FF]/60 shadow-2xl shadow-[#00F0FF]/20 scale-105 -translate-y-2' 
                      : 'hover:border-[#00F0FF]/60 hover:shadow-2xl hover:shadow-[#00F0FF]/20 hover:scale-105 hover:-translate-y-2'
                  }`}
                >
                  {/* Content Layer */}
                  <div className={`p-4 md:p-6 h-full flex flex-col justify-center transition-all duration-500 ${
                    activeCard === index 
                      ? 'opacity-0 translate-y-[-20px] scale-95' 
                      : 'group-hover:opacity-0 group-hover:translate-y-[-20px] group-hover:scale-95'
                  }`}>
                    <div className="text-center">
                      <h3 className={`text-base md:text-lg font-bold mb-2 md:mb-3 transition-colors duration-500 ${
                        activeCard === index 
                          ? 'text-[#00F0FF]' 
                          : 'text-white group-hover:text-[#00F0FF]'
                      }`}>{point.title}</h3>
                      <p className={`leading-relaxed text-xs md:text-sm transition-colors duration-500 ${
                        activeCard === index 
                          ? 'text-gray-200' 
                          : 'text-gray-300 group-hover:text-gray-200'
                      }`}>{point.description}</p>
                    </div>
                  </div>
                  
                  {/* Image Layer */}
                  <div className={`absolute inset-0 transition-all duration-500 ease-out transform ${
                    activeCard === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-105'
                  }`}>
                    <img 
                      src={currentImage} 
                      alt={`${point.title} - Building Trust`} 
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        activeCard === index 
                          ? 'scale-105' 
                          : 'group-hover:scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0099FF]/30 via-transparent to-[#00F0FF]/30 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Animated Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`text-center transform transition-all duration-500 delay-150 ${
                        activeCard === index 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'
                      }`}>
                        <h4 className="text-white text-xl font-bold mb-2 drop-shadow-lg">{point.title}</h4>
                        <p className="text-white/90 text-sm max-w-xs drop-shadow-lg">Building trust through {point.title.toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                    activeCard === index 
                      ? 'border-[#00F0FF]/40' 
                      : 'border-transparent group-hover:border-[#00F0FF]/40'
                  }`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 bg-gradient-to-r from-[#00F0FF]/5 to-[#0099FF]/5 blur-xl ${
                    activeCard === index 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Voxelhaus?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choosing us is an investment in your property's success. Here are six reasons why real estate professionals partner with us:
            </p>
          </motion.div>

          {/* Content Sections with Images */}
          <div className="space-y-24">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const whyChooseImages = [whyChooseImage, trustImage, commitmentImage, valuesImage, advantageImage, partnerImage];
              const currentImage = whyChooseImages[index] || whyChooseImage;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                >
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="flex items-center space-x-6 mb-8">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-20 h-20 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-3xl flex items-center justify-center shadow-lg shadow-[#00F0FF]/25"
                      >
                        <Icon size={32} className="text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-4xl font-bold text-white mb-2">{item.title}</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full"></div>
                      </div>
                    </div>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-xl text-gray-300 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                    
                    {/* Enhanced Decorative Elements */}
                    <motion.div 
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-32 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#00F0FF] rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-[#0099FF] rounded-full animate-pulse"></div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Enhanced Image */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className={`relative group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      transition={{ duration: 0.6 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <img 
                        src={currentImage} 
                        alt={`${item.title} - Why Choose Voxelhaus`} 
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0099FF]/30 via-transparent to-[#00F0FF]/30 transition-opacity duration-500 group-hover:opacity-100"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      {/* Enhanced Overlay Content */}
                      <div className="absolute inset-0 flex items-end">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                          viewport={{ once: true }}
                          className="p-8 w-full"
                        >
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#00F0FF]/20 to-[#0099FF]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                              <Icon size={20} className="text-[#00F0FF]" />
                            </div>
                            <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                          </div>
                          <p className="text-white/90 text-lg">Professional excellence in every project</p>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Floating Elements */}
                    <motion.div 
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full blur-xl"
                    ></motion.div>
                    <motion.div 
                      animate={{ 
                        y: [0, 10, 0],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#0099FF] to-[#00F0FF] rounded-full blur-xl"
                    ></motion.div>
                    
                    {/* Additional Decorative Elements */}
                    <div className="absolute top-1/2 -left-8 w-16 h-16 border-2 border-[#00F0FF]/20 rounded-full"></div>
                    <div className="absolute bottom-1/4 -right-8 w-12 h-12 border-2 border-[#0099FF]/20 rounded-full"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,153,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 mb-8"
            >
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
              <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Core Values</span>
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Foundation of{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              Our business is built on a foundation of core values that guide every project and client interaction. These principles are what set us apart and allow us to deliver exceptional results consistently.
            </motion.p>
          </motion.div>

          {/* Modern Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-8xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative"
                >
                  <motion.div 
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      rotateY: 2,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="relative bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 md:p-10 hover:border-[#00F0FF]/30 transition-all duration-700 hover:shadow-2xl hover:shadow-[#00F0FF]/15"
                  >
                    {/* Animated Background Pattern */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 0.3, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00F0FF]/5 via-transparent to-[#0099FF]/5"
                    ></motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00F0FF]/5 via-transparent to-[#0099FF]/5 opacity-0 group-hover:opacity-100 transition-all duration-700"
                    ></motion.div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4 md:space-x-8 mb-6 md:mb-8">
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            transition: { duration: 0.8, ease: "easeInOut" }
                          }}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.2 + 0.4,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#00F0FF]/20 to-[#0099FF]/20 rounded-2xl flex items-center justify-center shadow-lg shadow-[#00F0FF]/20"
                        >
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Icon size={28} className="text-[#00F0FF] md:hidden" />
                            <Icon size={36} className="text-[#00F0FF] hidden md:block" />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00F0FF]/10 to-[#0099FF]/10"
                          ></motion.div>
                        </motion.div>
                        
                        <div className="flex-1">
                          <motion.h3 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#00F0FF] transition-colors duration-500"
                          >
                            {value.title}
                          </motion.h3>
                          <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                            viewport={{ once: true }}
                            className="w-16 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full mb-4 origin-left"
                          ></motion.div>
                        </div>
                      </div>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500"
                      >
                        {value.description}
                      </motion.p>
                      
                      {/* Enhanced Decorative Elements */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                        viewport={{ once: true }}
                        className="mt-6 flex items-center space-x-3"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.4 }}
                          className="w-8 h-8 border-2 border-[#00F0FF]/30 rounded-full flex items-center justify-center"
                        >
                          <motion.div 
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 1, 0.6]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="w-2 h-2 bg-[#00F0FF] rounded-full"
                          ></motion.div>
                        </motion.div>
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
                          viewport={{ once: true }}
                          className="flex-1 h-px bg-gradient-to-r from-[#00F0FF]/30 to-transparent origin-left"
                        ></motion.div>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 1.1 }}
                          viewport={{ once: true }}
                          className="text-[#00F0FF]/70 text-sm font-medium"
                        >
                          Value {index + 1}
                        </motion.span>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced Hover Effects */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-3xl border-2 border-[#00F0FF]/20"
                    ></motion.div>
                    
                    <motion.div 
                      animate={{ 
                        y: [0, -5, 0],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-[#00F0FF]/20 rounded-full"
                    ></motion.div>
                    
                    <motion.div 
                      animate={{ 
                        y: [0, 5, 0],
                        opacity: [0, 0.4, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.7
                      }}
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#0099FF]/20 rounded-full"
                    ></motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* The Voxelhaus Advantage Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative">
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Voxelhaus{' '}
              <span className="text-[#00F0FF]">Advantage</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choosing Voxelhaus consultancy means more than just receiving great visuals. It means gaining a strategic advantage in a crowded real estate market.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-[#00F0FF]/30 rounded-2xl p-6 md:p-8 hover:border-[#00F0FF] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00F0FF]/30 hover:-translate-y-2 shadow-[0px_0px_0px_5px_rgba(0,240,255,0.1)] shadow-[0px_0px_15px_2px_rgba(0,240,255,0.15)] hover:shadow-[0px_0px_20px_5px_rgba(0,240,255,0.3)]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white md:hidden" />
                      <Icon size={32} className="text-white hidden md:block" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Trusted Partner Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#00F0FF] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0099FF] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00F0FF]/10 to-[#0099FF]/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300F0FF%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 mb-8"
            >
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
              <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Trusted Partnership</span>
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Your Trusted Partner in{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                Property Visuals
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              At Voxelhaus consultancy, our expertise in floor plans, Photoshop, and virtual staging empowers you to showcase every property with confidence. We guide you with professional advice, support your vision, and deliver the precise, high-quality visuals you need to grow your business.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Property Marketing?</h3>
              <p className="text-gray-300 mb-8">Join hundreds of real estate professionals who trust Voxelhaus for their visual needs.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-10 py-4 rounded-2xl flex items-center justify-center space-x-3 text-lg transition-all duration-300 shadow-lg shadow-[#00F0FF]/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#00F0FF] text-[#00F0FF] px-10 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg hover:bg-[#00F0FF] hover:text-black transition-all duration-300 shadow-lg shadow-[#00F0FF]/10"
                >
                  <MessageSquare size={20} />
                  <span>Contact Us</span>
                </motion.button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
                <span className="text-sm">Professional Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
                <span className="text-sm">100% Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;