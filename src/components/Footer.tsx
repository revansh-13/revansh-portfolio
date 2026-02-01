import { motion } from "framer-motion";

const Footer = () => {
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
            yourname<span className="text-primary">.</span>
          </p>
          
          <p className="font-body text-muted-foreground text-sm">
            © {new Date().getFullYear()} — Designed & built with 💙
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
