import { motion } from 'framer-motion';
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
import aboutHeroImage from '../assets/Image 1.jpg';
import houseAnimation from '../assets/house-animation.gif';


const About = () => {
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
    <div className="min-h-screen">
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building Trust with{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Voxelhaus
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The success of any partnership is fundamentally rooted in the trust shared between its members. Here is how we build it with every client, every day:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-[#00F0FF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00F0FF]/10"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-r from-[#00F0FF]/20 to-[#0099FF]/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#00F0FF]/25"
                    >
                      <Icon size={28} className="text-[#00F0FF]" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">{point.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">{point.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="space-y-8"
          >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{' '}
                  <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                    Voxelhaus?
                  </span>
            </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Choosing us is an investment in your property's success. Here are six reasons why real estate professionals partner with us:
            </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <span className="text-white text-lg font-medium">Professional Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <span className="text-white text-lg font-medium">Fast Turnaround Times</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <span className="text-white text-lg font-medium">100% Confidential Service</span>
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
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Real Estate Success" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Success Stories</h3>
                  <p className="text-white/90 text-sm">Trusted by real estate professionals worldwide</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-r from-[#0099FF] to-[#00F0FF] rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-[#00F0FF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00F0FF]/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-3xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00F0FF]/25"
                  >
                    <Icon size={36} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                  
                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Core{' '}
              <span className="text-[#00F0FF]">Values</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our business is built on a foundation of core values that guide every project and client interaction. We believe these principles are what set us apart and allow us to deliver exceptional results consistently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-[#00F0FF]/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-[#00F0FF]/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  >
                    <Icon size={32} className="text-[#00F0FF]" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Voxelhaus Advantage Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Voxelhaus{' '}
              <span className="text-[#00F0FF]">Advantage</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choosing Voxelhaus consultancy means more than just receiving great visuals. It means gaining a strategic advantage in a crowded real estate market. Our services are designed to deliver tangible business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-[#00F0FF]/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-[#00F0FF]/25"
                  >
                    <Icon size={40} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Trusted Partner Section */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Your Trusted Partner in{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Property Visuals
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              At Voxelhaus consultancy, our expertise in floor plans, Photoshop, and virtual staging empowers you to showcase every property with confidence. We guide you with professional advice, support your vision, and deliver the precise, high-quality visuals you need to grow your business.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-lg transition-all duration-300"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#00F0FF] text-[#00F0FF] px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 text-lg hover:bg-[#00F0FF] hover:text-black transition-all duration-300"
              >
                <MessageSquare size={20} />
                <span>Contact Us</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;