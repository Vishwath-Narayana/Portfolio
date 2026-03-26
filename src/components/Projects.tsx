import Section from './Section';

const projects = [
  {
    title: 'Modern E-Commerce Platform',
    stack: 'React, Node.js, MongoDB, Tailwind CSS',
    duration: '2023 - Present',
    description:
      'A full-stack e-commerce solution featuring a fully responsive UI, user authentication, a complete product catalog, and a seamless checkout experience with payment integration. Designed with minimalist aesthetics.',
  },
  {
    title: 'Real-Time Chat Application',
    stack: 'MERN, Socket.io, Framer Motion',
    duration: '2023',
    description:
      'Developed a real-time messaging app supporting direct messaging and group chats. Implemented smooth animations and a soft gray intuitive user interface for a native-like app experience.',
  },
  {
    title: 'Developer Portfolio',
    stack: 'React, Tailwind CSS, Framer Motion',
    duration: '2024',
    description:
      'A sleek, minimalist personal portfolio focused on typography and subtle animations to showcase projects and technical skills effectively.',
  },
];

export default function Projects() {
  return (
    <Section title="Projects" delay={0.2}>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm text-muted">
              {project.stack} &middot; {project.duration}
            </p>
            <p className="text-muted mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
