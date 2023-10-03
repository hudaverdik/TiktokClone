import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Button } from "react-native";
import { Auth, User, signOut } from "firebase/auth"; // Import the Auth, User, and signOut from Firebase

interface VideoItem {
  id: string;
  videoUrl: string;
  // Add other properties as needed
}

interface MainAppScreenProps {
  user: User | null; // Add a user prop to receive the user information
  handleLogout: () => Promise<void>; // Add a handleLogout prop to handle user logout
}

const MainAppScreen: React.FC<MainAppScreenProps> = ({ user, handleLogout }) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    // Create some dummy video data (replace with your actual data)
    const dummyVideos: VideoItem[] = [
      {
        id: "1",
        videoUrl: "https://example.com/video1.mp4",
      },
      {
        id: "2",
        videoUrl: "https://example.com/video2.mp4",
      },
      // Add more dummy videos as needed
    ];

    setVideos(dummyVideos);
  }, []);

  const playVideo = (videoItem: VideoItem) => {
    // Implement video playback logic here
    console.log("Playing video:", videoItem);
    // Example: You might use the VideoPlayer library to play the video
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Explore Videos</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => playVideo(item)}>
            {/* Use a dummy video player component */}
            <View style={styles.video}>
              <Text>Video Thumbnail</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {user && <Button title="Logout" onPress={handleLogout} />}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9, // Adjust the aspect ratio as needed
    marginBottom: 16,
    backgroundColor: "#ccc", // Add a background color for the video container
    alignItems: "center", // Center content
    justifyContent: "center", // Center content
  },
});

export default MainAppScreen;
