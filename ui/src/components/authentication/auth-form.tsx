import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; 
import  { useState, useEffect } from 'react';
import { auth, provider } from '../../../config/firebase.config'; // Assuming firebase config path
import { signInWithPopup } from 'firebase/auth';

const MyForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  // Handle navigation to login or register pages
  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  // Handle Google Sign-In logic
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const email = data.user?.email || "";
        setValue(email);
        localStorage.setItem("email", email);
        console.log("Signed in with Google:", email);
      })
      .catch((error) => {
        console.error("Google Sign-In error:", error);
      });
  };

  // UseEffect to retrieve email from localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email") || "";
    setValue(storedEmail);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="items-center h-screen w-screen flex flex-col"
      >
        <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 h-96 border border-black flex flex-col">
          <h2 className="text-center text-2xl font-bold mb-6">Survey Response</h2>
          <div className="flex flex-col mt-auto space-y-4">
            {/* Check if user is signed in, otherwise show sign-in buttons */}
            {value ? (
              <h3 className="text-center text-xl font-semibold">Welcome, {value}!</h3>
            ) : (
              <>
                <Button className="w-full" onClick={() => handleButtonClick('/login')}>
                  Login
                </Button>
                <Button className="w-full" onClick={() => handleButtonClick('/register')}>
                  Register
                </Button>
                {/* Google Sign-In Button */}
                <Button
                  className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 rounded-md"
                  onClick={handleGoogleSignIn}
                >
                  <FcGoogle className="text-2xl" /> {/* Google Icon */}
                  <span>Sign in with Google</span>
                </Button>
              </>
            )}
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default MyForm;
