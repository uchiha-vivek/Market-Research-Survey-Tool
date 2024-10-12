import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../../config/firebase.config";
import { motion } from "framer-motion";

// Define the type for the registration data stored in localStorage
interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null); // Added message state

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null); // Reset message when form is submitted

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);

      const registrationData: RegistrationData = {
        firstName,
        lastName,
        email,
      };

      localStorage.setItem("registrationData", JSON.stringify(registrationData));

      setMessage("Registration successful! Please check your email for verification.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "An unknown error occurred!");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="items-center h-screen w-screen flex flex-col"
    >
      <Card className="w-96 p-6 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-xl text-gray-800">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.form
            onSubmit={handleRegister}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="text-sm font-medium block mb-2 text-gray-600"
              >
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Enter your firstname"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="text-sm font-medium block mb-2 text-gray-600"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Enter your lastname"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-sm font-medium block mb-2 text-gray-600"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-sm font-medium block mb-2 text-gray-600"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium block mb-2 text-gray-600"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
            {error && (
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-red-500 text-sm mb-4"
              >
                {error}
              </motion.p>
            )}
            {message && (
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-green-500 text-sm mb-4"
              >
                {message}
              </motion.p>
            )}
            <Button type="submit" className="w-full">
              Register
            </Button>
          </motion.form>
          <p className="text-sm font-medium text-gray-600 mt-5 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Login Here
            </Link>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RegisterPage;
