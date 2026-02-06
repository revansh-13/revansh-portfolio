import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import heroImg from "@/assets/hero-humanoid.png";
import HeroParticles from "./HeroParticles";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Parallax mouse effect for the humanoid image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imgX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const imgY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / 40);
      mouseY.set((e.clientY - cy) / 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(0 0% 0%) 0%, hsl(220 30% 6%) 50%, hsl(210 40% 4%) 100%)" }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary blur-[200px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple blur-[180px]"
        />
      </div>

      {/* Particles */}
      <HeroParticles />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div style={{ opacity }} className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left — Text */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-muted-foreground font-body text-xs tracking-widest uppercase">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6"
            >
              <span className="block text-foreground">Designing</span>
              <span className="block text-foreground">visuals that</span>
              <span className="block text-gradient">feel human.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground font-body text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Crafting logos, interfaces, and digital experiences — where clarity
              meets creativity and every pixel has purpose.
            </motion.p>

            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">View Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 shadow-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border/60 text-foreground font-display font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:border-primary/60 hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_0_30px_-8px_hsl(210_100%_55%/0.25)]"
              >
                Let's Collaborate
              </a>
            </motion.div>
          </div>

          {/* Right — Humanoid image */}
          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            {/* Glow behind image */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-primary/20 blur-[100px]"
            />

            <motion.img
              src={heroImg}
              alt="Futuristic humanoid representing design innovation"
              style={{ x: imgX, y: imgY }}
              className="relative z-10 w-[320px] md:w-[420px] lg:w-[500px] xl:w-[560px] h-auto drop-shadow-[0_0_60px_hsl(210_100%_55%/0.3)]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
