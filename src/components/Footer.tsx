import { NAV_LINKs, SOCIALS, Works } from "../app-constants";

export default function Footer() {
  return (
    <footer className="min-h-screen bg-white text-black flex flex-col justify-between w-screen p-[1rem] px-[2.5rem] mx-auto">
      {/* NAV LINKS */}
      <div className="py-10 px-3 mt-[2rem]">
        <ul className="space-y-2">
          {NAV_LINKs.map((item) => (
            <li key={item.name} className="relative group/item w-fit h-[12.7vh] list-none">
              <span className="font-intertight p-2 relative text-[11.4vh] font-bold transition-colors cursor-pointer">
                {item.name}{" "}
                {item.name === "Work" && (
                  <span className="text-[3.5vh] font-['sans-serif'] font-light absolute top-[15px]">
                    ({Works.length})
                  </span>
                )}
              </span>
              <span className="absolute left-[0.1rem] bottom-[0.1rem] w-full h-[1vh] bg-current scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-1000"></span>
            </li>
          ))}
        </ul>
      </div>
      {/*  Socials and Contact */}

      <div className="place-items-end">
        <div className="w-[23vw] flex flex-col">
          <div className="flex gap-[1rem] my-[1.5rem]">
            {SOCIALS.map((item) => (
              <div
                key={item.name}
                className="w-[5.2vh] h-[5.3vh] text-[3vh] rounded-full bg-[#CCCCCC] flex items-center justify-center"
              >
                {item.iconComponent}
              </div>
            ))}
          </div>

          <div className="text-sm font-[Avenir] text-[2vh]">
            <p className="text-[#CCCCCC]">(Inquiries)</p>
            <a
              href="mailto:okolichimarume@gmail.com"
              className="underline text-[black]"
            >
              okolichimarume@gmail.com
            </a>
            <p className="text-[#CCCCCC] mt-[10px]">(Phone)</p>
            <a href="tel:+2348184400192" className="underline text-[black]">
              +234 818 440 0192
            </a>
          </div>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="w-[96vw] mx-auto px-10 pb-6 font-[Avenir]">
        <div className="flex justify-between items-end w-full border-t border-[#CCCCCC] pt-6 px-10">
          <div className="text-[#CCCCCC] flex text-sm text-gray-500 mt-[10px]">
            <p className="hover:text-[black] cursor-pointer">Imprint</p>
          </div>

          <p
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-[#CCCCCC] hover:text-[black] cursor-pointer"
          >
            ↑ Back to top
          </p>
        </div>
      </div>
    </footer>
  );
}
