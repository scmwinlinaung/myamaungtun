import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-accent-light/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <motion.div
            className="bg-primary/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Welcome to Dino Atelier!</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We are passionate about capturing daily lifestyle, creating compelling short films, and producing stunning automotive films. Feel free to reach out to us for any inquiries or collaborations. We'd love to hear from you!
            </p>
            <p className="text-accent font-semibold">
              Let's turn your ideas into cinematic reality.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Connect With Me</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Instagram */}
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl p-6 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaInstagram className="text-5xl mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-2">Instagram</h4>
                <p className="text-gray-400 text-sm">@ddinonick</p>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFacebook className="text-5xl mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-2">Facebook</h4>
                <p className="text-gray-400 text-sm">Dino Atelier</p>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="group bg-gradient-to-br from-accent/20 to-accent-light/10 rounded-xl p-6 border border-accent/30 hover:border-accent/60 transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="text-5xl mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                <p className="text-gray-400 text-sm">Send a message</p>
              </motion.a>

              {/* Phone/Call */}
              <motion.div
                className="group bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 text-center cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('tel:+959123456789', '_self')}
              >
                <FaPhone className="text-5xl mx-auto mb-4 text-green-500 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-2">Call Me</h4>
                <p className="text-gray-400 text-sm">Let's talk</p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-accent/20 via-accent-light/10 to-accent/20 rounded-2xl p-8 border border-accent/30">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether it's a wedding, event, automotive showcase, or creative project, I'm here to bring your vision to life with professional quality and creative excellence.
              </p>
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="inline-block bg-gradient-to-r from-accent to-accent-light text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
