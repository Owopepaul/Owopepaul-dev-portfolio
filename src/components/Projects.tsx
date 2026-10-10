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
    title: "Kentrix Braiders Website",
    description: "Kentrix Braiders is a professional beauty and hair extension brand website designed to showcase premium braiding services, styling packages, and brand identity in a polished, customer-focused experience. The site highlights products and craftsmanship through a clean, responsive layout that builds trust and encourages bookings.",
    image: "kentrix-braiders.png",
    link: "https://kentrix-braiders.netlify.app/",
    tech: ["Next.js", "Tailwind CSS", "Responsive UI", "Brand Design"]
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
    title: "Hustle OS Website Template",
    description: "A modern, conversion-focused website template designed for ambitious startups and digital brands. It presents products, services, and value propositions through a clean, professional layout tailored to attract attention and drive engagement. Hustle OS connects Manufacturers, Sellers and Consumers in a seamless didgital ecosystem, fostering growth and collaboration.",
    image: "hustleos.png", // Placeholder for Weather Dashboard
    link: "https://hustle-os-three.vercel.app/welcome",
    tech: ["TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "NewGas Website Template",
    description: "NewGas is a modern gas and energy company helping households and businesses access reliable, efficient, and safe energy solutions. The web app features service overview, product showcases, contact forms, FAQs, company trust sections, and responsive layouts to drive customer engagement and conversions.",
    image: "New-Gas.png",
    link: "https://new-gas.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "React", "Responsive UI"]
  },
  {
    title: "Root & Spice Website Template",
    description: "Root & Spice is a premium restaurant website template designed for modern food brands, cafes, and culinary businesses. It showcases signature dishes, menu categories, brand story, and reservation calls-to-action in an elegant, mobile-responsive layout that elevates customer experience and drives engagement.",
    image: "root&spice.png",
    link: "https://kentrixrootandspice.netlify.app/",
    tech: ["Next.js", "Tailwind CSS", "GSAP", "Responsive Design"]
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
