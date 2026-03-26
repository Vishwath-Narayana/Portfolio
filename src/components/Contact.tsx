import Section from './Section';

const contacts = [
  { label: 'Email', value: 'hello@example.com', link: 'mailto:hello@example.com' },
  { label: 'LinkedIn', value: '/in/vishwath', link: 'https://linkedin.com' },
  { label: 'GitHub', value: '@vishwath', link: 'https://github.com' },
  { label: 'X/Twitter', value: '@vishwath', link: 'https://twitter.com' },
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
