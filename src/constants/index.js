import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Robotic Engineer",
    icon: backend,
  },
  {
    title: "Managment",
    icon: creator,
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
    name: "Firebase",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Spelya",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developed custom, mobile-responsive websites and applications using React and Tailwind CSS, improving mobile accessibility by 30%, enhancing user engagement.",
      "Improved page load times by 25% through optimized code and efficient data fetching, directly contributing to a smoother user experience.",
      "Led e-commerce platform development, implementing backend-frontend integrations that reduced cart abandonment rates by 15%.",
      "Enhanced project performance with Gemini API integrations, leading to a 20% increase in user satisfaction ratings",
      " Leveraged React and Redux for state management, scaling web applications to handle 1,000+ users per day seamlessly."
    ],
  },
  {
    title: "React ,React Native Developer",
    company_name: "SpaiAi",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2022 - January 2023",
    points: [
      "Worked on advanced AI-powered applications, boosting user engagement by 40% through interactive, real-time features.",
      "Integrated Firestore for real-time data management, achieving 99.9% data accuracy and enabling live updates for thousands of users.",
      " Collaborated with a cross-functional team to design user interfaces, increasing user retention by 20% through intuitive UX and responsive layouts.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "TicketTurkey",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed responsive, user-friendly interfaces that improved daily active users by 35%.",
      "Implemented React and Next.js to optimize load times, reducing bounce rates by 15%.",
      "Managed and maintained site accuracy by conducting regular audits, achieving an error reduction of 25%.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "The team transformed our website into an intuitive and visually stunning experience. Our users love it!",
    name: "Ayşe Yılmaz",
    designation: "CEO",
    company: "Techify",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I’m impressed by their attention to detail and commitment to our project’s success. The results speak for themselves.",
    name: "Emre Kılıç",
    designation: "Product Manager",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thanks to the team’s optimization work, our site speed improved drastically, and engagement went up by 40%.",
    name: "Zeynep Demir",
    designation: "Marketing Director",
    company: "Bright Solutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Discord Bot",
    description:
      "A custom Discord bot platform that enhances community engagement with features like automated moderation, real-time notifications, and interactive commands.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://discord-web-app.vercel.app/",
  },
  {
    name: "AI ChatBot",
    description:
      "An AI-powered chatbot that assists users with real-time responses, personalized recommendations, and seamless integrations with various platforms for an enhanced user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://nurucare.netlify.app/",
  },
  {
    name: "Holiday Bay",
    description:
      "An all-in-one travel platform where users can book flights, hotels, and rentals, with curated recommendations for popular destinations and local attractions.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "google api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://blogblogblog-hazel.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };
