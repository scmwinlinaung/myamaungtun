// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaTimes, FaChevronLeft, FaChevronRight, FaCamera, FaExpand } from 'react-icons/fa';
// import { artisticPhotos } from '../data/portfolioData';

// const ArtisticPhotos = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [filter, setFilter] = useState('All');

//   const categories = ['All', 'BTS', 'Artistic'];

//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setSelectedImage(artisticPhotos[index]);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   const goToPrevious = (e) => {
//     e.stopPropagation();
//     const newIndex = (currentIndex - 1 + artisticPhotos.length) % artisticPhotos.length;
//     setCurrentIndex(newIndex);
//     setSelectedImage(artisticPhotos[newIndex]);
//   };

//   const goToNext = (e) => {
//     e.stopPropagation();
//     const newIndex = (currentIndex + 1) % artisticPhotos.length;
//     setCurrentIndex(newIndex);
//     setSelectedImage(artisticPhotos[newIndex]);
//   };

//   const filteredPhotos = filter === 'All'
//     ? artisticPhotos
//     : artisticPhotos.filter(photo => photo.category === filter);

//   return (
//     <>
//       <section id="artistic-photos" className="py-20 lg:py-32 bg-gradient-to-b from-primary via-indigo-950/10 to-primary relative overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"
//             animate={{
//               scale: [1, 1.3, 1],
//               x: [0, 50, 0],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <motion.div
//             className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               x: [0, -50, 0],
//             }}
//             transition={{
//               duration: 18,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           {/* Geometric Shapes */}
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-64 h-64 border border-indigo-500/10 rounded-xl rotate-45"
//               animate={{
//                 rotate: [45, 225, 45],
//                 scale: [1, 1.2, 1],
//                 opacity: [0.1, 0.2, 0.1],
//               }}
//               transition={{
//                 duration: 20 + i * 5,
//                 repeat: Infinity,
//                 ease: "linear",
//                 delay: i * 2
//               }}
//               style={{
//                 left: `${20 + i * 30}%`,
//                 top: `${10 + i * 25}%`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           {/* Section Header */}
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-6 py-3 rounded-full mb-8 border border-indigo-500/30"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <FaCamera className="text-indigo-400 text-xl" />
//               <span className="text-indigo-300 font-medium">Visual Artistry</span>
//             </motion.div>

//             <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
//                 Artistic Photography
//               </span>
//             </h2>

//             <motion.div
//               className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-8 rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: "8rem" }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             />

//             <motion.p
//               className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               Behind the scenes and artistic shots that reveal the creative process.
//               <br />
//               <span className="text-indigo-400">Where technical precision meets artistic expression.</span>
//             </motion.p>
//           </motion.div>

//           {/* Filter Buttons */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-3 mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setFilter(category)}
//                 className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
//                   filter === category
//                     ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/25'
//                     : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </motion.div>

//           {/* Masonry Gallery Grid */}
//           <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//             {filteredPhotos.map((photo, index) => (
//               <motion.div
//                 key={photo.id}
//                 className={`group relative break-inside-avoid rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-500 cursor-pointer ${
//                   photo.featured ? 'row-span-2' : ''
//                 }`}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.05 }}
//                 whileHover={{ y: -8 }}
//                 onClick={() => openLightbox(artisticPhotos.indexOf(photo))}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={photo.src}
//                     alt={photo.alt}
//                     className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
//                   />

//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4">
//                     <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${
//                       photo.category === 'BTS'
//                         ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
//                         : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
//                     }`}>
//                       {photo.category}
//                     </span>
//                   </div>

//                   {/* Featured Badge */}
//                   {photo.featured && (
//                     <motion.div
//                       className="absolute top-4 right-4"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                       }}
//                     >
//                       <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
//                         Featured
//                       </span>
//                     </motion.div>
//                   )}

//                   {/* Expand Icon */}
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   >
//                     <motion.div
//                       className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/50"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <FaExpand className="text-xl" />
//                     </motion.div>
//                   </motion.div>
//                 </div>

//                 {/* Info Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="text-white text-sm font-medium">{photo.alt}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <motion.div
//             className="text-center mt-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             <motion.a
//               href="#contact"
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FaCamera />
//               <span>Book a Creative Session</span>
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeLightbox}
//           >
//             {/* Navigation Buttons */}
//             <motion.button
//               onClick={goToPrevious}
//               className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-indigo-500/30 text-white p-4 rounded-full transition-all duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaChevronLeft size={24} />
//             </motion.button>

//             <motion.button
//               onClick={goToNext}
//               className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-indigo-500/30 text-white p-4 rounded-full transition-all duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaChevronRight size={24} />
//             </motion.button>

//             {/* Close Button */}
//             <motion.button
//               onClick={closeLightbox}
//               className="absolute top-4 md:top-8 right-4 md:right-8 bg-white/10 hover:bg-indigo-500/30 text-white p-4 rounded-full transition-all duration-300"
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaTimes size={24} />
//             </motion.button>

//             {/* Image */}
//             <motion.div
//               className="relative max-w-5xl max-h-[85vh] px-4"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
//               />
//               <div className="flex items-center justify-center gap-3 mt-4">
//                 <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                   selectedImage.category === 'BTS'
//                     ? 'bg-indigo-500/20 text-indigo-300'
//                     : 'bg-blue-500/20 text-blue-300'
//                 }`}>
//                   {selectedImage.category}
//                 </span>
//                 <p className="text-white text-lg">{selectedImage.alt}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default ArtisticPhotos;
