"use client"

import { motion } from 'framer-motion';
import React from "react";
import EmailForm from './EmailForm';

function HeroSection() {
    
    return (
        <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
            <h1 className="hero-title">
                Integrate AI Throughout Your Workflow
            </h1>
            <h2 className="hero-subtitle">Code Doctor</h2>
            <p className="hero-description">
                Make processes where AI collaborates with your team throughout
                the whole development process.
            </p>
            <div className="email-input-wrap">
                <EmailForm/>
            </div>
          <img src="/assets/img/hero-img.png" alt="hero image" className="hero-img" />

        </motion.div>
        </>
    );
}

export default HeroSection;
