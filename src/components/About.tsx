import Image1 from "./../assets/img/about-img.webp";
import Button from "./Button";

export default function About() {
  return (
    <div className="min-h-screen text-black font-intertight w-screen py-[13rem] px-[2.5rem] mx-auto">
      <div className="px-8 py-16">
        <div className="flex flex-col items-start relative">
          <div className="flex items-end gap-[20px] ml-[5rem]">
            <div>
              <img src={Image1} alt="about" className="w-[20vw] h-[53vh]" />
            </div>
            <h1 className="text-[7vh] font-extrabold leading-tight">
              I help brands craft meaningful
            </h1>
          </div>

          <div className="space-y-8">
            <h2 className="text-[7vh] w-[32ch]  font-extrabold leading-tight font-intertight">
              stories and compelling visuals that deeply resonate with their
              audience, foster strong connections, build lasting loyalty, and
              drive sustainable long-term growth.
            </h2>
          </div>
        </div>

        <div className="w-1/2 mr-[6rem] ml-auto font-poppins pt-[5rem]">
          <hr className="my-16 border-gray-300" />
          <div>
            <div className="grid grid-cols-2 gap-[20px] py-[20px] font-[Avenir]">
              <div className="">
                <h3 className="text-[2vh] font-semibold">From A to Z</h3>
                <p className="text-[#9D9D9D] text-[1.8vh] font-medium leading-relaxed">
                  I manage your entire branding process, from  concept to
                  execution. Whether it's logo design, messaging, or strategy, I
                  ensure everything <br /> aligns <br /> for an impactful brand.
                </p>
              </div>

              <div className="">
                <h3 className="text-[2vh] font-semibold">Solo or Team</h3>
                <p className="text-[#9D9D9D] text-[1.8vh] font-medium leading-relaxed">
                  I work both independently and with a trusted team, adapting to
                  your project's needs to deliver the best results, whether it's
                  a <br /> solo<br />  vision or a collaborative effort.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-8 justify-center">
          <Button text="More About Me" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=""/>
        </div>
      </div>
    </div>
  );
}
