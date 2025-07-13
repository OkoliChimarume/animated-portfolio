export default function Button({
  text,
  onClick,
  className = "",
  textSize = "[2vh]",
  spanHeight = "[3vh]",
}: {
  text: string;
  onClick?: () => void;
  className?: string;
  textSize?: string;
  spanHeight?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`hover-lift-btn ${className ? ` ${className}` : "bg-[black]"}`}
    >
      <span className={`hover-text-wrapper h-${spanHeight} leading-${spanHeight}`} aria-hidden="true">
        <span className={`top text-${textSize}`}>{text}</span>
        <span className={`bottom text-${textSize}`}>{text}</span>
      </span>
    </button>
  );
}
