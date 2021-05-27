import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useStorage = (photo) => {
  //used to create a progress bar
  const [progress, setProgress] = useState(0);
  //error message that appears if the file can't be uploaded
  const [error, setError] = useState(null);
  //used to download the image
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // reference
    const storageRef = storage.ref(photo.name);

    storageRef.put(photo).on(
      "state_changed",
      //On every snapchot update the state with the progression
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      // return the error
      (err) => {
        setError(err);
      },
      //When the upload is complete, update the state with the image's download URL
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [photo]);

  return { progress, error, url };
};

export default useStorage;
