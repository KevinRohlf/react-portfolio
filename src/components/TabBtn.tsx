function TabBtn({children, onClick, active, index}: {children: string, onClick: () => void, active: boolean, index: number}) {
    return ( 
        <button onClick={onClick} key={index} className={active ? "px-4 h-4/5 rounded-3xl bg-slate-800 text-cyan-600 transition-all text-base" : "px-4 h-4/5 rounded-3xl hover:bg-slate-800 transition-all text-base" }>{children}</button>
     );
}

export default TabBtn;