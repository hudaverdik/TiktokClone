import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of your video data
interface Video {
  id: string;
  videoUrl: string;
  username: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  title: string;
}

// Define the shape of your context
interface VideoContextData {
  videos: Video[];
  setVideos: (videos: Video[]) => void;
}

// Create the context
const VideoContext = createContext<VideoContextData | undefined>(undefined);

// Define a custom hook for using the context
export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};

// Create a provider component to wrap your app with the context
export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  // Assuming you have imported your dummy data correctly from 'dummyData.ts'

  useEffect(() => {
    // Assuming you have some logic to fetch or initialize videos data
    // For example, you can set initial data here
    const initialVideos: Video[] = [
      {
        id: '1',
        videoUrl: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
        username: 'user1',
        caption: 'Video 1',
        likes: 100,
        comments: 50,
        shares: 30,
        title: 'Video Title 1',
      },
      {
        id: '2',
        videoUrl: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
        username: 'user1',
        caption: 'Video 2',
        likes: 100,
        comments: 50,
        shares: 30,
        title: 'Video Title 1',
      },
      // Add more initial videos as needed
    ];

    setVideos(initialVideos);
  }, []);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};
