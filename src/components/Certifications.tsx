import Section from './Section';
import { ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    title: 'Advanced React and Next.js',
    subtitle: 'Coursera &middot; 2024',
    description: 'Comprehensive course covering frontend architecture, state management, and SSR.',
    link: '#'
  },
  {
    title: 'Node.js Backend Development',
    subtitle: 'Udemy &middot; 2023',
    description: 'In-depth focus on building RESTful APIs using Express and MongoDB.',
    link: '#'
  }
];

export default function Certifications() {
  return (
    <Section title="Certifications" delay={0.4}>
      <div className="flex flex-col gap-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-muted transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted">
                  <span dangerouslySetInnerHTML={{ __html: cert.subtitle }} />
                </p>
                <p className="text-muted mt-2">{cert.description}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
              />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
