import { connectDatabaseEmulator, getDatabase, ref } from "firebase/database";
import app from "./base";

export const db = getDatabase();
// connectDatabaseEmulator(db, "localhost", 9000);
export const dbref = ref(db);
