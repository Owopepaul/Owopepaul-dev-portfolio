import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="mt-10 bg-[#fdfdfd] py-20">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center text-4xl font-bold text-gray-800"
        >
          My Professional Journey
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img 
              src="/my-photo.jpg"
              alt="Profile"
              className="w-65 h-50 rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="space-y-6"
          >
         <motion.p 
          className="mx-auto max-w-2xl rounded-lg text-lg leading-relaxed text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          I am a full stack developer who transforms ideas into scalable digital products by combining clean user experiences with powerful backend systems.
          I build modern web applications using React, TypeScript, Next.js, Vue.js, Node.js, Python, and responsive UI design principles.
        </motion.p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 5 years of experience in software development, I design and develop complete solutions spanning frontend interfaces, RESTful APIs, database architecture, and deployment workflows.
              My toolkit includes HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue.js, Node.js, Express, Python, Tailwind CSS, Bootstrap, Semantic UI, PostgreSQL, MongoDB, MySQL, Firebase, GitHub, GitLab, Git Bash, PowerShell, and Docker.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am passionate about building performant, secure, and user-focused applications that solve real business problems. I enjoy turning complex requirements into intuitive experiences, whether I am developing client-facing interfaces, server-side logic, or database-driven features.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I have also trained over 150 students on web development during my NYSC service in the military barrack, helping them gain the skills to build their own applications and launch careers in tech.
            </p>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
