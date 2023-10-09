import { StyleSheet } from 'react-native';
import HeaderButtonStyles from './HeaderButtonsStyles';
import FooterButtonStyles from './FooterButtonsStyles';
import OverlayButtonStyles from './OverlayButtonsStyles';

const VideoCardStyling = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'black',
  },
  video: {
    flex: 1,
    zIndex: 0, // Set the video below other components
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.4)', // Semi-transparent overlay
    ...OverlayButtonStyles.overlay, // Apply Overlay button styles
    ...HeaderButtonStyles.overlay, // Apply Header button styles
    zIndex: 1, // Set the overlay above the video
  },
  pauseIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Set the pause icon above the overlay
  },
  pauseIcon: {
    fontSize: 60,
    color: 'white',
    opacity: 0.8,
  },
  
  // Add styles for header and footer buttons
  headerButtons: {
    ...HeaderButtonStyles.overlay, // Apply Header button styles
  },
  footerButtons: {
    ...FooterButtonStyles.container, // Apply Footer button styles
  },

  // Add other styles as needed
});

export default VideoCardStyling;
