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
        date: "January 2024 - July - 2024",
        points: [
            "Developed a client website with features like login and logout, API integration, Razorpay payments, product tracking, and support for all devices.",
            "Created an admin and user role-based system, where admins manage pages and users access features securely.",
            "Built responsive web applications using React.js, HTML, CSS, Bootstrap, JavaScript, and JSX."
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: bluecs,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "React js Developer",
        company_name: "BlueCs Limited",
        icon: blueera,
        iconBg: "#1fb0ff",
        date: "January 2025 - Present",
        points: [
            "Developed a professional admin panel for employees and admins to manage attendance, leaves, holidays, and reports.",
            "Integrated AI-based APIs to reduce manual work and provide more useful features for users and business teams.",
            "Implemented role-based authentication to control access for employees and admins. Employees can apply for leave, and admins can approve requests easily.",
            " Holidays are shown in a calendar for better planning. The application is user-friendly, responsive, and easy to use."
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