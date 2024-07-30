import { RefObject } from "react";

function Card({children, className="", refo = null}: {children: React.ReactNode, className?: string, refo?: RefObject<HTMLDivElement> | null}) {
    return ( 
        <div ref={refo} className={className + " backdrop-blur-md bg-secondary rounded-3xl p-10 shadow-md"}>
            {children}
        </div>
     );
}

export default Card;