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

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beauttiful, responsive user-web interfaces",
        skills: [
            {name: "React", level: 95, color: "bg-[#D4A373]" },
            {name: "TypeScript", level: 90, color: "bg-[#BC6C25]" },
            {name: "Next.js", level: 88, color: "bg-[#606C38]" },
            {name: "Tailwind CSS", level: 92, color: "bg-[#A98467]" },
            {name: "Framer Motion", level: 85, color: "bg-[#DDB892]" },
        ],
    },
    {
        title: "Backened",
        icon: Server,
        description: "Building scalable systems that power applications",
        skills: [
            {name: "Node.js", level: 90, color: "bg-[#D4A373]" },
            {name: "Express.js", level: 88, color: "bg-[#BC6C25]" },
            {name: "Python", level: 85, color: "bg-[#606C38]" },
            {name: "GraphQL", level: 80, color: "bg-[#A98467]" },
            {name: "REST APIs", level: 92, color: "bg-[#DDB892]" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Optimizing queries and maintaining reliable data models",
        skills: [
            {name: "MongoDB", level: 88, color: "bg-[#D4A373]" },
            {name: "MySQL", level: 91, color: "bg-[#BC6C25]" },
            {name: "Redis", level: 80, color: "bg-[#606C38]" },
            {name: "prisma", level: 82, color: "bg-[#A98467]" },
            {name: "Firebase", level: 78, color: "bg-[#DDB892]" },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Optimizing deployment pipelines and system reliability",
        skills: [
            {name: "Docker", level: 82, color: "bg-[#D4A373]" },
            {name: "AWS", level: 78, color: "bg-[#BC6C25]" },
            {name: "Vercel", level: 90, color: "bg-[#606C38]" },
            {name: "Git", level: 92, color: "bg-[#A98467]" },
            {name: "CI/CD", level: 75, color: "bg-[#DDB892]" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "Next.js,",
    "PostgreSQL",
    "TypeScript",
    "Node.js",
    "Docker",
    "Redis",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack",
];

export const STATS = [
    {number: "25+", label: "Projects Completed" },
    {number: "2+", label: "Years of Experience" },
    {number: "20+", label: "Technologies" },
    {number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Rite-up",
        description: "A full Stack social media platform",
        image: profile_pic,
        tags: ["React", "HTML/CSS", "Java Script"],
        liveUrl: "https://rite-up.vercel.app/",
        githubUrl: "https://github.com/sravanipamarthi/rite-up",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Sravani Pamarthi - Portfolio",
        description: "A personal portfolio of mine",
        image: profile_pic,
        tags: ["React", "Tailwind", "Framer motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 3,
        title: "Twitter-Sentiment Analysis",
        description: "An ML Project. Just worked on it to learn. Deployed an interactive web application using Streamlit and Hugging Face Spaces to provide real-time inference.",
        image: profile_pic,
        tags: ["Scikit-learn", "Streamlit", "Hugging Face Spaces"],
        liveUrl: "https://huggingface.co/spaces/sravanipamarthi/twitter-sentiment-analysis",
        githubUrl: "https://github.com/sravanipamarthi/sentiment-analysis-ml",
        featured: false,
        category: "ML",
    },
    /*{
        id: 4,
        title: "Rite-up",
        description: "A full Stack social media platform",
        image: profile_pic,
        tags: ["React", "Tailwind", "Framer motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 5,
        title: "Rite-up",
        description: "A full Stack social media platform",
        image: profile_pic,
        tags: ["React", "Tailwind", "Framer motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    */
    {
        id: 6,
        title: "Lively-Brews",
        description: "A high-performance, animated cafe landing page built to explore advanced UI/UX patterns. Deployed a responsive React application using Vercel and GitHub Actions, leveraging Framer Motion for state-driven animations and Tailwind CSS for a clean, modern aesthetic.",
        image: profile_pic,
        tags: ["React", "Tailwind", "Framer motion", "Vercel"],
        liveUrl: "https://lively-brew.vercel.app/",
        githubUrl: "https://github.com/sravanipamarthi/lively-brews",
        featured: false,
        category: "Frontened",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2020",
        title: "Started Coding Journey",
        company: "college",
        description: "Begin to notice my interest in coding and trying to learn in depth",
        icon: Code2,
        color: "bg-[#2D241E]",
    },
    {
        year: "2022",
        title: "First Internship",
        company: "DRDO-India",
        description: "Got an oppurtunity to work and experience the DRDO lifestyle.",
        icon: Briefcase,
        color: "bg-[#D6C7B1]",
    },
    {
        year: "2022",
        title: "Bachelor's Degree",
        company: "NRI Institute Of Technology",
        description: "Graduated with Bachelor's Degree, specializing in software engineering.",
        icon: GraduationCap,
        color: "bg-[#7B3F00]",
    },
    {
        year: "2022",
        title: "First Professional Experience as a Software Engineer",
        company: "Wipro Technologies",
        description: "Begin to notice my interest in coding and trying to learn in depth",
        icon: Award,
        color: "bg-[#A89078]",
    },
    {
        year: "2023",
        title: "Started my Master's Journey",
        company: "SUNY-New Paltz",
        description: "Begin to notice my interest in coding and trying to learn in depth",
        icon: Code2,
        color: "bg-[#926239]",
    },
    {
        year: "2024",
        title: "Internship",
        company: "Wise Assistant",
        description: "Begin to notice my interest in coding and trying to learn in depth",
        icon: Rocket,
        color: "bg-[#CDBEAB]",
    },
    {
        year: "2025",
        title: "Started Coding Journey",
        company: "college",
        description: "Begin to notice my interest in coding and trying to learn in depth",
        icon: Zap,
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
        description: "Always learning new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "Github",
        icon: FiGithub,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "#",
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