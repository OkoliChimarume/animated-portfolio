import { useEffect, useState } from "react";
import Image from "./../assets/user.webp";
import { NAV_LINKs, Works } from "../app-constants";

export default function Header() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative flex w-screen h-screen overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 pointer-events-none ${
          scrolled ? "opacity-60" : "opacity-0"
        } bg-[black]`}
      />

      <div className="relative flex items-center w-6/12">
        <div className="absolute bottom-[23vh] left-[3rem] text-sm font-[Avenir] text-[1.7vh] max-w-[17vw]">
          <p className="text-[black]">Digital Designer</p>
          <p className="text-[#CCCCCC] font-[500]">
            I help designers and agencies elevate their branding with creative
            development support.
          </p>
        </div>
      </div>

      <div className="relative flex items-center w-6/12">
        <img
          src={Image}
          alt="user"
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0 blur-md scale-105"
          }`}
          onLoad={() => setLoaded(true)}
        />
        <div className="top-[2rem] left-[3rem] absolute bg-transparent">
          <ul className="space-y-2 bg-transparent">
            {NAV_LINKs.map((item) => (
              <li
                key={item.name}
                className="relative group/item w-fit list-none bg-transparent"
              >
                <span className="font-intertight p-2 relative text-[3.4vh] font-bold transition-colors cursor-pointer bg-transparent">
                  {item.name}{" "}
                  {item.name === "Work" && (
                    <span className="bg-transparent text-[2vh] font-['sans-serif'] font-light absolute top-[1px]">
                      ({Works.length})
                    </span>
                  )}
                </span>
                <span className="absolute left-[0.1rem] bottom-[0.1rem] w-full h-[0.3vh] bg-current scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-1000"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-[0.1rem] bg-transparent left-0 w-full z-50 text-center">
        <h1 className="text-[18vh] uppercase text-black bg-transparent">
          Okoli C. Obianuju
        </h1>
      </div>
    </header>
  );
}
