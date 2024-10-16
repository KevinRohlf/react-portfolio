import { ReactElement } from "react";

function SocialBtn({ imgSrc, href }: { imgSrc: ReactElement; href: string }) {
  return (
    <a
      className="scale-75 transition-all hover:scale-100"
      href={href}
      target="_blank"
      aria-label="Social Media"
    >
      {imgSrc}
    </a>
  );
}

export default SocialBtn;
