function CVList({company, title, description, imgSrc, dates}: {company: string, title: string, description: string, imgSrc: string, dates: string}) {
    return ( <div className="flex gap-5 ">
            <img className="h-16 w-16" src={imgSrc} alt={title} />
          <div>
            <h2 className="text-xl">{company}</h2>
            <p className="text-xs">{description}</p>
            <p className="text-sm">{dates}</p>
          </div>
      </div> );
}

export default CVList;