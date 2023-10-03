import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { firestore } from '../../firebase';

// Define a type for the video document
export interface VideoStore {
  id: string;
  title: string;
  videoUrl: string;
  // Add other properties as needed
}

// Create (Add) Data
export const addVideoToFirestore = async (videoData: VideoStore): Promise<string> => {
  try {
    const docRef = await addDoc(collection(firestore, 'videos'), videoData);
    console.log('Video document added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding video document:', error);
    throw error;
  }
};

// Read Data
export const fetchVideosFromFirestore = async (): Promise<VideoStore[]> => {
  try {
    const videoCollection = collection(firestore, 'videos');
    const videoData = await getDocs(videoCollection);
    return videoData.docs.map((doc) => doc.data()) as VideoStore[];
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

// Update Data
export const updateVideoInFirestore = async (videoId: string, updatedData: Partial<VideoStore>): Promise<void> => {
  try {
    const videoRef = doc(firestore, 'videos', videoId);
    await updateDoc(videoRef, updatedData);
    console.log('Video document updated successfully');
  } catch (error) {
    console.error('Error updating video document:', error);
    throw error;
  }
};

// Delete Data
export const deleteVideoFromFirestore = async (videoId: string): Promise<void> => {
  try {
    const videoRef = doc(firestore, 'videos', videoId);
    await deleteDoc(videoRef);
    console.log('Video document deleted successfully');
  } catch (error) {
    console.error('Error deleting video document:', error);
    throw error;
  }
};