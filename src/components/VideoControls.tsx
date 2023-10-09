import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import VideoCardStyling from './VideoCardStyles';

interface VideoControlsProps {
  isPlaying: boolean;
  onPlayPausePress: () => void;
  showSkipArrow: boolean;
}

const VideoControls: React.FC<VideoControlsProps> = ({ isPlaying, onPlayPausePress, showSkipArrow }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlayPausePress} style={styles.playButton}>
        <Image
          source={isPlaying ? require('../../assets/pause-button.png') : require('../../assets/play-button.png')}
          style={styles.playIcon}
        />
      </TouchableOpacity>
      {showSkipArrow && (
        <TouchableOpacity onPress={() => {}} style={styles.skipButton}>
          <Image source={require('../../assets/skip-arrow.png')} style={styles.skipIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    paddingRight: 10,
  },
  playButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    height: 30,
    width: 30,
  },
  skipButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  skipIcon: {
    height: 20,
    width: 20,
  },
});

export default VideoControls;
