import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPalette, FaMagic, FaStar } from 'react-icons/fa';
import { artisticVideos } from '../data/portfolioData';
import VideoEmbed from './VideoEmbed';

const ArtisticVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <section id="artistic-videos" className="py-20 lg:py-32 bg-gradient-to-b from-primary via-violet-950/10 to-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 px-6 py-3 rounded-full mb-8 border border-violet-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaPalette className="text-violet-400 text-xl" />
            <span className="text-violet-300 font-medium">Creative Vision</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Artistic Videos
            </span>
          </h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Pushing creative boundaries with experimental visual storytelling.
            <br />
            <span className="text-violet-400">Where imagination meets innovation.</span>
          </motion.p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {artisticVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${
                index === 0
                  ? 'from-violet-900/30 to-fuchsia-900/30 md:row-span-2'
                  : 'from-purple-900/30 to-violet-900/30'
              } border border-violet-500/20 hover:border-violet-400/50 transition-all duration-500`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Thumbnail */}
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Animated Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Sparkles Effect */}
                <div className="absolute top-6 right-6 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="text-violet-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      <FaStar size={16} />
                    </motion.div>
                  ))}
                </div>

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.button
                    onClick={() => setSelectedVideo(video)}
                    className="relative group/play"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-violet-500 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white w-24 h-24 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50">
                      <FaPlay className="text-3xl ml-2" />
                    </div>
                  </motion.button>
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <span className={`inline-block ${index === 0 ? 'bg-violet-500/20 text-violet-300' : 'bg-fuchsia-500/20 text-fuchsia-300'} px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-violet-500/30`}>
                      {index === 0 ? 'Featured' : 'New'}
                    </span>
                    <h3 className={`font-bold text-white mb-3 ${index === 0 ? 'text-4xl' : 'text-2xl'}`}>
                      {video.title}
                    </h3>
                    <p className="text-gray-300">
                      {video.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '50+', label: 'Creative Projects' },
            { number: '100%', label: 'Artistic Vision' },
            { number: '∞', label: 'Possibilities' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMagic className="animate-pulse" />
            <span>Bring Your Vision to Life</span>
          </motion.a>
        </motion.div>

        {/* Video Embed Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <VideoEmbed
              url={selectedVideo.url}
              thumbnail={selectedVideo.thumbnail}
              title={selectedVideo.title}
              onClose={() => setSelectedVideo(null)}
            />
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ArtisticVideos;
