import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-6">
      {/* Facebook Logo */}
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/archive/8/89/20200802174122%21Facebook_Logo_%282019%29.svg"
        width={200} // Adjusted width for similar size
        height={60} // Adjusted height for similar size
        alt="Facebook Logo"
      />
      {/* Login Button */}
      <button
        onClick={() => signIn()}
        className="px-16 py-3 text-lg bg-blue-500 rounded-md text-white hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
