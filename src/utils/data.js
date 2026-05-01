import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import profile_pic from "../assets/images/profile-pic.jpg";
import moodboard_img from "../assets/images/moodboard.png";
import riteup_img from "../assets/images/riteup.png";
import sentiment_img from "../assets/images/sentiment.png";
import livelybrews_img from "../assets/images/livelybrews.png";
import resumate_img from "../assets/images/resumate.png";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            {name: "React.js", level: 90, color: "bg-[#D4A373]" },
            {name: "Next.js", level: 82, color: "bg-[#BC6C25]" },
            {name: "TypeScript", level: 80, color: "bg-[#606C38]" },
            {name: "Tailwind CSS", level: 88, color: "bg-[#A98467]" },
            {name: "Framer Motion", level: 78, color: "bg-[#DDB892]" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building scalable APIs and server-side systems",
        skills: [
            {name: "Node.js", level: 88, color: "bg-[#D4A373]" },
            {name: "Express.js", level: 85, color: "bg-[#BC6C25]" },
            {name: "Python", level: 80, color: "bg-[#606C38]" },
            {name: "REST APIs", level: 90, color: "bg-[#A98467]" },
            {name: "JWT Auth", level: 85, color: "bg-[#DDB892]" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage solutions",
        skills: [
            {name: "MongoDB", level: 85, color: "bg-[#D4A373]" },
            {name: "MySQL", level: 80, color: "bg-[#BC6C25]" },
            {name: "PostgreSQL", level: 75, color: "bg-[#606C38]" },
            {name: "Firebase", level: 75, color: "bg-[#A98467]" },
            {name: "Redis", level: 70, color: "bg-[#DDB892]" },
        ],
    },
    {
        title: "DevOps & Tools",
        icon: Cloud,
        description: "Deploying and maintaining production applications",
        skills: [
            {name: "Git & GitHub", level: 90, color: "bg-[#D4A373]" },
            {name: "Docker", level: 75, color: "bg-[#BC6C25]" },
            {name: "AWS", level: 72, color: "bg-[#606C38]" },
            {name: "Vercel", level: 88, color: "bg-[#A98467]" },
            {name: "CI/CD", level: 75, color: "bg-[#DDB892]" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
    "REST APIs",
];

export const STATS = [
    {number: "5+", label: "Projects Completed" },
    {number: "2+", label: "Years of Experience" },
    {number: "15+", label: "Technologies" },
    {number: "100%", label: "Passion for Code" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "MoodBoard",
        description: "A full stack team wellness & productivity tracker for modern hybrid teams. Features daily mood check-ins, manager dashboard with analytics, JWT authentication, real-time updates and dark/light mode.",
        image: moodboard_img,
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Recharts"],
        liveUrl: "https://moodboard-gold.vercel.app/",
        githubUrl: "https://github.com/sravanipamarthi/moodboard",
        featured: true,
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Rite-up",
        description: "A full stack social media platform where users can create posts, follow others, and engage with content in real time.",
        image: riteup_img,
        tags: ["React", "HTML/CSS", "JavaScript"],
        liveUrl: "https://rite-up.vercel.app/",
        githubUrl: "https://github.com/sravanipamarthi/rite-up",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 3,
        title: "Twitter Sentiment Analysis",
        description: "An ML project that analyzes tweet sentiment in real time. Deployed an interactive web application using Streamlit and Hugging Face Spaces for live inference.",
        image: sentiment_img,
        tags: ["Scikit-learn", "Streamlit", "Hugging Face"],
        liveUrl: "https://huggingface.co/spaces/sravanipamarthi/twitter-sentiment-analysis",
        githubUrl: "https://github.com/sravanipamarthi/sentiment-analysis-ml",
        featured: false,
        category: "ML",
    },
    {
        id: 4,
        title: "ResuMate",
        description: "An AI-powered resume analyzer built with React, Node.js and Groq AI. Upload your resume and get instant scores, keyword analysis, strengths, improvements and personalized suggestions.",
        image: resumate_img,
        tags: ["React", "Node.js", "Groq AI", "Express", "MongoDB"],
        liveUrl: "https://resumate-coral.vercel.app/",
        githubUrl: "https://github.com/sravanipamarthi/resumate",
        featured: true,
        category: "AI",
    },
    {
        id: 5,
        title: "Lively Brews",
        description: "A high-performance animated cafe landing page built to explore advanced UI/UX patterns with state-driven animations and a clean modern aesthetic.",
        image: livelybrews_img,
        tags: ["React", "Tailwind", "Framer Motion", "Vercel"],
        liveUrl: "https://lively-brew.vercel.app/",
        githubUrl: "https://github.com/sravanipamarthi/lively-brews",
        featured: false,
        category: "Frontend",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2020",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Discovered my passion for coding and began learning programming fundamentals, building small projects to understand how software works.",
        icon: Code2,
        color: "bg-[#2D241E]",
    },
    {
        year: "2022",
        title: "Internship at DRDO",
        company: "DRDO - India",
        description: "Got an incredible opportunity to work at India's Defence Research and Development Organisation, gaining real-world engineering experience.",
        icon: Briefcase,
        color: "bg-[#D6C7B1]",
    },
    {
        year: "2022",
        title: "Bachelor's Degree",
        company: "NRI Institute of Technology",
        description: "Graduated with a Bachelor's degree in Computer Science, specializing in software engineering and building a strong technical foundation.",
        icon: GraduationCap,
        color: "bg-[#7B3F00]",
    },
    {
        year: "2022",
        title: "Software Engineer",
        company: "Wipro Technologies",
        description: "Joined Wipro as a Software Engineer, working on enterprise-level applications and collaborating with global teams on real production systems.",
        icon: Award,
        color: "bg-[#A89078]",
    },
    {
        year: "2023",
        title: "Master's Journey Begins",
        company: "SUNY New Paltz",
        description: "Moved to the US to pursue a Master's degree, deepening expertise in full stack development, machine learning and modern software practices.",
        icon: Rocket,
        color: "bg-[#926239]",
    },
    {
        year: "2024",
        title: "Software Engineering Intern",
        company: "Wise Assistant",
        description: "Worked as a Software Engineering Intern, contributing to AI-powered products and gaining hands-on experience with modern tech stacks.",
        icon: Zap,
        color: "bg-[#CDBEAB]",
    },
    {
        year: "2025",
        title: "Master's Degree & Job Search",
        company: "SUNY New Paltz",
        description: "Graduated with a Master's degree in Computer Science and actively seeking full stack developer opportunities to make a real impact.",
        icon: GraduationCap,
        color: "bg-[#6B5E4F]",
    },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/sravanipamarthi",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/sravani-pamarthi/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:pamarthisravani18@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "New Paltz, NY",
    },
    {
        icon: Mail,
        label: "Email",
        value: "pamarthisravani18@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (973) 317-3665",
    },
];