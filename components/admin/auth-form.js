import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

async function Login(username, password) {
  let loggedIn = false;

  const axios = require("axios");

  const sha256 = require("sha256");
  const hashedPassword = sha256(username + password);

  const user = {
    username,
    password: hashedPassword,
  };

  const response = await axios.post("/api/admin", user);

  if (!response) {
    throw new Error("login error");
  }

  if (response.status === 200) {
    console.log("Yes Logged In!");
    loggedIn = true;
  }

  return loggedIn;
}

function AuthForm() {
  const router = useRouter();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const loggedIn = await Login(
      usernameInputRef.current.value,
      passwordInputRef.current.value
    );

    if (loggedIn) {
      router.push("/");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <motion.div className="bg-white rounded-xl flex flex-col items-end text-xl">
        <div className="flex-1 flex-row p-5 ">
          <label className="p-5 mr-2 font-bold" htmlFor="username">
            Username
          </label>
          <input
            className="px-5 pt-5 pb-1 border-b-2 border-black"
            type="text"
            id="username"
            placeholder="type username"
            required
            minLength={5}
            maxLength={12}
            ref={usernameInputRef}
          />
        </div>
        <div className="flex-1 flex-row p-5">
          <label className="p-5 mr-2 font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="px-5 pt-5 pb-1 border-b-2 border-black"
            type="password"
            id="password"
            placeholder="type password"
            minLength={8}
            maxLength={12}
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="flex-1 mr-52 p-2 mb-5 bg-white border-2 border-gray rounded-2xl">
          <button type="submit">Log in</button>
        </div>
      </motion.div>
    </form>
  );
}

export default AuthForm;
