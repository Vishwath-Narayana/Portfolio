import Section from './Section';

const languages = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Telugu', proficiency: 'Native' },
  { name: 'Hindi', proficiency: 'Intermediate' },
];

export default function Languages() {
  return (
    <Section title="Languages" delay={0.6}>
      <div className="flex flex-col gap-3">
        {languages.map((lang, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium text-foreground">{lang.name}</span>
            <span className="text-muted text-sm">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
