import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8 rounded-full"></div>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Dino Mg
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Dino Atelier is where creativity meets reality. As a lifestyle enthusiast and a storyteller, I capture the essence of everyday life through my lens. My work reflects the beauty of simplicity and the authenticity of human experiences.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Join me in exploring the unique narratives that shape our world. From intimate wedding moments to dynamic automotive showcases, I bring stories to life through the art of visual storytelling.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-accent mb-4">Expertise</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-gray-800">
                  <p className="text-gray-300">✨ Full-cycle Video Production</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-gray-800">
                  <p className="text-gray-300">🎨 Advanced Color Grading</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-gray-800">
                  <p className="text-gray-300">🎵 Professional Sound Design</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-gray-800">
                  <p className="text-gray-300">🚗 Automotive & Motorbike Media</p>
                </div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 border border-accent/30">
                <p className="text-accent font-semibold">🛠️ Master of DaVinci Resolve</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-accent/20 to-accent-light/10 rounded-2xl p-8 border border-accent/20">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🎬</div>
                  <p className="text-2xl font-bold text-accent mb-2">Dino Atelier</p>
                  <p className="text-gray-400">Where Vision Meets Reality</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-light/10 rounded-full blur-xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            What I Offer
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-secondary/50 rounded-xl p-6 border border-gray-800 hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(245, 158, 11, 0.1)' }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
