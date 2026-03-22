import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { portfolioVideos } from '../data/portfolioData';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Wedding', 'Event', 'Automotive', 'Short Film', 'Creative'];

  const filteredVideos = filter === 'All'
    ? portfolioVideos
    : portfolioVideos.filter(video => video.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Portfolio
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of my finest work, showcasing storytelling through motion
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Thumbnail */}
              <div className="aspect-[9/16] relative overflow-hidden bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaPlay className="text-2xl ml-1" />
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-accent/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                {/* View Button */}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors"
                >
                  <span>Watch Now</span>
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
