import Section from './Section';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Data Engineering',
    skills: ['PySpark', 'Apache Airflow', 'AWS Glue', 'ETL Pipelines'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Linux', 'Git', 'CI/CD'],
  },
  {
    category: 'Frontend & Backend',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.io', 'Tailwind CSS'],
  },
];

export default function Skills() {
  return (
    <Section title="Skills / Stack" delay={0.5}>
      <div className="space-y-5">
        {skillCategories.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 border border-border rounded-lg text-sm text-foreground bg-background hover:border-foreground hover:bg-foreground hover:bg-opacity-5 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
