import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaExpand, FaHeart, FaCamera, FaVideo } from 'react-icons/fa';
import {
  portfolioVideos,
  proposalVideos,
  artisticVideos,
  proposalPhotos,
  artisticPhotos
} from '../data/portfolioData';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterType, setFilterType] = useState('all'); // 'all', 'videos', 'photos'

  const categories = ['All', 'Proposal', 'Artistic', 'Automotive', 'Event', 'Wedding'];

  // Combine all media
  const allMedia = [
    ...portfolioVideos.map(item => ({ ...item, type: 'video' })),
    ...proposalVideos.map(item => ({ ...item, type: 'video' })),
    ...artisticVideos.map(item => ({ ...item, type: 'video' })),
    ...proposalPhotos.map(item => ({ ...item, type: 'photo' })),
    ...artisticPhotos.map(item => ({ ...item, type: 'photo' }))
  ];

  // Filter media by category and type
  const filteredMedia = allMedia.filter(media => {
    const categoryMatch = selectedCategory === 'All' || media.category === selectedCategory;
    const typeMatch = filterType === 'all' ||
      (filterType === 'videos' && media.type === 'video') ||
      (filterType === 'photos' && media.type === 'photo');
    return categoryMatch && typeMatch;
  });

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedMedia(filteredMedia[index]);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  return (
    <>
      <section id="work" className="py-20 lg:py-32 bg-primary relative overflow-hidden">
        {/* Minimal animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
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
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Selected Work
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A curated collection of videos and photography
            </p>
          </motion.div>

          {/* Type Filter - Video/Photo/All */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setFilterType('all')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filterType === 'all'
                  ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('videos')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filterType === 'videos'
                  ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              }`}
            >
              <FaVideo /> Videos
            </button>
            <button
              onClick={() => setFilterType('photos')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filterType === 'photos'
                  ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              }`}
            >
              <FaCamera /> Photos
            </button>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                    : 'bg-secondary/50 text-gray-300 hover:bg-secondary border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredMedia.map((media, index) => (
                <motion.div
                  key={media.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square bg-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image/Thumbnail */}
                  <img
                    src={media.thumbnail || media.src}
                    alt={media.title || media.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {media.type === 'video' ? (
                        <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                          <FaPlay size={20} />
                        </div>
                      ) : (
                        <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                          <FaExpand size={20} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white text-sm font-medium truncate">
                      {media.title || media.alt}
                    </p>
                    <p className="text-accent text-xs">{media.category}</p>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3 bg-accent/90 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                    {media.type === 'video' ? 'Video' : 'Photo'}
                  </div>

                  {/* Featured Badge */}
                  {media.featured && (
                    <div className="absolute top-3 right-3">
                      <FaHeart className="text-rose-400" size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No results message */}
          {filteredMedia.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-lg">No work found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <motion.div
              className="relative max-w-5xl max-h-[85vh] px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="aspect-video flex items-center justify-center">
                    <a
                      href={selectedMedia.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-4"
                    >
                      <img
                        src={selectedMedia.thumbnail}
                        alt={selectedMedia.title}
                        className="max-w-full max-h-[60vh] object-contain rounded-lg"
                      />
                      <button className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent-light transition-colors flex items-center gap-2">
                        <FaPlay /> Watch Video
                      </button>
                    </a>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              )}
              <div className="text-center mt-4">
                <p className="text-white text-lg font-medium">
                  {selectedMedia.title || selectedMedia.alt}
                </p>
                <p className="text-accent text-sm">{selectedMedia.category}</p>
                {selectedMedia.description && (
                  <p className="text-gray-400 text-sm mt-2 max-w-2xl mx-auto">
                    {selectedMedia.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;
