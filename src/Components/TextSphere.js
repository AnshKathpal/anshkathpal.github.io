import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "../styles/TextSphere.css";

export const TextSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "ChakraUI",
      "Figma",
      "TypeScript",
      "NodeJS",
      "Mongo-DB",
      "TailWind CSS",
      "GIT",
      "GitHub",
    ];
    const options = {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    };

    TagCloud(container, texts, options);

    return () => {
      TagCloud(container, [], {});
    };
  }, []);

  return (
    <>
      <div className="text-sphere">
        {<span className="tagcloud" ref={containerRef}></span>}
      </div>
    </>
  );
};
