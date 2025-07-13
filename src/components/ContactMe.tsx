import Button from "./Button";

export default function ContactMe() {
  return (
    <section
      className="relative flex w-screen place-items-center h-[80vh] overflow-hidden mx-auto"
      style={{
        backgroundImage: `url(bg-img-1.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute bottom-[1.5rem] left-[.3rem] bg-transparent">
        <Button
          text="CONTACT ME"
          onClick={() => null}
          className="bg-transparent border-0"
          textSize="[10vh]"
          spanHeight="[12vh]"
        />
      </div>
      <div className="absolute top-[1.5rem] left-[2rem] bg-transparent">
        <p className="bg-transparent text-[white] text-[1.9vh]">(Contact)</p>
      </div>
      <div className="absolute top-[1.5rem] right-[4rem] bg-transparent">
        <h2 className="flex flex-col bg-transparent text-[white] text-[4vh]">
          <span className="bg-transparent pl-[7rem]">Global presence, global</span>
          <span className="bg-transparent">recognition — Contact me to take</span>{" "}
          <span className="bg-transparent">your next step.</span>
        </h2>
      </div>
    </section>
  );
}
