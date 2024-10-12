import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../../config/firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ShadCN components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define types for user registration data
interface RegistrationData {
  firstName: string;
  lastName: string;
  gender: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        console.log("Email is verified");

        const registrationData: RegistrationData | null = localStorage.getItem("registrationData")
          ? JSON.parse(localStorage.getItem("registrationData") as string)
          : null;

        const { firstName = "", lastName = "", gender = "" } = registrationData || {};

        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          console.log("User document does not exist, creating...");
          await setDoc(doc(firestore, "users", user.uid), {
            firstName,
            lastName,
            gender,
            email: user.email,
          });

          localStorage.removeItem("registrationData");
        } else {
          console.log("User document already exists");
        }

        console.log("Redirecting to dashboard...");
        navigate("/survey");
      } else {
        setError("Please verify your email before logging in.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
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
          <CardTitle className="text-center text-xl text-gray-800">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.form
            onSubmit={handleLogin}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
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
            <Button type="submit" className="w-full">
              Login
            </Button>
          </motion.form>
          <p className="text-sm font-medium text-gray-600 mt-5 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-700 hover:underline">
              Register Here
            </Link>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Login;
