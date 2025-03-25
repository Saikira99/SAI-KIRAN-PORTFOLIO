import { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function TypingText({ texts, speed = 100, delay = 2000 }: TypingTextProps) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!deleting) {
        if (charIndex < texts[index].length) {
          setCurrentText((prev) => prev + texts[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const typingInterval = setTimeout(handleTyping, deleting ? speed / 2 : speed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, deleting, index, texts, speed, delay]);

  return (
    <span className="border-r-2 border-purple-600 pr-1 animate-blink">{currentText}</span>
  );
}
