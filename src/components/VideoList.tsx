import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useVideoContext } from '../context/VideoContext'; // Import your VideoContext

const VideoList: React.FC = () => {
  const { videos } = useVideoContext(); // Access videos from your context

  return (
    <View style={styles.container}>
      {videos.map((video) => (
        <View key={video.id} style={styles.videoContainer}>
          <Image
            source={{ uri: video.videoUrl }} // Use the video URL as the image source
            style={styles.videoThumbnail}
          />
          <View style={styles.videoInfoContainer}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoCaption}>{video.caption}</Text>
            <View style={styles.videoStats}>
              <Text>{video.likes} Likes</Text>
              <Text>{video.comments} Comments</Text>
              <Text>{video.shares} Shares</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  videoContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
  },
  videoInfoContainer: {
    padding: 12,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  videoCaption: {
    fontSize: 16,
    marginBottom: 8,
  },
  videoStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default VideoList;
