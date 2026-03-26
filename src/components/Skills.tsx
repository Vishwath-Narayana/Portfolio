import Section from './Section';
import { Database, MonitorSmartphone, Code2, Server } from 'lucide-react';

const skills = [
  'MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express',
  'TypeScript', 'Tailwind', 'Framer Motion', 'GSAP', 'Three.js', 'Firebase'
];

export default function Skills() {
  return (
    <Section title="Skills / Stack" delay={0.5}>
      <div className="flex flex-wrap gap-2 mb-8">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 border border-border rounded-lg text-sm text-foreground bg-background"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-8 text-muted">
        <Code2 size={24} />
        <MonitorSmartphone size={24} />
        <Server size={24} />
        <Database size={24} />
      </div>
    </Section>
  );
}
