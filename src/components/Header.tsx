import { MapPin, Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center text-sm text-muted mb-10 pb-10 border-b border-border">
      <div className="flex items-center gap-1.5">
        <MapPin size={16} />
        <span>Hyderabad, India</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock size={16} />
        <span>Current Time</span>
      </div>
    </header>
  );
}
