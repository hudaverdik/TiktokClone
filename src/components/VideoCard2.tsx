import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import styles from './VideoCardStyles';
import VideoList from './VideoList';

const VideoCard2 = ({ videoSource }) => {
  const [isPlaying, setIsPlaying] = useState(true); // Initially, the video is playing

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <TouchableOpacity onPress={togglePlay} style={styles.container}>
      {/* Video */}
      <Video
        source={{ uri: videoSource }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay={isPlaying}
        useNativeControls={false}
        style={styles.video}
      />

      {/* Play/Pause Icon */}
      {!isPlaying ? (
        <View style={styles.pauseIconContainer}>
          <Text style={styles.pauseIcon}>||</Text>
        </View>
      ) : null}
      {/* Overlay for VideoList */}
      {!isPlaying && (
        <View style={styles.overlay}>
          <VideoList />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default VideoCard2;
