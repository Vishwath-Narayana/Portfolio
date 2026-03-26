import Section from './Section';

const educationList = [
  {
    title: 'B.Tech in Computer Science',
    subtitle: 'Kakatiya Institute of Technology and Science, 2023 - present',
    description: 'Focusing on software engineering, data structures, and web technologies.',
  },
  {
    title: 'Intermediate Education',
    subtitle: (
      <>
        Narayana Junior College (11th) &middot; 2021 - 2022<br />
        SR Edu Center (12th) &middot; 2022 - 2023
      </>
    ),
    description: 'Core focus on Mathematics, Physics, and Chemistry.',
  },
  {
    title: 'High School',
    subtitle: 'Tejaswi High School, graduated 2021',
    description: 'General education with a strong foundation in science and math.',
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
