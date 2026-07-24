import Section from './Section';

const educationList = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    subtitle: 'Kakatiya Institute of Technology & Science (KITSW), Warangal &middot; 2023 - 2027',
    description: 'CGPA: 8.35. Focus on data engineering, cloud computing, and full-stack development.',
  },
];

export default function Education() {
  return (
    <Section title="Education" delay={0.3}>
      <div className="flex flex-col gap-6">
        {educationList.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted">{item.subtitle}</p>
            {item.description && (
              <p className="text-muted mt-2">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
