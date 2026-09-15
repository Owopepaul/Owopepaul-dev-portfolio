import { motion } from "framer-motion";

const projects = [
  {
    title: "Cryotobank Website",
    description: "A Cryto-Currency website template where traders can trade their different currencies, for sale!",
    image: "/Crypto-web.png", // Placeholder for Cryotobank website
    link: "https://owopepaul.github.io/Cryptobank.NG/index.html",
    tech: ["HTML5", "CSS3", "JAVASCRIPT"]
  },
  {
    title: "CarEmpire Website",
    description: "An exlusive and responsive website template where you can showcase your cars for sale and expand your market",
    image: "CarEmpire.png", // Placeholder for Task Management App
    link: "https://owopepaul.github.io/CarEmpireV2.NG/ ",
    tech: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    title: "Fergriculture Limited website",
    description: "A website I created for Fergriculture Company.",
    image: "fergriculture-website.png", // Placeholder for Weather Dashboard
    link: "https://www.fergriculture.com/",
    tech: ["React", "Tailwind CSS", "Leaflet"]
  },
  {
    title: "Bunsen Communications Healthcare website",
    description: "A website I created for Bunsen Communications Healthcare Company.",
    image: "Bunsen.png", // Placeholder for Weather Dashboard
    link: "https://www.bunsencommunicationshealthcare.com.ng/",
    tech: ["Next.js", "Tailwind CSS", "Leaflet"]
  },
  {
    title: "TakeOver at the Summit Live Stream App",
    description: "A Live stream web app for TakeOver at the Summit event.",
    image: "TakeOver.png", // Placeholder for Weather Dashboard
    link: "https://takeoverthesummit2025.netlify.app/",
    tech: ["Next.js", "Tailwind CSS", "Iframer"]
  },
  {
    title: "YanGa Design Portfolio",
    description: "An exclusive portfolio design for YanGa Merchant Enterprise ",
    image: "Yanga-brand.png", // Placeholder for Portfolio Generator
    link: "https://www.figma.com/proto/3UZZEzoxJGnu322kdnNqVP/YanGa-Brand-Story?node-id=20-2&t=oAtNtkfG0UYSvAuo-1",
    tech: ["Figma"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          My Projects
        </motion.h2>

<div className="grid md:grid-cols-2 gap-11">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        project.title !== "YanGa Design Portfolio" ? "h-[550px]" : ""
      }`}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-70 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          View Project
        </a>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Projects;
