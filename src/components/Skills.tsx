
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Vue.js", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 92 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Node.js", level: 90 },
  { name: "Python", level: 86 },
  { name: "Express.js", level: 82 },
  { name: "REST APIs", level: 87 },
  { name: "PostgreSQL", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "MySQL", level: 76 },
  { name: "Firebase", level: 74 },
  { name: "GitHub", level: 90 },
  { name: "GitLab", level: 82 },
  { name: "Git Bash", level: 80 },
  { name: "PowerShell", level: 72 },
  { name: "Docker", level: 70 },
  { name: "UI/UX Design", level: 84 },
  { name: "Figma", level: 82 },
];

const Skills = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                <span className="text-purple-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-purple-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
