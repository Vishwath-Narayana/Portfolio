import Section from './Section';

const experiences = [
  {
    title: 'Social Growth Intern',
    company: 'Poditivity',
    duration: 'Jan 2025 – Mar 2025',
    description: [
      'Led UI/UX design initiatives, creating wireframes and prototypes in Figma to improve user experience across digital products.',
      'Executed end-to-end content planning and marketing campaigns including photography, videography, and video editing, growing social media engagement.',
      'Collaborated on brand strategy and content calendar development, ensuring consistent visual and messaging standards across platforms.',
    ],
  },
];

export default function Experience() {
  return (
    <Section title="Experience" delay={0.15}>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="font-semibold text-foreground">{exp.title}</h3>
            <p className="text-sm text-muted">
              {exp.company} &middot; {exp.duration}
            </p>
            <ul className="text-muted mt-2 space-y-1">
              {exp.description.map((point, i) => (
                <li key={i} className="list-disc list-inside text-sm leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
