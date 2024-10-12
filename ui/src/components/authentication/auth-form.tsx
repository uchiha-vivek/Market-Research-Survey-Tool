import { Button } from '@/components/ui/button';
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const MyForm = () => {

  const navigate = useNavigate()

  const handleButtonClick = (path:string) => {
      navigate(path)
  };

  

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
      <Button className="w-full" onClick={() => handleButtonClick('/login') }>
        Login
      </Button>
      <Button className="w-full" onClick={() => handleButtonClick('/register') }>
        Register
      </Button>
    </div>
  </form>
</motion.div>


    

     </>
  );
};

export default MyForm;
