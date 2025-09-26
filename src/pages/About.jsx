import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import aboutHeroImage from '../assets/img1.png';
import houseAnimation from '../assets/house-animation.gif';
import aboutbg1 from '../assets/aboutbg1.png';
import aboutbg2 from '../assets/aboutbg2.png';
import aboutbg3 from '../assets/aboutbg3.png';

import WhyChooseVoxelhaus from '../components/sections/WhyChooseVoxelhaus';
import OurFoundationOfExcellence from '../components/sections/OurFoundationOfExcellence';
import TheVoxelhausAdvantage from '../components/sections/TheVoxelhausAdvantage';


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




  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${aboutHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

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
                <motion.div
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
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white font-bold rounded-xl flex items-center gap-3 group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
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
              const trustImages = [aboutbg1, aboutbg2, aboutbg3,aboutbg1];
              const currentImage = trustImages[index] || aboutbg1;
              
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
      <WhyChooseVoxelhaus />

      {/* Core Values Section */}
      <OurFoundationOfExcellence />

      {/* The Voxelhaus Advantage Section */}
      <TheVoxelhausAdvantage />

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
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
              <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Trusted Partnership</span>
              <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
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
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-10 py-4 rounded-2xl flex items-center justify-center space-x-3 text-lg transition-all duration-300 shadow-lg shadow-[#00F0FF]/25"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span>Get Started Today</span>
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="border-2 border-[#00F0FF] text-[#00F0FF] px-10 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg hover:bg-[#00F0FF] hover:text-black transition-all duration-300 shadow-lg shadow-[#00F0FF]/10"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <MessageSquare size={20} />
                    <span>Contact Us</span>
                  </Link>
                </motion.div>
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