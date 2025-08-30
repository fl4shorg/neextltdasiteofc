import { useState, useEffect } from 'react';

export const useTypewriter = (
  words: string[],
  speed: number = 100,
  deleteSpeed: number = 50,
  pause: number = 1500
) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    
    const word = words[index] || '';
    const isComplete = !deleting && text === word;
    const isEmpty = deleting && text === '';

    if (isComplete && !deleting) {
      const timer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timer);
    }

    if (isEmpty && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const delay = deleting ? deleteSpeed : speed;
    const timer = setTimeout(() => {
      if (deleting) {
        setText(word.slice(0, text.length - 1));
      } else {
        setText(word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, deleteSpeed, pause]);

  return text;
};