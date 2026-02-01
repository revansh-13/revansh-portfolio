import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { name: "LinkedIn", url: "#" },
    { name: "Dribbble", url: "#" },
    { name: "Behance", url: "#" },
    { name: "GitHub", url: "#" },
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Let's create
              <br />
              <span className="text-gradient">something great</span>
              <br />
              together
            </h2>
            <p className="text-muted-foreground font-body text-xl max-w-md mb-12">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@yourname.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="font-body text-lg">hello@yourname.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="font-body text-lg">Based in Your City</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-8">
              Connect With Me
            </p>
            <div className="space-y-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors duration-300"
                >
                  <span className="font-display text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {social.name}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
