import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return <div className="flex flex-col justify-center items-center gap-1">
      <h1 className="text-xl font-bold">Amireza Sayadmiri</h1>
      <h1 className="text-xl font-bold mb-10">amirpplx0@gmail.com</h1>
      <Link to={"/account/profile"} className="bg-red-400 w-[300px] text-center p-2 rounded-md text-white hover:bg-red-500">Addresses</Link>
      <Link to={"/account/profile"} className="bg-red-400 w-[300px] text-center p-2 rounded-md text-white hover:bg-red-500">Change Password</Link>
      <Link to={"/account/profile"} className="bg-red-400 w-[300px] text-center p-2 rounded-md text-white hover:bg-red-500">Change Name</Link>
    </div>;
};

export default Profile;
