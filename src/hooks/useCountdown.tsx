import { useState, useEffect } from 'react';

interface TimeUnits {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdown = (startDate: Date): TimeUnits => {
  const [timeElapsed, setTimeElapsed] = useState<TimeUnits>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      if (diff < 0) return; // Prevent negative values
      
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const years = Math.floor(days / 365.25);
      
      const newTimeElapsed = {
        years,
        days: days % Math.floor(365.25),
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      };

      setTimeElapsed(prev => {
        // Only update if values actually changed
        if (
          prev.years !== newTimeElapsed.years ||
          prev.days !== newTimeElapsed.days ||
          prev.hours !== newTimeElapsed.hours ||
          prev.minutes !== newTimeElapsed.minutes ||
          prev.seconds !== newTimeElapsed.seconds
        ) {
          return newTimeElapsed;
        }
        return prev;
      });
    };

    updateCounter(); // Initial call
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return timeElapsed;
};