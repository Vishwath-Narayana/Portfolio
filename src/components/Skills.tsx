import Section from './Section';

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
    </Section>
  );
}
