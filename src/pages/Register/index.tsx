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
} from "firebase/storage";
import React, { FormEvent, useState } from "react";
import app from "../../base";
import { getDatabase, ref as dbref, set } from "firebase/database";

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
  const db = getDatabase();
  set(dbref(db, "users/" + data.userID), data)
    .then(() => {
      console.log("user data written");
    })
    .then(() => {
      console.log("user data written");
    });
}

const uploadFile = async (file: File, userData: UserData) => {
  const storageRef = ref(getStorage());
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
      getAuth(app),
      userData.email.toString(),
      userData.password.toString()
    )
      .then(async (userCredential) => {
        // Signed in
        console.log(userCredential.user.uid);
        const dbRef = dbref(getDatabase(), "users/" + userCredential.user.uid);
        userData.userID = userCredential.user.uid;
        await uploadFile(profilePic, userData);
        event.currentTarget.reset();
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
            className="login-input"
            type="file"
            name="profilePic"
            placeholder="Profile Pic"
          />
          <input
            type="text"
            name="status"
            className="login-input"
            placeholder="Current Status"
          />

          <div>
            Department:
            <label>
              CyberSecurity
              <input type="checkbox" name="department" value="CyberSecurity" />
            </label>
            <label>
              Web Development
              <input
                type="checkbox"
                name="department"
                value="Web Development"
              />
            </label>
            <label>
              R&D
              <input type="checkbox" name="department" value="R&D" />
            </label>
            <label>
              Design
              <input type="checkbox" name="department" value="Design" />
            </label>
          </div>
          <button type="submit" id="login-button">
            Login
          </button>
        </form>
      </div>
    </>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     First Name :
    //     <input type="text" name="firstName" />
    //   </label>
    //   <br />
    //   <label>
    //     Last Name :
    //     <input type="text" name="lastName" />
    //   </label>
    //   <br />
    //   <label>
    //     Username:
    //     <input type="text" name="userName" />
    //   </label>
    //   <br />
    //   <label>
    //     Email:
    //     <input type="email" name="email" />
    //   </label>
    //   <br />
    //   <label>
    //     Department:
    //     {/* check boxes */}
    //     <label>
    //       CyberSecurity
    //       <input type="checkbox" name="department" value="CyberSecurity" />
    //     </label>
    //     <label>
    //       Web Development
    //       <input type="checkbox" name="department" value="Web Development" />
    //     </label>
    //     <label>
    //       R&D
    //       <input type="checkbox" name="department" value="R&D" />
    //     </label>
    //     <label>
    //       Design
    //       <input type="checkbox" name="department" value="Design" />
    //     </label>
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input type="password" name="password" />
    //   </label>
    //   <br />
    //   <label>
    //     Profile pic:
    //     <input type="file" name="profilePic" />
    //   </label>
    //   <br />
    //   <label>
    //     Status:
    //     <input type="text" name="status" />
    //   </label>
    //   <br />
    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default RegisterForm;
