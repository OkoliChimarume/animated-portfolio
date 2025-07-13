import { useEffect, useState } from "react";
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-transparent px-[1.3vw] fixed top-0 left-0 w-full py-4 z-50 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? "text-black backdrop-blur" : "hidden"
      }`}
    >
      <h1 className="text-[6vh] font-bold tracking-wide bg-transparent">C-O</h1>

      <button className="bg-transparent border-0 text-[10vh]">
        <DragHandleOutlinedIcon fontSize="inherit" className="bg-transparent border-0 " />
      </button>
    </nav>
  );
}
