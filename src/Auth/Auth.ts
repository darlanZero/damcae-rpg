import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

async function uploadPhoto(file: File): Promise<string> {
 
  const storageRef = ref(storage, 'profile_photos/' + file.name);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url
  
}

export async function HandleLogin(email: string, password: string) {
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user.email, user.uid, user.displayName, user.photoURL);
    } catch (error) {
      if (error instanceof Error) {
        const errorCode = error.name;
        const errorMessage = error.message;
        console.log(
          "Name Error:", errorCode, 
          "Message Error:", errorMessage
        );
        // Exiba a mensagem de erro para o usuário
      }
    }
  }

export async function HandleRegister(email: string, password: string, bio: string, name: string, photoPhile: File | null) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed in 
    const user = userCredential.user;
    const profileUpdates: ProfileUpdatesInterface = {
      displayName: name,
    }

    if (photoPhile) {
      const photoUrl = await uploadPhoto(photoPhile)
      profileUpdates.photoURL = photoUrl
    }

    await updateProfile(user, profileUpdates)
    await setDoc(doc(db, "users", user.uid), {
      name: profileUpdates.displayName,
      bio: bio
    })

  } catch (error ) {
    if (error instanceof Error) {
      const errorCode = error.name;
      const errorMessage = error.message;
      console.log(
        "Code Name:", errorCode, 
        "Message Error:", errorMessage
      );
      // Exiba a mensagem de erro para o usuário
    }
  }
}