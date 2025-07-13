import Button from "./Button";

export default function Portfolio() {
  return (
    <section
      className="relative flex w-screen h-[40vh] overflow-hidden"
    >
      <div className="bg-transparent absolute top-[3.5rem] flex justify-center w-full ">
        <Button
          text="All Works (6)"
        />
      </div>
    </section>
  );
}
