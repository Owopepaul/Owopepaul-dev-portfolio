import { motion } from "framer-motion";

const Header = () => {
  return (
    <section
      className=" relative min-h-screen flex items-center justify-center py-10"
      style={{ 
        backgroundImage: `url('/workstation.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 text-center"
      >
       <motion.h1 
  className="text-5xl md:text-7xl font-bold text-black mb-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg px-4 py-2 inline-block"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  Owope Taiwo Paul
</motion.h1>

      <motion.h2 
            className="text-2xl md:text-3xl text-black-200 mb-8 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
>
                 Front-end Developer
      </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed bg-white/20 backdrop-blur-lg rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          I develope beautiful and performant web experiences using modern technologies.
          Specialized in React, TypeScript, Next.js, Vue.js, Node.js and responsive designs. I also create UI designs to show clients what the website layout would look like.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Header;
