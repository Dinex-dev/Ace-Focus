import app from "./base";
import { connectStorageEmulator, getStorage, ref } from "firebase/storage";

export const storage = getStorage(app);
// connectStorageEmulator(storage, "localhost", 9199);
export const storageRef = ref(storage);
