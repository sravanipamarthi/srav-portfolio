import React from 'react'
import { useRef } from 'react';
import {motion, useInView, useScroll, useTransform} from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { JOURNEY_STEPS, PASSIONS } from '../../utils/data';

import SIGNATURE from '../../assets/images/signature.jpg';

import { containerVariants, itemVariants } from '../../utils/helper';

const AboutSection = () => {

    const { isDarkMode } = useTheme ();
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    const isInView = useInView(sectionRef, {once: true, margin: "-100px"});
    const timelineInView = useInView(timelineRef, {
        once: true,
        margin: "-50px",
    });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const stepVariants = {
        hidden: { x: -50, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return <section
        id="about"
        ref={sectionRef}
        className={`py-24 px-6 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } relative overflow-hidden`}
    >
        {/* Background Elements */}
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
            <div
                className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${
                    isDarkMode ? "bg-[#7B3F00]" : "bg-[#5C2F00]"
                }`}
            />
            <div
                className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
                    isDarkMode ? "bg-[#D6C7B1]" : "bg-[#B8A993]"
                }`}
            />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.div 
                        variants={itemVariants}
                        className={`text-sm uppercase tracking-widest ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                        } mb-4` }
                    >
                        Get to Know Me
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-light mb-6"
                    >
                        About
                        <span className="text-[#7B3F00] font-medium" > Me</span>
                    </motion.h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 item-start">
                    {/* Personal Story */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className={`p-8 rounded-2xl border ${
                                isDarkMode ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm" 
                                : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                            }`}
                        >
                            <h3 className="text-2xl font-medium mb-6">My Mission</h3>
                            <p
                                className={`text-lg leading-relaxed mb-6 ${
                                    isDarkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                            >
                                I recently finished my Master’s in Computer Science at SUNY New Paltz, and honestly, 
                                I just love figuring out how complex systems actually work under the hood. For me, 
                                the best part of engineering is the challenge of taking a logical problem and turning 
                                it into something functional that people can actually use. I've been spending most of 
                                my time working with the MERN stack and Python, always trying to keep my code clean 
                                and secure. I’m still learning every day, but I’m really driven by the idea of building 
                                software that isn't just a quick fix, but something that’s built to last.
                            </p>
                            <p 
                                className={`text-base leading-relaxed ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                            >
                                My mission is pretty simple, I want to take the concepts I studied during my Master’s 
                                and use them to build software that actually makes sense for the people using it. 
                                I really enjoy the process of taking a messy, complicated problem and figuring out 
                                how to turn it into a clean, working system. I’m always trying to learn better ways 
                                to code and keep up with new tools, but at the end of the day, I just want to build 
                                web apps that are solid, fast, and actually solve the problem they were meant to.
                            </p>
                        </motion.div>
                        
                        {/* What I love Building */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h3 className="text-xl font-medium mb-6">What I love Building</h3>
                            <div className="grid gap-4">
                                {PASSIONS.map((passion, index) => (
                                    <motion.div
                                        key={passion.title}
                                        variants={itemVariants}
                                        whileHover={{ x: 4 }}
                                        className={`flex items-center space-x-4 p-4 rounded-full ${
                                            isDarkMode ?
                                            "bg-gray-800/30 hover:bg-gray-800/50"
                                            : "bg-gray-50/50 hover:bg-gray-100/50"
                                        } transition-all duration-300`}
                                    >
                                        <div
                                            className={`p-3 rounded-lg ${
                                                isDarkMode ? "bg-gray-700" : "bg-white"
                                            }`}
                                        >
                                            <passion.icon size={20} className="text-[#7B3F00]" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">{passion.title}</h4>
                                            <p
                                                className={`text-sm ${
                                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                                }`}
                                            >
                                                {passion.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Digital Signature */}
                        <motion.div variants={itemVariants} className="text-center py-8">
                            <div
                                className={`text-sm ${
                                    isDarkMode ? "text-gray-500" : "text-gray-600"
                                } mb-4`}
                            >
                                Crafted with passion by
                            </div>
                            {/* Digital Signature */}
                            <div className="flex justify-center">
                                <img src={SIGNATURE} alt="Alex" className="w-28" />
                            </div>
                            <div className="text-lg font-medium text-[#7B3F00] mt-2">
                                Sravani Pamarthi
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    {/* Developer Journey TimeLine */}
                    <motion.div
                        ref={timelineRef}
                        initial="hidden"
                        animate={timelineInView ? "visible" : "hidden"}
                        variants={timelineVariants}
                        className="relative"
                    >
                        <h3 className="text-2xl font-medium mb-8 text-center lg:text-left" >My Engineering Journey</h3>

                        {/* Timeline Line */}
                        <div 
                            className={`absolute left-8 top-16 bottom-0 w-px ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-300"
                            }`}
                        />

                        <div className="space-y-8">
                            {JOURNEY_STEPS.map((step, index) => (
                                <motion.div
                                    key={step.year}
                                    variants={stepVariants}
                                    whileHover={{ x: 4 }}
                                    className="relative flex items-start space-x-6 group"
                                >
                                    {/* Timeline Dot */}
                                    <div
                                        className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <step.icon size={24} className="text-white" />
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                                            isDarkMode ?
                                            "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                                            : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                                        } backdrop-blur-sm`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-xl font-medium">{step.title}</h4>
                                            <span
                                                className={`text-sm px-3 py-1 rounded-full ${
                                                    isDarkMode ? "bg-gray-700 text-gray-300"
                                                    : "bg-gray-100 text-gray-700"
                                                }`}
                                            >
                                                {step.year}
                                            </span>
                                        </div>
                                        <div 
                                            className={`text-sm font-medium ${
                                                isDarkMode ? "text-[#7B3F00]" : "text-[#5C2F00]"
                                            } mb-3`}
                                        >
                                            {step.company}
                                        </div>
                                        <p 
                                            className={`text-sm leading-relaxed ${
                                                isDarkMode ? "text-gray-400" : "text-gray-600"
                                            }`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                </div>

                {/* Call to Action */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mt-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center space-y-6"
                    >
                       <p 
                            className={`text-lg ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            Ready to bring your ideas to life ?
                        </p>

                        <motion.button
                            whileHover={{ y: -2, scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#7B3F00] hover:bg-[#5C2F00] text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                        >
                            Let's Work Together
                        </motion.button>
                    </motion.div>
                </motion.div>
        </div>    
    </section>
};


export default AboutSection