/**
 * Converts various video URLs to embeddable formats
 */
export const getEmbedUrl = (url) => {
  if (!url) return null;

  // YouTube regular videos and shorts
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = '';

    // Extract video ID from different YouTube URL formats
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v');
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0];
    } else if (url.includes('embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0];
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  // TikTok
  if (url.includes('tiktok.com')) {
    // TikTok embed requires a different approach
    // We'll return the original URL and handle it with TikTok's embed code
    return url;
  }

  // Facebook
  if (url.includes('facebook.com') || url.includes('fb.watch')) {
    // Facebook videos can be embedded using their video ID or post ID
    return url;
  }

  // Return original URL if no embed format is available
  return url;
};

/**
 * Determines the video platform type
 */
export const getVideoPlatform = (url) => {
  if (!url) return 'unknown';

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  if (url.includes('tiktok.com')) {
    return 'tiktok';
  }
  if (url.includes('facebook.com') || url.includes('fb.watch')) {
    return 'facebook';
  }

  return 'unknown';
};
