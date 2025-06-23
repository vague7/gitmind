/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "gitmindai-75dfe.firebaseapp.com",
  projectId: "gitmindai-75dfe",
  storageBucket: "gitmindai-75dfe.firebasestorage.app",
  messagingSenderId: "53597747112",
  appId: "1:53597747112:web:35f79fcf27f41e5f894f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file: File, setProgress?: (progress: number) => void) {
    return new Promise((resolve, reject) => {
        try {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
                if (setProgress) setProgress(progress);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused'); break;
                    case 'running':
                        console.log('Upload is running'); break;
                }
            }, error => {
                reject(error);
            }, () => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
                    resolve(downloadUrl)
                })
            })

        } catch (error) {
            console.error(error)
            reject(error);
        }
    })
}