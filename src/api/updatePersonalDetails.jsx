import { firestore } from "../services/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

async function updatePersonalDetails(uid, name, username, bio = "") {
  const searchUsername = await query(
    collection(firestore, "users"),
    where("username", "==", username)
  );
  const querySnapshot = await getDocs(searchUsername);
  if (!querySnapshot.empty) {
    return {
      success: false,
      error: alert("Username is already taken"),
    };
  }
  const userRef = doc(firestore, "users", uid);
  await updateDoc(userRef, {
    name,
    username,
    bio,
  });

  return {
    success: true,
  };
}

export default updatePersonalDetails;
