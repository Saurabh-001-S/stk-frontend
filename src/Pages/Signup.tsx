import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputBox,
  Heading,
  SubHeading,
  Button,
  BottomWarning,
} from "../Component";
import axios from "axios";
const URL = "https://stock-bck.onrender.com/api/v1";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [credError, setCredError] = useState();
  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/userRoute/signup`, {
        name: name,
        username: username,
        password: password,
      });
      if (res.status == 200) {
        localStorage.setItem("token", `Bearer ${res.data.token}`);
        navigate("/");
      }
    } catch (err: any) {
      setCredError(err.response.data.msg);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 px-6 py-8">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <p className="text-sm text-red-600">{credError}</p>
          <form>
            <InputBox
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              label={"Name"}
              type="text"
            />
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
              label={"Username"}
              type="text"
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              label={"Password"}
              type="password"
            />
            <div className="pt-4">
              <Button
                // @ts-ignore
                onClick={submitForm}
                label={"Sign up"}
              />
            </div>
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign In"}
              to={"/signin"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
