import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Import project images
import spriteImg from "@/assets/projects/sprite.png";
import brutalismImg from "@/assets/projects/brutalism.png";
import floatWindowImg from "@/assets/projects/float-window.png";
import gamedayImg from "@/assets/projects/gameday.png";
import lumiereImg from "@/assets/projects/lumiere-mockup.png";
import kiaImg from "@/assets/projects/kia-seltos.png";
import legacyWorksImg from "@/assets/projects/legacy-works.png";

const graphicDesignProjects = [
  {
    id: 1,
    title: "Sprite Product Poster",
    category: "Product Posters",
    description: "Dynamic product visualization with fresh, energetic aesthetic",
    image: spriteImg,
  },
  {
    id: 2,
    title: "Brutalism",
    category: "Posters",
    description: "Bold typographic poster exploring brutalist architecture",
    image: brutalismImg,
  },
  {
    id: 3,
    title: "Float",
    category: "Posters",
    description: "Surreal visual exploring dreamlike atmospheres",
    image: floatWindowImg,
  },
  {
    id: 4,
    title: "Gameday Day-2",
    category: "Posters",
    description: "Gaming event poster with futuristic cyber aesthetic",
    image: gamedayImg,
  },
  {
    id: 5,
    title: "Lumière Skincare",
    category: "Product Posters",
    description: "Premium product mockup with elegant lighting",
    image: lumiereImg,
  },
  {
    id: 7,
    title: "Legacy Works Furniture",
    category: "Brand Identity",
    description: "Complete brand identity system with warm, sophisticated aesthetic",
    image: legacyWorksImg,
  },
];

const uiuxProjects = [
  {
    id: 6,
    title: "Kia Seltos 2026",
    category: "Web Landing Pages",
    description: "Automotive landing page with immersive visual storytelling",
    image: kiaImg,
  },
];

const ProjectCard = ({ project, index }: { project: typeof graphicDesignProjects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer card-hover"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2 text-primary font-display font-semibold"
          >
            View Project <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-background/80 backdrop-blur-sm text-foreground font-body text-xs rounded-full border border-border">
            {project.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5">
        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground font-body text-sm">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<'graphic' | 'uiux'>('graphic');

  // Character animation for header
  const titleText = "Projects that";
  const gradientText = "speak for themselves";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="work" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header with scroll animation */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-secondary text-muted-foreground font-body text-sm rounded-full mb-6"
          >
            Selected Work
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <motion.span
              variants={containerVariants}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              className="inline-block"
            >
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
            <br />
            <motion.span
              variants={containerVariants}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              className="text-gradient inline-block"
              style={{ transitionDelay: "0.3s" }}
            >
              {gradientText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h2>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setActiveTab('graphic')}
            className={`px-6 py-3 font-display font-semibold text-sm rounded-full transition-all duration-300 ${
              activeTab === 'graphic'
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            Graphic Design
          </button>
          <button
            onClick={() => setActiveTab('uiux')}
            className={`px-6 py-3 font-display font-semibold text-sm rounded-full transition-all duration-300 ${
              activeTab === 'uiux'
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            UI/UX & Web
          </button>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {(activeTab === 'graphic' ? graphicDesignProjects : uiuxProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
