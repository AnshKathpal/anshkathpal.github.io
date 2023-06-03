import { Text } from "@chakra-ui/react";
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
      radius: 260,
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
        {/* <Text fontFamily="Mogra, cursive" fontSize="20px" >Tech Stacks</Text> */}
        {<span className="tagcloud" ref={containerRef}></span>}
      </div>
    </>
  );
};
