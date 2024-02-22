interface CProps {
  title: string;
  children: React.ReactNode;
}

export default function HomeSectionListStream({title, children}: CProps) {
  return (
    <div className="select-none">
      <p className="text-sm xl:text-base text-white font-semibold px-5 xl:px-[84px]">{title}</p>
      <div className="mt-[10px] xl:mt-[15px] flex justify-start items-center overflow-x-scroll">
        <div className="">
          <div className={`w-5 xl:w-[84px]`}></div>
        </div>
        {children}
        <div className="">
          <div className={`w-5 xl:w-[84px]`}></div>
        </div>
      </div>
    </div>
  )
}