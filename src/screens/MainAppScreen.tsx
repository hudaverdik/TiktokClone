import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { User } from "firebase/auth";
import { useVideoContext } from "../context/VideoContext";
import VideoCard2 from "../components/VideoCard2";
import OverlayButtons from "../components/OverlayButtons";
import FooterButtons from "../components/FooterButtons";
import HeaderButtons from "../components/HeaderButtons";

interface MainAppScreenProps {
  user: User | null;
  handleLogout: () => Promise<void>;
  onVideoPress: (video: Video) => void; // Add a callback for when a video is pressed
}

interface Video {
  id: string;
  title: string;
  description: string;
  user: {
    name: string;
    profilePicture: string;
  };
  thumbnail: string;
  likes: number;
  comments: number;
}

const MainAppScreen: React.FC<MainAppScreenProps> = ({
  user,
  handleLogout,
  onVideoPress,
}) => {
  const { videos } = useVideoContext();

  // New useEffect for handling videos from the context
  useEffect(() => {
    console.log("MainAppScreen rendered with videos from context:", videos);
    // Add any specific actions you want to perform when videos change
  }, [videos]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      
      <VideoCard2 videoSource={videos[0].videoUrl} />
      <HeaderButtons />
      <OverlayButtons />
      {/* {user && (
        <Button
          title="Logout"
          onPress={() => {
            console.log("Logout button pressed.");
            handleLogout();
          }}
        />
      )} */}
      <FooterButtons />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Set a dark background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff", // Set text color to white
    paddingHorizontal: 16, // Add horizontal padding
  },
});

export default MainAppScreen;
