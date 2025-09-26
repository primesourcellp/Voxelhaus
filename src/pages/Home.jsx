import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  DollarSign, 
  Award,
  Home as HomeIcon,
  Palette,
  Camera,
  Building,
  ChevronRight,
  Play,
  Handshake,
  Lock,
  Zap,
  Wallet,
  Eye,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';
import heroImage from '../assets/hero.jpg';
import houseAnimationGif from '../assets/output-onlinegiftools.gif';
import Image3d from  '../assets/3d_image_4.png';
import realEstateImage from '../assets/3d_img_2.jpeg';
import team from '../assets/team1.jpeg';
import photoshopWork from '../assets/photoshop_work1.jpeg';
import trust from '../assets/real_estate_2.jpeg';
import secure from '../assets/secure.png';
import homeAbout from '../assets/home_about1.png';
import Turnaround from '../assets/turnaround.png';
import affordable from '../assets/affordable1.png';




const Home = () => {
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

  const whyChooseUs = [
    {
      icon: Handshake,
      title: "Trusted by Real Estate Agents & Developers",
      description: "We work closely with real estate professionals, developers, and property owners who rely on us to deliver visuals that truly sell. Our proven track record ensures your listings stand out in a competitive market.",
      image: trust
    },
    {
      icon: Lock,
      title: "100% Confidential & Secure Services",
      description: "Your projects and property details are always safe with us. We maintain strict confidentiality, ensuring that your work is handled with the highest level of security and professionalism.",
      image: secure
    },
    {
      icon: Zap,
      title: "Fast Turnaround Without Compromising Quality",
      description: "We understand the urgency of the real estate market. That's why we deliver projects quickly while maintaining flawless quality in every floor plan, staging, and photo edit.",
      image: Turnaround
    },
    {
      icon: Wallet,
      title: "Affordable, Customized Solutions",
      description: "We recognize the uniqueness of every project and create customized strategies to match. We provide tailored services that fit your budget without sacrificing the professional touch.",
      image: affordable
    },
    {
      icon: Users,
      title: "Professional & Creative Team",
      description: "Our experienced designers, editors, and consultants bring both technical skill and creative vision, ensuring your property visuals look polished and inspiring.",
      image: team
    }
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Floor Plans",
      description: "Professional 2D & 3D layouts – clear, accurate, and tailored for property marketing.",
      features: ["2D Floor Plans", "3D Floor Plans", "Floor Plan Redraws"],
      image: Image3d,
      path: "/floor-plans"
    },
    {
      icon: Palette,
      title: "Virtual Staging",
      description: "Transform empty spaces into beautifully designed rooms that inspire buyers.",
      features: ["Living Room Staging", "Bedroom Staging", "Kitchen Staging"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/virtual-staging"
    },
    {
      icon: Camera,
      title: "Photoshop Works",
      description: "Expert photo editing, retouching, and enhancements to make every property stand out.",
      features: ["Photo Enhancement", "Object Removal", "Sky Replacement"],
      image: photoshopWork,
      path: "/object-removal"
    },
    {
      icon: Building,
      title: "Real Estate Marketing",
      description: "Complete visual solutions for real estate professionals – from brochures to digital presentations.",
      features: ["3D Visualization", "Video Editing", "Marketing Materials"],
      image: realEstateImage,
      path: "/real-estate"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Share Your Vision",
      description: "Provide us with property details, photos, drafts, or any relevant documents. The more information you share, the better we can understand your expectations."
    },
    {
      step: "02",
      title: "Select Your Services",
      description: "Choose from our full suite of offerings—whether you need floor plan creation, virtual staging, or professional photo editing."
    },
    {
      step: "03",
      title: "Collaborate with Our Experts",
      description: "Our team of design and marketing specialists will work directly with you to ensure visuals reflect the property's unique appeal."
    },
    {
      step: "04",
      title: "Review and Refine",
      description: "We'll send you initial drafts for review. You can provide feedback and request adjustments to ensure perfect alignment with your goals."
    },
    {
      step: "05",
      title: "Receive Your High-Quality Visuals",
      description: "Once approved, we deliver polished, high-resolution images and plans with fast turnaround times to meet your deadlines."
    },
    {
      step: "06",
      title: "Elevate Your Marketing",
      description: "Use the final, eye-catching visuals across all marketing channels to make your property stand out in the market."
    }
  ];

  return (
    <div className="min-h-screen ">
          {/* Hero Section */}
          <section 
            className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Static Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10 overflow-hidden py-35">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 px-4 lg:px-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, x: -30, rotateX: -90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="block"
                  >
                    Turning Spaces into
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent block"
                    style={{ textShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
                    initial={{ opacity: 0, y: 50, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: '0 0 40px rgba(0, 240, 255, 0.8)'
                    }}
                  >
                    Stunning Experiences
                  </motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="text-xl text-gray-300 leading-relaxed"
                  whileHover={{ 
                    scale: 1.02,
                    color: '#ffffff'
                  }}
                >
                  Voxelhaus consultancy specializes in floor plans, virtual staging, and photo editing – 
                  delivering confidential, professional, and creative solutions tailored to your needs.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.2
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.8), 0 0 80px rgba(0, 240, 255, 0.4)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-lg transition-all duration-300 border-2 border-transparent hover:border-[#00F0FF]/50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.8), 0 0 80px rgba(0, 240, 255, 0.4)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="border-2 border-[#00F0FF] text-[#00F0FF] px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 text-lg hover:bg-[#00F0FF] hover:text-black transition-all duration-300 hover:shadow-2xl"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <MessageSquare size={20} />
                    <span>Contact Us Today</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "100+", label: "Happy Clients" },
                  { number: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-[#00F0FF]/20 hover:border-[#00F0FF]/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                      y: -5
                    }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-[#00F0FF]"
                      style={{ textShadow: '0 0 20px rgba(0, 240, 255, 0.5)' }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <div className="w-full max-w-lg relative">
                <img
                  src={houseAnimationGif}
                  alt="3D House Construction Animation"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.3))',
                    maxHeight: '500px',
                    objectFit: 'cover'
                  }}
                />
                
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Our Company */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00F0FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0099FF] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-5xl font-bold text-white leading-tight">
                  About Our{' '}
                  <span className="text-[#00F0FF]">
                    Company
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full"></div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                At Voxelhaus consultancy, we help real estate professionals, homeowners, and designers 
                showcase their properties with precision and creativity. From detailed floor plans to 
                lifelike virtual staging and expert Photoshop works, we transform ideas into visuals 
                that sell and inspire.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                {[
                  { number: "500+", color: "text-[#00F0FF]", label: "Projects Completed" },
                  { number: "100+", color: "text-[#0099FF]", label: "Happy Clients" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-[#00F0FF]/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                      y: -5
                    }}
                  >
                    <motion.div 
                      className={`text-3xl font-bold ${stat.color} mb-2`}
                      style={{ textShadow: '0 0 20px rgba(0, 240, 255, 0.5)' }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={homeAbout}
                    alt="Modern Real Estate Office"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-[#00F0FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-[#0099FF] rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our{' '}
              <span className="text-[#00F0FF]">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Complete visual solutions for real estate professionals
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`space-y-8 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}
                  >
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-lg group-hover:bg-gray-700 transition-colors duration-300 border border-[#00F0FF]/20 hover:border-[#00F0FF]/50"
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
                          rotateY: 10
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={40} className="text-[#00F0FF]" />
                        </motion.div>
                      </motion.div>
                      
                      <h3 className="text-4xl font-bold text-white text-center lg:text-left">
                        {service.title}
                      </h3>
                      
                      <p className="text-xl text-gray-300 leading-relaxed text-center lg:text-left">
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-200 text-center lg:text-left">What We Offer:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 + idx * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex items-center p-3 bg-gray-700/60 backdrop-blur-sm rounded-xl border border-gray-600 hover:border-[#00F0FF]/40 transition-all duration-300"
                            whileHover={{ 
                              scale: 1.02,
                              boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
                              y: -2
                            }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                            >
                              <CheckCircle size={20} className="text-[#00F0FF] mr-3 flex-shrink-0" />
                            </motion.div>
                            <span className="text-gray-300 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                      className="pt-4"
                    >
                      <Link to={service.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ 
                            opacity: 1, 
                            y: 0,
                            boxShadow: [
                              '0 0 20px rgba(0, 240, 255, 0.2)',
                              '0 0 30px rgba(0, 240, 255, 0.4)',
                              '0 0 20px rgba(0, 240, 255, 0.2)'
                            ]
                          }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1.2,
                            boxShadow: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.08,
                            boxShadow: '0 0 40px rgba(0, 240, 255, 0.6), 0 0 80px rgba(0, 240, 255, 0.3)',
                            y: -3
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 mx-auto lg:mx-0 block border-2 border-transparent hover:border-[#00F0FF]/50"
                        >
                          Learn More
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className={`relative ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={service.image || `https://images.unsplash.com/photo-${1563456789 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      

                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#00F0FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0099FF] rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We deliver exceptional results that help you stand out in the competitive real estate market.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="space-y-16">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-6"
                  >
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-gray-700 transition-colors duration-300"
                      >
                        <Icon size={32} className="text-[#00F0FF]" />
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="pt-4"
                    >
                      <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <motion.button
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 10px 30px rgba(0, 240, 255, 0.3)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300"
                        >
                          Learn More
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>

                   {/* Visual Element */}
                   <motion.div
                     initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                     viewport={{ once: true }}
                     className="flex-1 relative"
                   >
                     <motion.div
                       whileHover={{ scale: 1.02 }}
                       transition={{ duration: 0.3 }}
                       className="relative group"
                     >
                        <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
                          <img 
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                       
                       {/* Glow Effect */}
                       <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00F0FF]/10 to-[#0099FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     </motion.div>
                   </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* Our Process */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00F0FF]/5 to-[#0099FF]/5"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#00F0FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0099FF] rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Process:{' '}
              <span className="text-[#00F0FF]">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Getting started with us is a seamless experience, designed to deliver high-quality visuals 
              that showcase your property's best features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Process Visualization */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700"
                >
                  <div className="text-center text-white mb-8">
                    <h3 className="text-2xl font-bold mb-4">Voxelhaus Process</h3>
                    <p className="text-gray-300">Complete workflow from start to finish</p>
                  </div>
                  
                  {/* Process Flow Visualization */}
                  <div className="space-y-4">
                    {processSteps.slice(0, 3).map((step, index) => (
                      <div key={step.step} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-[#00F0FF] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{step.step}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">{step.title}</p>
                        </div>
                        {index < 2 && (
                          <div className="w-8 h-0.5 bg-[#00F0FF]"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Services Summary */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Services We Can Help You With</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Our team covers all aspects of a project from validation to development to maintenance and support.
                </p>
                <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 30px rgba(0, 240, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00F0FF] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>

              {/* Technology Card */}
              <div className="bg-gray-800 rounded-xl p-4 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center">
                  <Building size={24} className="text-[#00F0FF]" />
                </div>
                <div>
                  <h5 className="text-white font-semibold">Real Estate Focused</h5>
                  <p className="text-gray-400 text-sm">Specialized in property visuals</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section 
        className="py-20 px-6 md:px-12 relative overflow-hidden"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="architecture" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse"><rect width="200" height="200" fill="%23111127"/><path d="M0 0L200 200M200 0L0 200" stroke="%2300F0FF" stroke-width="1" opacity="0.1"/><circle cx="100" cy="100" r="50" fill="none" stroke="%2300F0FF" stroke-width="0.5" opacity="0.2"/></pattern></defs><rect width="1200" height="800" fill="url(%23architecture)"/></svg>')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Elevate Your Real Estate Listings?
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your property visuals by contacting Voxelhaus consultancy today for a 
              confidential consultation.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(0, 240, 255, 0.3)',
                    '0 0 30px rgba(0, 240, 255, 0.6)',
                    '0 0 20px rgba(0, 240, 255, 0.3)'
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-lg transition-all duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(0, 240, 255, 0.3)',
                    '0 0 30px rgba(0, 240, 255, 0.6)',
                    '0 0 20px rgba(0, 240, 255, 0.3)'
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="border-2 border-[#00F0FF] text-[#00F0FF] px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 text-lg hover:bg-[#00F0FF] hover:text-black transition-all duration-300"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Us</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
export default Home;