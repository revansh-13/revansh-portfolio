import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const graphicDesignProjects = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Logo Design",
    description: "Minimalist logo system for a tech startup",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Festival Poster Series",
    category: "Posters",
    description: "Bold typographic posters for music festival",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Product Launch Campaign",
    category: "Product Posters",
    description: "Visual campaign for premium headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Startup Visual Identity",
    category: "Logo Design",
    description: "Complete branding for fintech company",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
  },
];

const uiuxProjects = [
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "Web Landing Pages",
    description: "Analytics platform with clean data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "E-Commerce Redesign",
    category: "UI Concepts",
    description: "Modern shopping experience with 40% conversion boost",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Fitness App Interface",
    category: "UI Concepts",
    description: "Gamified workout tracking with social features",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Agency Landing Page",
    category: "Web Landing Pages",
    description: "High-converting page with immersive animations",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
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

  return (
    <section id="work" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary text-muted-foreground font-body text-sm rounded-full mb-6">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Projects that
            <br />
            <span className="text-gradient">speak for themselves</span>
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
