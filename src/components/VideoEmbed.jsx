import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const VideoEmbed = ({ url, thumbnail, title, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!url) return null;

  // Check if it's YouTube
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  const isTikTok = url.includes('tiktok.com');
  const isFacebook = url.includes('facebook.com') || url.includes('fb.watch');

  const getEmbedUrl = (url) => {
    // YouTube
    if (isYouTube) {
      let videoId = '';

      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        videoId = urlParams.get('v');
      } else if (url.includes('youtube.com/shorts/')) {
        videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0];
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }
    }

    return url;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-6xl px-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-14 right-4 text-white hover:text-accent transition-colors z-10"
          aria-label="Close video"
        >
          <FaTimes size={36} />
        </button>

        {/* Video Container */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ width: '100%', maxWidth: '100%', margin: '0 auto' }}>
          {isYouTube && (
            <div style={{ position: 'relative', width: '100%', }}>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900" style={{ top: 0, left: 0, width: '100%', height: '100%' }}>
                  <div className="text-gray-400">Loading video...</div>
                </div>
              )}
              <iframe
                src={embedUrl}
                title={title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            </div>
          )}

          {isTikTok && (
            <div style={{ position: 'relative', width: '100%', margin: '0 auto' }}>
              <blockquote
                className="tiktok-embed"
                cite={url}
                data-video-id={url.split('/video/')[1]?.split('?')[0]}
                style={{ maxWidth: '100%', width: '100%' }}
              >
                <section>
                  <a target="_blank" href={url} rel="noopener noreferrer">
                    View TikTok
                  </a>
                </section>
              </blockquote>
              <script async src="https://www.tiktok.com/embed.js"></script>
            </div>
          )}

          {isFacebook && (
            <div style={{ position: 'relative', width: '100%', margin: '0 auto' }}>
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`}
                title={title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  overflow: 'hidden'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoEmbed;
