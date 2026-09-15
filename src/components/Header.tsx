import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="relative min-h-[88.55vh] w-full overflow-hidden bg-white">
      <video
        className="absolute inset-0 h-full w-full bg-white object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Brand-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative z-10 flex min-h-[88.55vh] items-end justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >

      <motion.h2 
            className="mb-0 rounded-lg bg-white/20 text-3xl font-bold text-white shadow-lg backdrop-blur-lg md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
>
                 Full stack Developer
      </motion.h2>

        
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
