import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaHeart, FaExpand } from 'react-icons/fa';
import { proposalPhotos } from '../data/portfolioData';

const ProposalPhotos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(proposalPhotos[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + proposalPhotos.length) % proposalPhotos.length;
    setCurrentIndex(newIndex);
    setSelectedImage(proposalPhotos[newIndex]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % proposalPhotos.length;
    setCurrentIndex(newIndex);
    setSelectedImage(proposalPhotos[newIndex]);
  };

  return (
    <>
      <section id="proposal-photos" className="py-20 lg:py-32 bg-gradient-to-b from-primary via-rose-950/10 to-primary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/20 to-pink-500/20 px-6 py-3 rounded-full mb-8 border border-rose-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaHeart className="text-rose-400 text-xl animate-pulse" />
              <span className="text-rose-300 font-medium">Captured Moments</span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Proposal Photography
              </span>
            </h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 rounded-full"
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
              Timeless photographs that capture the emotion and magic of your special moment.
              <br />
              <span className="text-rose-400">Every detail, every tear, every smile preserved forever.</span>
            </motion.p>
          </motion.div>

          {/* Featured Image */}
          {proposalPhotos.filter(p => p.featured).length > 0 && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-900/20 to-pink-900/20 border-2 border-rose-500/30 hover:border-rose-400/50 transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(proposalPhotos.findIndex(p => p.featured))}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={proposalPhotos.find(p => p.featured)?.src}
                    alt={proposalPhotos.find(p => p.featured)?.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-rose-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl shadow-rose-500/50">
                      <FaExpand className="text-2xl" />
                    </div>
                  </motion.div>

                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full text-sm font-semibold border border-rose-500/30">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proposalPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-rose-900/20 to-pink-900/20 border border-rose-500/20 hover:border-rose-400/50 transition-all duration-500 cursor-pointer ${
                  photo.featured ? 'lg:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => openLightbox(index)}
              >
                <div className={`relative overflow-hidden ${photo.featured ? 'aspect-[16/9]' : 'aspect-square'}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Expand Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.div
                      className="bg-rose-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExpand className="text-xl" />
                    </motion.div>
                  </motion.div>

                  {/* Heart Badge */}
                  {photo.featured && (
                    <motion.div
                      className="absolute top-4 right-4 text-rose-400"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaHeart size={20} />
                    </motion.div>
                  )}
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Navigation Buttons */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-rose-500/30 text-white p-4 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-rose-500/30 text-white p-4 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight size={24} />
            </motion.button>

            {/* Close Button */}
            <motion.button
              onClick={closeLightbox}
              className="absolute top-4 md:top-8 right-4 md:right-8 bg-white/10 hover:bg-rose-500/30 text-white p-4 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={24} />
            </motion.button>

            {/* Image */}
            <motion.div
              className="relative max-w-5xl max-h-[85vh] px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-center text-white mt-4 text-lg">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default ProposalPhotos;
