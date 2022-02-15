import { useRef } from "react";

const useScroll = () => {
  const scrollUp = useRef(null);
  const executeScroll = () => scrollUp.current.scrollIntoView({ behavior: "smooth" });

  return [scrollUp, executeScroll];
};

export default useScroll;
