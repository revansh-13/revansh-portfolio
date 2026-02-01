import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-body text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-muted-foreground text-sm"
          >
            Designed & Built with passion
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
