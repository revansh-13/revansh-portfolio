import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { category: "Design", items: ["Brand Identity", "Visual Design", "Typography", "Illustration"] },
    { category: "UI/UX", items: ["User Research", "Wireframing", "Prototyping", "Design Systems"] },
    { category: "Development", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20" ref={ref}>
          {/* Left column - About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Designing with
              <br />
              <span className="text-gradient">Purpose & Passion</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                I'm a multidisciplinary creative who believes in the power of design 
                to solve problems and create meaningful connections between brands and people.
              </p>
              <p>
                With expertise spanning graphic design, UI/UX, and web development, 
                I bring a holistic approach to every project—ensuring that aesthetics 
                and functionality work in perfect harmony.
              </p>
              <p>
                My work is driven by curiosity, attention to detail, and a relentless 
                pursuit of creating experiences that resonate.
              </p>
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="border-l-2 border-primary pl-6"
              >
                <h3 className="font-display text-2xl font-semibold mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-secondary text-secondary-foreground font-body text-sm rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
