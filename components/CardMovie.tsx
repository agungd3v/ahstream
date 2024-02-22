type dataType = {
  title: string;
  thumbnail: string;
}

interface CProps {
  data: dataType;
}

export default function CardMovie({data}: CProps) {
  return (
    <div
      className="flex-1 rounded-[12px] xl:rounded-[19px] overflow-hidden"
      style={{
        backgroundImage: `url(${data.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="relative w-[148px] xl:w-[278px] h-[148px] xl:h-[278px]">
        <div className="absolute w-[80%] xl:w-[50%] bottom-0 left-0">
          <div className="ellipsis-1line bg-primary text-xs xl:text-sm px-5 py-0.5 xl:py-1 rounded-tr-lg flex items-center">
            {data.title}
          </div>
        </div>
      </div>
    </div>
  )
}