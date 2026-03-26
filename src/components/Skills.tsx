import Section from './Section';

const skills = [
  'React', 'Node.js', 'MongoDB', 'Express',
  'TypeScript', 'Java', 'Tailwind', 'Framer Motion', 'GSAP', 'Three.js', 'Firebase Storage',
  'Git', 'GitHub', 'Figma', 'Framer', 'Socket.io', 'UI/UX' 
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
    </Section>
  );
}
