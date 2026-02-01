import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-secondary text-muted-foreground font-body text-sm rounded-full mb-8"
          >
            About Me
          </motion.span>

          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              I'm a designer working across{" "}
              <span className="text-gradient">graphic design</span> and{" "}
              <span className="text-gradient-green">UI/UX</span>, focused on 
              creating visuals and interfaces that look good and make sense.
            </h2>

            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed max-w-3xl">
              I enjoy blending aesthetics with usability and constantly experimenting 
              with new ideas. Whether it's crafting a brand identity, designing a 
              poster that stops you mid-scroll, or building interfaces that feel 
              intuitive — I'm all in.
            </p>

            {/* Fun line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-secondary/50 rounded-full border border-border"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="font-body text-sm text-muted-foreground">
                Currently building, learning, and leveling up.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
