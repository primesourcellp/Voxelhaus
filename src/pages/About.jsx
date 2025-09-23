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
  ArrowRight
} from 'lucide-react';

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
    <div className="min-h-screen bg-slate-900 text-white mt-20">
      {/* Hero Section */}
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                Voxelhaus
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Voxelhaus consultancy, we specialize in providing essential visual marketing tools that empower real estate professionals to sell properties faster and at a higher value.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Commitment to{' '}
              <span className="text-[#00F0FF]">You</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are more than just a service provider; Our commitment is to deliver not just stunning images but a seamless and reliable experience from start to finish. We work tirelessly to ensure that every visual we create contributes directly to your success, helping you win more listings, impress your clients, and stand out in a competitive market. Your goals are our goals, and we are committed to helping you achieve them with speed, quality, and professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Building Trust Section */}
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
              Building Trust with{' '}
              <span className="text-[#00F0FF]">Voxelhaus</span>
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
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-[#00F0FF]/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-[#00F0FF]/20 rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <Icon size={24} className="text-[#00F0FF]" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose{' '}
              <span className="text-[#00F0FF]">Voxelhaus?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choosing us is an investment in your property's success. Here are six reasons why real estate professionals partner with us:
            </p>
          </motion.div>

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
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00F0FF]/25"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
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