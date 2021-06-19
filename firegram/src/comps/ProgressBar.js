import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {

  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])
  
  return (
    // style={{ width: progress + '%'}} was in div
    <motion.div className="progress-bar" 
      initial={{ width:0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar;