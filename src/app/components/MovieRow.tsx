import Image from "next/image";

type MovieRowProps = {
  sectionTitle: string
};

type MovieCardProps = {
  index:number
};
const MovieCard =  ({index}: MovieCardProps) => (
  <div className="group relative h-28 min-w-[150px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:scale-110 hover:z-50
      md:h-40 md:min-w-[250px] lg:h-52 lg:min-w-[350px]">
    <Image
      src={`/image-${index}.jpg`}
      alt=""
      fill={true}
      className="" />
  </div>
)
 
export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className="flex-col space-y-4">
      <div className="flex">
        <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">
          {sectionTitle}
        </h2>
      </div>
      <div className="-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide">
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
