import { MutableRefObject } from "react";

function TabBtn({children, onClick, active = true, refo, datatab}: {children: string, onClick: () => void, active: boolean | null, refo: MutableRefObject<null> | null, datatab: string}) {
    return ( 
        <button data-tab={datatab} ref={refo} onClick={onClick} className={active ? "px-4 h-4/5 rounded-3xl bg-primary text-cyan-600 transition-all text-base" : "px-4 h-4/5 rounded-3xl hover:bg-primary transition-all text-base" }>{children}</button>
     );
}

export default TabBtn;