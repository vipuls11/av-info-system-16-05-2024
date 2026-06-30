import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 px-6 pt-24 pb-12">
      {/* Animated Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center p-8 sm:p-12 lg:p-16 bg-white/70 backdrop-blur-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] sm:rounded-[3rem]"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <h1 className="text-7xl sm:text-[10rem] md:text-[12rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-primary-700 to-primary-400 drop-shadow-xl select-none">
            404
          </h1>
        </motion.div>
        
        <div className="relative z-20 mt-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Oops! Connection Lost.
          </h2>
          <p className="text-slate-500 mb-10 text-lg max-w-md mx-auto leading-relaxed">
            The page you are looking for has vanished into the digital void. It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl shadow-slate-900/20 transform hover:-translate-y-1"
            >
              <i className="fa-solid fa-house mr-3 text-primary-400"></i>
              Back to Home
            </Link>
            <Link
              to="/contact-us"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              <i className="fa-solid fa-headset mr-3 text-slate-400"></i>
              Contact Support
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
