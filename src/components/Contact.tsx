import Section from './Section';

const contacts = [
  { label: 'Email', value: 'vishwathnarayanathm19@gmail.com', link: 'mailto:[vishwathnarayanathm19@gmail.com]' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/vishwath-t-3563702a0/', link: 'https://www.linkedin.com/in/vishwath-t-3563702a0/' },
  { label: 'GitHub', value: 'https://github.com/Vishwath-Narayana', link: 'https://github.com/Vishwath-Narayana' },
];

export default function Contact() {
  return (
    <Section title="Contact" delay={0.7}>
      <div className="flex flex-col gap-3">
        {contacts.map((contact, index) => (
          <div key={index} className="flex justify-between items-center group">
            <span className="font-medium text-foreground">{contact.label}</span>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-sm hover:text-foreground transition-colors"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
