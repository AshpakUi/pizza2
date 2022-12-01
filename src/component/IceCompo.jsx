import { motion } from "framer-motion";
import Icecream from "../Images/Icecream.avif";
import cone from "../Images/cone.avif";

export default function IceCompo({ data }) {
  return (
    <div style={{maxWidth:"400px",display:"flex"}}>
      <motion.div
        animate={{
          x: 0,
          y: data["Icecream"] ? 0 : -600,
          scale: 1,
          rotate: 20,
        }}
      >
        <img
          src={Icecream}
          alt=""
          style={{ zIndex: 1, borderRadius: "10px" }}
          height="90%"
          width="90%"
        />
      </motion.div>

      <motion.div    
        animate={{
          x: 0,
          y: data["cone"] ? 0 :-600,
          scale: 1,
          rotate: 20,
        }}  
      >
        <img
          src={cone}
          alt=""
          style={{ zIndex: 2, borderRadius: "10px" }}
          height="90%"
          width="90%"
        />
      </motion.div>
    </div>
  );
}
