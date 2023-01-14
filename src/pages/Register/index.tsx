import * as firebase from "firebase/app";
import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth";
import "firebase/storage";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  connectStorageEmulator,
} from "firebase/storage";
import React, { FormEvent, useState } from "react";
import app from "../../firebase/base";
import {
  connectDatabaseEmulator,
  getDatabase,
  ref as dbref,
  set,
} from "firebase/database";
import { auth } from "../../firebase/Auth";
import { storageRef } from "../../firebase/Storage";
import { db } from "../../firebase/Database";

type UserData = {
  FirstName: string;
  LastName: string;
  userID: string;
  userName: string;
  department: string[];
  email: string;
  profilePic: string;
  status: string;
};

function writeUserData(data: UserData) {
  set(dbref(db, "users/" + data.userID), data)
    .then(() => {
      console.log("user data written");
    })
    .then(() => {
      console.log("user data written");
    });
}

const uploadFile = async (file: File, userData: UserData) => {
  // Create a child reference
  const profilePicRef = ref(
    storageRef.storage,
    `profile-pics/${userData.userID}`
  );
  // Upload file and metadata to the object 'images/mountains.jpg'
  const uploadTask = uploadBytesResumable(profilePicRef, file);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        case "success":
      }
    },

    (error) => {
      console.log(error);
    },

    async () => {
      // Upload completed successfully, now we can get the download URL
      const ImageLink = await getDownloadURL(uploadTask.snapshot.ref);
      userData.profilePic = ImageLink;
      writeUserData(userData);
    }
  );
};

function RegisterForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = Object.fromEntries(data.entries());
    userData.department = data.getAll("department");
    const profilePic = userData.profilePic;
    delete userData.profilePic;
    createUserWithEmailAndPassword(
      auth,
      userData.email.toString(),
      userData.password.toString()
    )
      .then(async (userCredential) => {
        // Signed in
        console.log(userCredential.user.uid);
        const dbRef = dbref(getDatabase(), "users/" + userCredential.user.uid);
        userData.userID = userCredential.user.uid;
        await uploadFile(profilePic, userData);
        console.log("user data written");
        console.log(event);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="login-box">
        <h1>Register New User</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="text"
              name="firstName"
              className="login-input"
              placeholder="First Name"
              id="login-input"
            />
            <input
              type="text"
              name="lastName"
              className="login-input"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            name="userName"
            className="login-input"
            placeholder="User Name"
          />
          <input
            name="email"
            className="login-input"
            type="text"
            placeholder="Email"
            id="login-input"
          />
          <input
            name="password"
            className="login-input"
            type="password"
            placeholder="Password"
            id="login-input"
          />
          <input
            type="text"
            name="status"
            className="login-input"
            placeholder="Current Status"
          />
          <label
            htmlFor="profilePic"
            className="FileUpload"
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <span>Profile Pic:</span>
            <span
              style={{
                background: "#63c4ff",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
              }}
              id="login-button"
            >
              Upload
            </span>
            <input
              id="profilePic"
              style={{ display: "none" }}
              type="file"
              name="profilePic"
              placeholder="Profile Pic"
            />
          </label>

          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h2>Department:</h2>
            <div
              style={{
                marginLeft: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  name="department"
                  value="CyberSecurity"
                />
                CyberSecurity
              </label>
              <label>
                <input
                  type="checkbox"
                  name="department"
                  value="Web Development"
                />
                Web Development
              </label>
              <label>
                <input type="checkbox" name="department" value="R&D" />
                R&D
              </label>
              <label>
                <input type="checkbox" name="department" value="Design" />
                Design
              </label>
            </div>
          </div>
          <br />
          <button type="submit" id="login-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
