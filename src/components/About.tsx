import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="mt-10 py-20 bg-#fdfdfd">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          About Me
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
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 5 years of experience in front-end development, I specialize in
              creating responsive and user-friendly web applications. My expertise includes
              HTML, JavaScript modern frameworks like (React, TypeScript, Next.js), and modern CSS frameworks like (Tailwind CSS, Bootstrap, Semantic UI).
              I also have experience in the use of Github, Gitbash, Gitlab (for version control and collaboration) Powershell, UI/UX, CSS Preprocessors (SASS).
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about clean code, performance optimization, and creating
              seamless user experiences. When I'm not coding, you can find me contributing
              to open-source projects and mentoring junior developers. I also create portfolios for professionals and businesses.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I have also volunteered and provided my skills to non profit Organizations, providing them with innovative solutions to technical problems
              and also collaborated with them on events and programs that help in publicity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Soft Skills</strong>
              <ul className="list-disc list-inside">
                <li><strong>Problem-Solving:</strong> Ability to tackle complex problems and find efficient solutions.</li>
                <li><strong>Communication:</strong> Strong verbal and written communication skills to effectively collaborate with team members and stakeholders.</li>
                <li><strong>Attention to Detail:</strong> Keen eye for detail to ensure your code and design are polished and error-free.</li>
                <li><strong>Creativity:</strong> Innovative thinking to create engaging and visually appealing interfaces.</li>
                <li><strong>Time Management:</strong> Effective time management and organizational skills to handle multiple tasks and meet deadlines.</li>
                <li><strong>Collaboration:</strong> Ability to work well in a team environment, including with designers, back-end developers, and project managers.</li>
                <li><strong>Adaptability:</strong> Willingness to learn and adapt to new technologies, tools, and methodologies.</li>
              </ul>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
