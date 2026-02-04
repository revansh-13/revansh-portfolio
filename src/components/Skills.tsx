import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const designSkills = [
  "Branding & Logo Design",
  "Poster Design",
  "Product Visuals",
  "Visual Systems",
  "UI Design",
  "Web Landing Pages",
];

const tools = [
  { name: "Figma", icon: "🎨" },
  { name: "Adobe Photoshop", icon: "📸" },
  { name: "Adobe Illustrator", icon: "✏️" },
  { name: "Google Antigravity", icon: "🚀" },
  { name: "VS Code", icon: "💻" },
  { name: "Notion", icon: "📝" },
];

const processSteps = [
  { step: "01", title: "Research", description: "Understanding the problem and audience" },
  { step: "02", title: "Ideation", description: "Exploring concepts and directions" },
  { step: "03", title: "Design", description: "Crafting the visual solution" },
  { step: "04", title: "Refine", description: "Iterating based on feedback" },
  { step: "05", title: "Deliver", description: "Shipping polished work" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary text-muted-foreground font-body text-sm rounded-full mb-6">
            What I Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Design Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-accent-green" />
              Tools I Use
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border hover:border-primary transition-colors duration-300"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="font-body text-sm text-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accent-purple" />
            My Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 bg-card rounded-2xl border border-border hover:border-accent-purple transition-all duration-300 card-hover">
                  <span className="font-display text-3xl font-black text-muted-foreground/30 group-hover:text-accent-purple/50 transition-colors duration-300">
                    {step.step}
                  </span>
                  <h4 className="font-display text-lg font-bold mt-3 mb-2">{step.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
