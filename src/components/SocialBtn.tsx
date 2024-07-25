import { ReactElement } from "react";

function SocialBtn({imgSrc, href}: {imgSrc: ReactElement, href: string}) {
    return ( 
        <a className="scale-75 hover:scale-100 transition-all" href={href} target="_blank">{imgSrc}</a>
     );
}

export default SocialBtn;