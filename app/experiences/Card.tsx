interface Technology {
  icon: React.ReactNode;
  name: string;
}

export default function Card({
  children,
  title,
  role,
  time,
  description,
  technology,
}: {
  children: React.ReactNode;
  title: string;
  role: string;
  time: string;
  description: string;
  technology: Technology[];
}) {
  return (
    <div className="flex flex-col mx-auto border-2 border-cyan-800 rounded-xl w-full min-h-1/2">
      <div className="rounded-t-xl w-full overflow-hidden">{children}</div>
      <div className="flex flex-col mx-5 mt-5">
        <div>
          <p className="font-bold text-xl text-center">{title}</p>
          <p className="mt-2 font-thin text-sm">
            {role} ({time})
          </p>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex flex-wrap gap-5 mt-5 mb-3">
          {technology.map((item, index) => (
            <div className="group relative" key={index}>
              {item.icon}
              <div className="top-10 left-1/2 z-10 absolute bg-cyan-800 opacity-0 group-hover:opacity-100 rounded-xl w-28 text-white text-center -translate-x-1/2 pointer-events-none">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
