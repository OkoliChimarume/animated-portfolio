import Button from "./Button";

export default function Work({
  text,
  onClick,
  sectionImage,
}: {
  text: string;
  onClick?: () => void;
  sectionImage: string;
}) {
  return (
    <section
      className="relative flex w-screen place-items-center h-screen overflow-hidden mx-auto"
      style={{
        backgroundImage: `url(${sectionImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-transparent flex justify-center w-full place-items-center">
        <Button
          text={text.toUpperCase()}
          onClick={onClick}
          className="bg-transparent border-0"
          textSize="[4vh]"
          spanHeight="[5vh]"
        />
      </div>
    </section>
  );
}
