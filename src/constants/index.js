import Project2_img from "./canvas.png"
import Project3_img from "./Screenshot 2025-12-08 at 8.18.25 PM.png"
import Project4_img from "./Parking.png"

export const HERO_CONTENT = `I am a passionate Full Stack Developer with experience in building scalable web applications. I have completed my Bachelor of Computer Applications (BCA) and developed strong proficiency in front-end technologies like React.js, along with back-end technologies such as MySQL, MongoDB, Node.js, and Express.js. In addition, I have also learned NestJS and state management libraries including Redux, Redux Toolkit, and Zustand. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am an enthusiastic and dedicated graduate who has completed a Bachelor of Computer Applications (BCA) from Mohanlal Sukhadia University (MLSU), Udaipur. With a strong foundation in computer science and programming, I have gained proficiency in various technologies, including HTML, CSS, JavaScript, React.js, MongoDB, Node.js, Express.js, and MySQL. In addition to this, I have also learned NestJS and state management libraries such as Redux, Redux Toolkit, and Zustand.`;
  
export const PROJECTS = [
  {
    title: "Chat App",
    image: Project3_img,
    description:
      "A real-time chat application with instant messaging, secure JWT authentication, active user status, and conversation management. It also supports high-quality video calling using WebSockets, offering a smooth and seamless communication experience with a modern UI.",
    technologies: ["HTML", "CSS","React","MongoDB","Express.js","socket","webRTC"],
  },
  {
    title: "Common Canvas – Real-Time Collaborative Drawing Platform",
    image: Project2_img,
    description:
      "A collaborative canvas platform that allows multiple users to draw, paint, and create together in real time. Built with WebSockets, it provides smooth synchronization, shared creativity, and an interactive space where users can work on the same canvas simultaneously.",
    technologies: ["HTML", "CSS", "JS","React", "Node.js","MongoDB","Express.js"],
  },
  {
    title: "Smart Parking Solution",
    image: Project4_img,
    description:
      "A smart parking management system that tracks vehicle entries and exits, assigns parking slots, and fetches current and past parking details using the vehicle number. It helps streamline parking operations with efficient time tracking and organized record management.",
    technologies: ["HTML", "CSS", "JS","React", "Node.js","MongoDB","Express.js"],
  },
];

export const CONTACT = {
  address: "Udaipur,Rajasthan",
  phoneNo: "8955874931",
  email: "bandwalvansh@gmail.com",
};