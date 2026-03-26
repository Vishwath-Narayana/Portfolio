import Section from './Section';

const projects = [
  {
    title: 'Role-Based File Sharing System',
    stack: 'MERN Stack, Cloudinary Storage ',
    duration: '2026 - Present',
    description:
      'Developed a secure file sharing platform with role-based access control, enabling users to upload, manage, and share files with permission-based restrictions. Implemented authentication, OTP-based login, and cloud storage integration using Firebase. Designed a scalable and user-friendly interface for efficient file management.',
  },
  {
    title: 'Real-Time Chat Application',
    stack: 'MERN, Socket.io, Framer Motion',
    duration: '2026',
    description:
      'Developed a real-time messaging app supporting direct messaging and group chats. Implemented smooth animations and a soft gray intuitive user interface for a native-like app experience.',
  },
  {
    title: 'Developer Portfolio',
    stack: 'React, Tailwind CSS, Framer Motion',
    duration: '2026',
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
