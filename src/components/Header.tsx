import { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function Header() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());
      setTime(`${timeString} GMT+5:30`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex justify-between items-center text-sm text-muted mb-10 pb-10 border-b border-border">
      <div className="flex items-center gap-1.5">
        <MapPin size={16} />
        <span>Hyderabad, India</span>
      </div>
      <div className="flex items-center gap-1.5 font-mono">
        <Clock size={16} />
        <span>{time || '...'}</span>
      </div>
    </header>
  );
}
