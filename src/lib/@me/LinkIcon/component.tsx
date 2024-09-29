import "./style.scss";

export interface LinkIconProps {
  iconPath: string;
  alt?: string;
  cb?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function NameFromPath(path: string): string {
  const splitted = path.split("/");
  const name = splitted[splitted.length - 1].split(".");
  return name.slice(0, name.length - 1).join();
}

function LinkIcon({ iconPath, alt, cb, className }: LinkIconProps) {
  return (
    <button
      className={`button-icon ${className ? className : ""}`}
      onClick={cb}
    >
      <img src={iconPath} alt={alt ? alt : NameFromPath(iconPath)} />
    </button>
  );
}

export default LinkIcon;
