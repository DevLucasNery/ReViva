import { RiVoiceprintFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function IconeAnimado() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1], 
      }}
      transition={{
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut", 
      }}
      className="text-branco text-2xl"
    >
      <RiVoiceprintFill />
    </motion.div>
  );
}
