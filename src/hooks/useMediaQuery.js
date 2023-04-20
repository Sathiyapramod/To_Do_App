import { useState, useEffect } from "react";

const useMediaquery = (query) => {
  const [matches, setmatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setmatches(media.matches);
    const listener = () => setmatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

export default useMediaquery;
