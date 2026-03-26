import { useState } from 'react';
import Section from './Section';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

const certifications = [
  {
    title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    subtitle: 'Google &middot; 2025',
    description: 'Learned core cloud computing concepts including infrastructure, services, and deployment models on Google Cloud Platform.',
    link: '#'
  },
  {
    title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud',
    subtitle: 'Google &middot; 2025',
    description: 'Gained hands-on knowledge of cloud infrastructure, virtual machines, storage systems, and resource management in GCP.',
    link: '#'
  },
  {
    title: 'Google Cloud Computing Foundations: Networking & Security in Google Cloud',
    subtitle: 'Google &middot; 2025',
    description: 'Explored networking concepts, VPC design, load balancing, and security practices within Google Cloud environments.',
    link: '#'
  },
  {
    title: 'Implementing Cloud Load Balancing for Compute Engine',
    subtitle: 'Google &middot; 2025',
    description: 'Configured and managed load balancing solutions to distribute traffic efficiently across compute resources.',
    link: '#'
  },
  {
    title: 'Set Up an App Dev Environment on Google Cloud',
    subtitle: 'Google &middot; 2025',
    description: 'Built and configured development environments on GCP, including deployment workflows and service integration.',
    link: '#'
  },
  {
    title: 'Build a Secure Google Cloud Network',
    subtitle: 'Google &middot; 2025',
    description: 'Designed secure cloud networks using firewall rules, IAM policies, and private access configurations.',
    link: '#'
  },
  {
    title: 'Prepare Data for ML APIs on Google Cloud',
    subtitle: 'Google &middot; 2025',
    description: 'Processed and structured datasets for machine learning APIs, focusing on data pipelines and preprocessing.',
    link: '#'
  },
  {
    title: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
    subtitle: 'Google &middot; 2025',
    description: 'Understood foundational concepts of data processing, machine learning, and AI services within GCP.',
    link: '#'
  }
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? certifications : certifications.slice(0, 4);

  return (
    <Section title="Certifications" delay={0.4}>
      <div className="flex flex-col gap-6">
        {displayedCerts.map((cert, index) => (
          <a
             key={index}
             href={cert.link}
             target="_blank"
             rel="noopener noreferrer"
             className="group block"
          >
            <div className="flex justify-between items-start">
              <div className="pr-4">
                <h3 className="font-semibold text-foreground group-hover:text-muted transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted">
                  <span dangerouslySetInnerHTML={{ __html: cert.subtitle }} />
                </p>
                <p className="text-muted mt-2 leading-relaxed">{cert.description}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all flex-shrink-0 mt-1"
              />
            </div>
          </a>
        ))}
      </div>
      
      {certifications.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted transition-colors"
        >
          {showAll ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show More <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </Section>
  );
}
