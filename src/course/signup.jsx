import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import React from "react";
import { auth } from "../../config";

function Signup() {
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const takeit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, Username, Password);
    } catch (err) {
      console.error("error");
    }
  };

  return (
    <div className="min-h-screen bg-cyan-400 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
      <form
        onSubmit={takeit}
        className="bg-white dark:bg-gray-800 dark:text-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="flex flex-col gap-6">
          <div>
            <label className="font-bold text-lg block mb-2">Enter your email</label>
            <input
              type="email"
              value={Username}
              placeholder="example@gmail.com"
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-lg block mb-2">Enter your password</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition duration-200"
            >
              <Link to="/">Sign up</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
