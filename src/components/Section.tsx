import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="border-t border-border pt-6 mb-10"
    >
      <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
        {title}
      </h2>
      <div className="text-muted leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}
