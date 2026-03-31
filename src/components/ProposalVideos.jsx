import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaHeart, FaRing } from 'react-icons/fa';
import { proposalVideos } from '../data/portfolioData';
import VideoEmbed from './VideoEmbed';

const ProposalVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <section id="proposal-videos" className="py-20 lg:py-32 bg-gradient-to-b from-primary via-pink-950/10 to-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-red-500/20 px-6 py-3 rounded-full mb-8 border border-pink-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaRing className="text-pink-400 text-xl animate-pulse" />
            <span className="text-pink-300 font-medium">Love Stories</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Proposal Videos
            </span>
          </h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mb-8 rounded-full"
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
            Capturing the magic of that perfect moment when two lives become one.
            <br />
            <span className="text-pink-400">Forever remembered, forever cherished.</span>
          </motion.p>
        </motion.div>

        {/* Featured Video - Large */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-900/20 to-red-900/20 border-2 border-pink-500/30 hover:border-pink-400/50 transition-all duration-500">
            {/* Thumbnail */}
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src={proposalVideos[0]?.thumbnail}
                alt={proposalVideos[0]?.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Heart Animation */}
              <motion.div
                className="absolute top-8 right-8 text-pink-500 opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart size={32} />
              </motion.div>

              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button
                  onClick={() => setSelectedVideo(proposalVideos[0])}
                  className="relative group/play"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="absolute inset-0 bg-pink-500 rounded-full blur-xl opacity-50 group-hover/play:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-pink-500 to-red-500 text-white w-24 h-24 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/50">
                    <FaPlay className="text-3xl ml-2" />
                  </div>
                </motion.button>
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="inline-block bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-500/30">
                    Featured
                  </span>
                  <h3 className="text-4xl font-bold text-white mb-3">
                    {proposalVideos[0]?.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    {proposalVideos[0]?.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {proposalVideos.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.button
                    onClick={() => setSelectedVideo(video)}
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-pink-500 rounded-full blur-lg opacity-50" />
                    <div className="relative bg-gradient-to-r from-pink-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
                      <FaPlay className="text-xl ml-1" />
                    </div>
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHeart className="animate-pulse" />
            <span>Create Your Perfect Proposal</span>
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

export default ProposalVideos;
