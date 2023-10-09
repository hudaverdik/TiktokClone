import React, { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';
import styles from './VideoCardStyles';

interface VideoPlaybackProps {
  videoSource: string;
}

const VideoPlayback: React.FC<VideoPlaybackProps> = ({ videoSource }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
console.log(videoSource);

  return (
    <Video
      source={{ uri: videoSource }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode={ResizeMode.CONTAIN}
      shouldPlay={isPlaying}
      isLooping={true}
      useNativeControls={false}
      style={styles.video}
    />
  );
};

export default VideoPlayback;
