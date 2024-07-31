import { MutableRefObject } from "react";

function TabBtn({children, onClick, active = true, refo, datatab}: {children: string, onClick: () => void, active: boolean | null, refo: MutableRefObject<null> | null, datatab: string}) {
    return ( 
        <button data-tab={datatab} ref={refo} onClick={onClick} className={active ? "px-4 py-2 h-4/5 text-xs md:text-sm rounded-3xl bg-primary text-accent transition-all lg:text-base" : "px-4 py-2 h-4/5 rounded-3xl hover:bg-primary text-xs md:text-sm transition-all duration-200 lg:text-base" }>{children}</button>
     );
}

export default TabBtn;