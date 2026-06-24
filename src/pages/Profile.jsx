import {
  useState,
} from "react";

import Navbar from "../components/Navbar";

import API from "../api/profileApi";

const Profile = () => {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [image, setImage] =
    useState(null);
const submitProfile =
async (e) => {

  e.preventDefault();

  if (
    !name ||
    !email ||
    !image
  ) {

    alert(
      "Fill all fields"
    );

    return;
  }

  const formData =
    new FormData();

  formData.append(
    "name",
    name
  );

  formData.append(
    "email",
    email
  );

  formData.append(
    "image",
    image
  );

  try {

    const res = await API.post("/upload", formData);

    console.log(
      res.data
    );

    alert(
      "Profile Uploaded"
    );

  } catch (error) {

    console.log(
      error.response?.data
    );
  }
};

  return (
    <div className="min-h-screen bg-[#141414]">

      <Navbar />

      <div className="p-8">

        <h1 className="text-white text-3xl font-bold mb-6">
          Profile
        </h1>

        <form
          onSubmit={
            submitProfile
          }
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>
              setName(
                e.target.value
              )
            }
            className="w-full p-3 rounded mb-4 bg-zinc-800 text-white border border-zinc-700"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>
              setEmail(
                e.target.value
              )
            }
            className="w-full p-3 rounded mb-4 bg-zinc-800 text-white border border-zinc-700"
          />

          <input
            type="file"
            onChange={(e)=>
              setImage(
                e.target.files[0]
              )
            }
          />

          <button
            className="bg-red-600 text-white px-6 py-3 rounded"
          >
            Upload
          </button>

        </form>

      </div>

    </div>
  );
};

export default Profile;