import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    lume,
    hotel,
    onyxcloud,
    food,
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Self-Directed Projects",
      company_name: "mern stack",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2024 - october 2024",
      points: [
        "Full Stack Development.",
        " Developed a hotel booking website as a part of a personal project. Implemented features such as user authentication, booking management, and payment integration using technologies like Node.js, Express, MongoDB, and React. This project enhanced my skills in both frontend and backend development.",
        "Led the development of a web-based library management system aimed at streamlining the process of managing library resources."
      ],
    },
    {
      title: "Hackathon Participant",
      company_name: "SIH",
      icon: nodejs,
      iconBg: "#383E56",
      date: "september 2024 - october 2024",
      points: [
        "Collaborated with a team of developers to analyze and predict price trends of essential commodities.",
        "Utilized data analysis techniques to derive insights from market intelligence inputs and historical data.",
        "Developed a simplified model to forecast prices, showcasing my ability to work under pressure and contribute effectively to group projects.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [

    {
      name: "EasyEats",
      description:
        "Web application that enables users to search for restaurant ,order food ,manage their own restaurtan and track order in real time with auth0 authentication and stripe payment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
        {
          name: "auth0",
          color: "blue-text-gradient",
        },
      ],
      image: food,
      link:"https://easyeats-0pja.onrender.com",
      source_code_link:"https://github.com/prashanttc/food-del",
    },
    {
      name: "Onyxcloud",
      link:"https://onyxcloud.vercel.app/",
      description:
        "OnyxCloud is a modern cloud storage platform designed for seamless and secure file storage and sharing. Built with Next.js, Appwrite, and Tailwind CSS, it offers a user-friendly interface with robust features to cater to personal and professional needs..",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "appwrite",
          color: "pink-text-gradient",
        },
      ],
      image: onyxcloud,
      source_code_link: "https://github.com/prashanttc/Onyxcloud",
    },
    {
      name: "Anywhere.com",
      description:
        "Web-based platform that allows users to search, book, and manage hotel's room from various providers , with fully functional admin panel to manage booking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      link:"https://anywwhere.netlify.app/",
      source_code_link: "https://github.com/prashanttc/hbs",
    },
    {
      name: "lume",
      description:
        "Web-based social media that allows users to post, like, and follow users with infinite scrolling and realtime updates  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tanstack",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: lume,
      link:"https://lume-ten.vercel.app/",
      source_code_link: "https://github.com/prashanttc/lume",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };