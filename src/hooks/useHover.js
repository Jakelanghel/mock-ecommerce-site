import { useState } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);
};

export default useHover;
