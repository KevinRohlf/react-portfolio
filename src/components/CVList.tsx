function CVList({
  company,
  title,
  description,
  dates,
}: {
  company: string;
  title: string;
  description: string;
  dates: string;
}) {
  return (
    <div className="flex items-center before:absolute before:left-1 before:rounded-xl before:w-4 before:h-2 before:bg-primary">
      <div className="flex flex-col">
        <h2 className="text-xl">{company}</h2>
        <p className="text-sm">{title}</p>
        <p className="text-xs">{description}</p>
        <p className="text-sm">{dates}</p>
      </div>
    </div>
  );
}

export default CVList;
