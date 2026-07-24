import Section from './Section';

const projects = [
  {
    title: 'AWS Data Lake ETL Pipeline for NYC Taxi Analytics',
    stack: 'AWS S3, AWS Glue, PySpark, Athena, Step Functions, EventBridge',
    duration: '2024 - 2025',
    description:
      'Designed and developed an end-to-end AWS data lake pipeline with Raw → Curated → Aggregated architecture. Built ETL workflows using AWS Glue and PySpark to cleanse, validate, and transform datasets. Configured Glue Crawlers, Data Catalog, and Amazon Athena for automated metadata management and SQL-based querying. Implemented incremental processing using Glue Job Bookmarks and orchestrated workflows with AWS Step Functions.',
  },
  {
    title: 'FileDrive — Cloud SaaS Collaboration Platform',
    stack: 'React 19, Vite, Node.js, Express 5, MongoDB, Socket.io, Cloudinary, Supabase, JWT, Tailwind CSS',
    duration: '2024 - 2025',
    description:
      'Engineered a multi-workspace cloud file management platform with team-based access control and real-time activity tracking via WebSocket. Implemented RBAC authorization (Admin/Editor/Viewer) using JWT and bcryptjs. Built scalable REST APIs for workspace management and file operations. Integrated Cloudinary and Supabase for cloud storage; designed responsive dark-themed UI with React 19 and Socket.io for real-time updates.',
  },
  {
    title: 'Real-Time Chat Application',
    stack: 'MERN, Socket.io, JWT, Tailwind CSS, Framer Motion',
    duration: '2024',
    description:
      'Engineered scalable real-time messaging platform supporting 1:1 and group chats with low-latency synchronization via WebSocket. Implemented JWT-based authentication, online/offline presence indicators, typing status, and real-time notifications. Optimized database architecture and backend services for concurrent loads; built animated, responsive UI for seamless cross-device experience.',
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
