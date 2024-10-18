import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className='mb-10 lg:mb-20'>
      <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
          <Header/>
          <Image
            src='/The-Witcher-Imaginação-Fértil-3-768x432.webp'
            alt="The Witcher"
            fill={true}
            className="h-[65vh] object-cover lg:h-[95vh] object-top"
          />
        </div>
        <h1 className='text-4xl font-bold lg:text-7xl'>The Witcher</h1>
        <p className='text-shadow-md text-sm text-gray-300 md:max-w-lg md:text-lg lg:max-w-2xl'>
        HTML to React is an extension that helps you convert any website element into a React component. It analyzes HTML semantics, CSS style sheets and compiles the ...
        </p>
      </div>
      <div className='flex space-x-3'>
      <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            Play
          </button>
        
        
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
          
          More Info
        </button>
      </div>
    </div>
  );
}
