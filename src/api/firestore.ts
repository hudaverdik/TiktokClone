import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '../../firebase'; // Import the Firebase Firestore instance (adjust the import path as needed)

// Define a reference to the 'caption' document
const captionDocument = doc(firestore, 'videos/GQV0L4ex55N1AZ7mqtoY/video/OEDExFUuAeTSEFRL9LNg/caption');

// Fetch caption document data
export const fetchCaptionDocumentData = async () => {
  try {
    const captionSnapshot = await getDoc(captionDocument);
    if (captionSnapshot.exists()) {
      const captionData = captionSnapshot.data();
      return captionData;
    } else {
      console.error('Caption document does not exist.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching caption document data:', error);
    throw error;
  }
};

// Update caption document data
export const updateCaptionDocumentData = async (updatedData: Partial<any>) => {
  try {
    await setDoc(captionDocument, updatedData, { merge: true });
    console.log('Caption document updated successfully.');
  } catch (error) {
    console.error('Error updating caption document data:', error);
    throw error;
  }
};

// Delete caption document
export const deleteCaptionDocument = async () => {
  try {
    await deleteDoc(captionDocument);
    console.log('Caption document deleted successfully.');
  } catch (error) {
    console.error('Error deleting caption document:', error);
    throw error;
  }
};
