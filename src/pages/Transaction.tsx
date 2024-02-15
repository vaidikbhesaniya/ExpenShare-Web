import { motion } from "framer-motion";
import Sidebar from "../components/SideBar";
import Addtransaction from "./Addtransaction";
import add from "../assets/addButton.png";
import { useRef, useState } from "react";
const Transaction = () => {
  const myref = useRef<HTMLDivElement>(null);
  const [isclick, setisclick] = useState(false);
  const changepage = () => {
    if (myref.current) {
      myref.current.style.top = "0%";
      setisclick(!isclick);
    }
  };
  const changepage2 = () => {
    if (myref.current) {
      myref.current.style.top = "150%";
      setisclick(!isclick);
    }
  };
  const props = {
    myref,
    changepage2,
  };
  return (
    <div className="transactionpage">
      <Sidebar />
      <Addtransaction {...props} />
      <div className="e">
        <motion.div className="add">
          <img src={add} alt="" className="ad" onClick={changepage} />
        </motion.div>
        <p>transaction </p>
      </div>
    </div>
  );
};

export default Transaction;
