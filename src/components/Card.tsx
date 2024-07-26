function Card({children, className=""}: {children: React.ReactNode, className?: string}) {
    return ( 
        <div className={className + " bg-slate-700 rounded-3xl p-10 shadow-md"}>
            {children}
        </div>
     );
}

export default Card;