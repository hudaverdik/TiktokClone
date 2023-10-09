import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background color for the header
    paddingHorizontal: 16,
    paddingTop: 38,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    zIndex: 0, // Set the header above the video
  },
  leftButtons: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerButtons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightButtons: {
    flex: 1,
    alignItems: 'flex-end',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
