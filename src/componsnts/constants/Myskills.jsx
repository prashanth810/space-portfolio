import novatalesmedia from "../../assets/images/novatalesmedia.png";
import {
    car,
    contact,
    css,
    livechat,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    bluecs,
    react,
    redux,
    pickles,
    tailwindcss,
    blueera,
    reactnative,
    bootstrap
} from "../../assets/icons";





export const Testimonials = [
    {
        name: "Rohit Sharma",
        designation: "Project Manager, Novatales Media",
        quote:
            "Prashanth is a dedicated developer who consistently delivered clean and scalable React components. He understands requirements quickly and converts ideas into working features with great attention to detail.",
        src: novatalesmedia,
    },
    {
        name: "Ananya Verma",
        designation: "Senior Software Engineer, BlueCs Limited",
        quote:
            "Working with Prashanth was smooth and productive. He has strong knowledge of React and React Native and always focuses on writing maintainable and user-friendly code.",
        src: novatalesmedia,
    },
    {
        name: "Karthik Reddy",
        designation: "Product Lead",
        quote:
            "Prashanth played an important role in building our admin panel and improving overall performance. His problem-solving skills and willingness to learn made a real impact on the project.",
        src: novatalesmedia,
    },
];



export const skills = [
    {
        imageUrl: react,
        name: "React Js",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: reactnative,
        name: "React Native",
        type: "App developement",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Styles",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Styles",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Styles",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Novatales Media",
        icon: novatalesmedia,
        iconBg: "#f5ca5d",
        date: "2024 - 2024",
        points: [
            "Developed responsive client-facing web applications using React.js, HTML, CSS, Bootstrap, and JavaScript.",
            "Integrated REST APIs for authentication, dashboards, and dynamic content rendering.",
            "Implemented login and logout functionality with role-based access control.",
            "Collaborated with designers and backend developers to improve UI/UX and application performance."
        ],
    },
    {
        title: "React Native Developer",
        company_name: "BlueCs Limited",
        icon: bluecs, // ✅ use your existing icon
        iconBg: "#6b8cff",
        date: "2024 - 2025",
        points: [
            "Developed cross-platform mobile applications using React Native for Android devices.",
            "Implemented reusable components, navigation flows, and form validations.",
            "Integrated REST APIs to fetch and display real-time data inside the mobile app.",
            "Focused on performance optimization, responsive layouts, and smooth user experience."
        ],
    },
    {
        title: "React js Developer",
        company_name: "BlueCs Limited",
        icon: blueera,
        iconBg: "#1fb0ff",
        date: "2025 - Present",
        points: [
            "Built and maintained a scalable admin panel for managing employees, attendance, leaves, and reports.",
            "Integrated AI-based APIs to automate workflows and reduce manual work.",
            "Implemented secure role-based authentication for employees and administrators.",
            "Designed responsive, clean, and user-friendly interfaces for web platforms."
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/prashanth810',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/prashanth-uppari-a3441a233/',
    }
];

export const projects = [
    {
        iconUrl: bluecs,
        theme: 'btn-back-red',
        name: 'Bluecs Company website',
        description: 'BlueCS Limited helps businesses promote their services and reach more customers through one platform. Clients can showcase their brand, connect with users, and grow their business easily. The BlueEra app makes it simple for companies to manage their presence and attract new customers.',
        link: 'https://bluecs.in/',
    },
    {
        iconUrl: blueera,
        theme: 'btn-back-green',
        name: 'BlueEra Bussiness',
        description: 'BlueEra connects users, business owners, and admins through a single app and web platform. Businesses can log in through the website, list their services, products, or food, and manage everything easily. Users can find nearby shops and services, chat with the business, and place orders directly. Customers visit the shop to collect items, which helps reduce delivery charges and saves cost.',
        link: 'https://web.blueera.ai/individual/home',
    },
    {
        iconUrl: livechat,
        theme: 'btn-back-black',
        name: 'Live-Chat Application ',
        description: 'Recently, I built a live chat system with login and access control. It supports one-to-one chat and group chat. Users can send text messages and images. In group chats, users can tag messages to talk to specific people easily.',
        link: 'https://livechatfrontend.onrender.com/',
    },
    {
        iconUrl: pickles,
        theme: 'btn-back-yellow',
        name: 'Grandma’s Homemade Specials ',
        description: 'Grandma Specials brings you traditional homemade pickles, snacks, masalas, and powders from across India. All items are made by experienced grandmothers using clean methods and quality ingredients. Both veg and non-veg pickles are prepared with care and rich taste. These foods are healthy, full of flavor, and made using traditional recipes passed down through generations.',
        link: 'https://pickles-murex.vercel.app/',
    }
];