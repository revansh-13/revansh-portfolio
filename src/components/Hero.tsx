import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import heroRobot from "@/assets/hero-robot.png";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Parallax for the robot image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Mouse-follow effect for the robot
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 40);
      mouseY.set((clientY - innerHeight / 2) / 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Character animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  const line1 = "Designing visuals &";
  const line2 = "interfaces that feel";
  const line3 = "clear, modern";
  const line4 = "& human.";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden noise-overlay"
    >
      {/* Background decorative elements with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-green blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-purple blur-[100px]"
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-6 lg:px-12 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-border mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-green" />
              <span className="text-muted-foreground font-body text-sm tracking-wide">
                Graphic Design × UI/UX
              </span>
            </motion.div>
            
            {/* Main headline with character animation */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8 tracking-tight overflow-hidden">
              <motion.span className="block">
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span className="block">
                {line2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + line1.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span className="block text-gradient">
                {line3.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + line1.length + line2.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span className="block text-gradient-green">
                {line4.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + line1.length + line2.length + line3.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mb-12"
            >
              Logos, posters, product creatives, and landing pages —
              crafted with intention and a whole lot of pixels.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a href="#work" className="btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Collaborate
              </a>
            </motion.div>
          </div>

          {/* Robot image with interactive animations */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            style={{ 
              y: imageY, 
              rotateZ: imageRotate, 
              scale: imageScale,
              x: springX,
              rotateX: springY,
            }}
            className="flex-shrink-0 w-[280px] md:w-[360px] lg:w-[420px] xl:w-[480px] relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />
            <motion.img
              src={heroRobot}
              alt="Futuristic humanoid robot"
              className="w-full h-auto relative z-10 drop-shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            {/* Floating accent ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] border border-primary/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] border border-accent-green/5 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
