import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 150 }) => {
  const [displayedTextInit, setDisplayedTextInit] = useState<string>("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedTextInit((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [index]);

  return <span>{displayedTextInit}</span>;
};

export default TypingEffect;
