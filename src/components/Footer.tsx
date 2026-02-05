import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Mail, url: "mailto:revanshsingh69@gmail.com", label: "Email" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/revansh-singh-209114330", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/revansh-13", label: "GitHub" },
  ];

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-display text-lg font-bold text-foreground tracking-tight">
            Revansh Singh<span className="text-primary">.</span>
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="font-body text-muted-foreground text-sm">
            © {new Date().getFullYear()} — Designed & built with 💙
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;