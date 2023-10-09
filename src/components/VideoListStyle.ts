// VideoListStyle.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  videoItem: {
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
