import {Home as home,ChevronLeft,ChevronRight,Ellipsis,HomeIcon,SearchCheck,Search as Busca,NotebookIcon,X,Square,Bell,Users,Minus,LibraryBig,Shuffle,SkipBack,Play,SkipForward,Repeat,Mic2,LayoutList,Laptop2,Volume,Maximize2,PictureInPicture2,SquarePlay,CircleCheck,CirclePlus, Search,} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen sm:h-screen flex flex-col">
      <div className="hidden lg:flex items-center justify-between min-w-screen p-2">
        <div className="flex items-center gap-2 pl-4 pr-4">
          <Ellipsis size={30} />
          <ChevronLeft size={30} />
          <ChevronRight size={30} />
          <div className="rounded-full p-2 bg-zinc-900 hover:transition-transform duration-500 transform hover:scale-110">
            <HomeIcon size={30} />
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <div className="h-12 rounded-full w-96 bg-zinc-800 flex items-center px-4">
            <Busca className="w-6 mr-2" />
            <span className="text-zinc-400">What do you want to play?</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Bell size={15} />
          <Users size={15} />
          <div>
            <Image className="rounded-full p-1 bg-zinc-300" height={30} width={30} src="/profile.png" alt="exemplo de foto de perfil"/>
          </div>
          <Minus size={15} />
          <Square size={15} />
          <X />
        </div>
      </div>
      <div className="flex flex-1 md:p-2">
        <aside className="hidden md:flex w-auto bg-zinc-950 p-1 flex-col items-center rounded-xl">
          <LibraryBig className="m-4" />
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
          <Image className="rounded-xl p-1.5 hover:bg-zinc-400" height={60} width={60} src="/liked-songs.jpg" alt="foto liked songs spotify"/>
        </aside>
        <main className="md:rounded-xl p-2 lg:p-4 sm:mr-2 md:ml-2 bg-zinc-900">
          <div className="flex gap-2 ml-3">
            <span className="pl-3 pr-3 pt-1 pb-1 bg-zinc-200 text-black rounded-full">
              All
            </span>
            <span className="pl-3 pr-3 pt-1 pb-1 bg-zinc-200/10 text-white rounded-full">
              Music
            </span>
            <span className="pl-3 pr-3 pt-1 pb-1 bg-zinc-200/10 text-white rounded-full">
              Podcasts
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 ml-3">
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/duality.jpg" width={72} height={72} alt="capa do album Duality da banda Metallica" />
              <strong>Duality</strong>
              <button className="hidden lg:flex w-12 h-12 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl ml-3 mt-10">
              Made for Gabriel Bartelli
            </h2>
            <span className="mt-14 mr-4 text-sm font-bold">Show All</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mt-4">
            <a className="overflow-hidden p-3 rounded-md hover:bg-white/10 transition delay-50 flex flex-col gap-2">
              <Image src="/duality.jpg" className="w-full rounded-md" width={104} height={104} alt="capa do album Duality da banda Metallica" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                XXXTENTACION, Lil Tecca and Lil Peep and more
              </span>
            </a>
            <a className="overflow-hidden p-3 rounded-md hover:bg-white/10 transition delay-50 flex flex-col gap-2">
              <Image src="/duality.jpg" className="w-full rounded-md" width={104} height={104} alt="capa do album Duality da banda Metallica" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                XXXTENTACION, Lil Tecca and Lil Peep and more
              </span>
            </a>
            <a className="overflow-hidden p-3 rounded-md hover:bg-white/10 transition delay-50 flex flex-col gap-2">
              <Image src="/duality.jpg" className="w-full rounded-md" width={104} height={104} alt="capa do album Duality da banda Metallica" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                XXXTENTACION, Lil Tecca and Lil Peep and more
              </span>
            </a>
            <a className="overflow-hidden p-3 rounded-md hover:bg-white/10 transition delay-50 flex flex-col gap-2">
              <Image src="/duality.jpg" className="w-full rounded-md" width={104} height={104} alt="capa do album Duality da banda Metallica" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                XXXTENTACION, Lil Tecca and Lil Peep and more
              </span>
            </a>
            <a className="overflow-hidden p-3 rounded-md hover:bg-white/10 transition delay-50 flex flex-col gap-2">
              <Image src="/duality.jpg" className="w-full rounded-md" width={104} height={104} alt="capa do album Duality da banda Metallica" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                XXXTENTACION, Lil Tecca and Lil Peep and more
              </span>
            </a>
            <a className="overflow-hidden p-3 rounded-md hover:bg-white/10 transition delay-50 flex flex-col gap-2">
              <Image src="/duality.jpg" className="w-full rounded-md" width={104} height={104} alt="capa do album Duality da banda Metallica" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                XXXTENTACION, Lil Tecca and Lil Peep and more
              </span>
            </a>
            <a className="overflow-hidden p-3 rounded-md hover:bg-white/10 transition delay-50 flex flex-col gap-2">
              <Image src="/duality.jpg" className="w-full rounded-md" width={104} height={104} alt="capa do album Duality da banda Metallica" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                XXXTENTACION, Lil Tecca and Lil Peep and more
              </span>
            </a>
          </div>
        </main>
        <aside className="hidden w-3/12 bg-zinc-950 p-5 lg:flex flex-col float-right ml-auto rounded-xl">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="font-bold">Duality</span>
              <div>
                <X size={20} />
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <Image className="rounded-lg" height={800} width={800} src="/duality.jpg" alt="foto da musica duality da banda Slipknot" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-2xl">Duality</span>
                <span className="text-sm text-zinc-500">Slipknot</span>
              </div>
              <div className="flex gap-2">
                <CirclePlus size={20} />
                <Ellipsis size={20} />
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 relative mt-4 rounded-md overflow-hidden">
            <span className="font-bold absolute top-2 left-2 text-sm">
              About the Artist
            </span>
            <Image height={400} width={350} src="/slipknot.jpg" alt="foto da banda Slipknot" />
            <div className="mt-3 ml-3 gap-3">
              <span className="font-semibold">Slipknot</span>
            </div>
            <div className="ml-3 mb-4 gap-3 flex">
              <span className="text-zinc-500">
                13,714,597 monthly listeners
              </span>
            </div>
          </div>
        </aside>
      </div>
      <div className="sticky bottom-0 lg:relative">
      <footer className="bg-black p-5 h-20 w-full flex items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image height={60} width={60} src="/duality.jpg" alt="foto da musica duality da banda Slipknot" />
          <div className="flex flex-col">
            <span>Duality</span>
            <span className="text-xs text-zinc-500 ml-0.5">Slipknot</span>
          </div>
          <CircleCheck size={20} className="hidden" />
        </div>
        <div className="flex flex-col items-center gap-1 ml-auto md:ml-44">
          <div className="flex items-center gap-4">
            <Shuffle size={20} className="text-zinc-200 hidden md:block" />
            <SkipBack size={20} className="text-zinc-200 hidden md:block" />
            <CirclePlus size={25} className="flex md:hidden" />
            <button className="w-8 h-8 flex items-center justify-center pl-1 ml-auto md:ml-0 rounded-full bg-white text-black ">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200 hidden md:block" />
            <Repeat size={20} className="text-zinc-200 hidden md:block" />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-zinc-500">0:31</span>
            <div className="hidden lg:block h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-24 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-500">3:06</span>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex items-center gap-2">
            <SquarePlay size={20}/>
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className="flex items-center gap-2">
              <Volume size={20} className="ml-1" />
              <div className="6h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
              </div>
            </div>
            <PictureInPicture2 size={20} />
            <Maximize2 size={20}/>
          </div>
        </div>
      </footer>
      <div className="md:hidden h-1 rounded-full min-w-screen bg-zinc-600">
        <div className="bg-zinc-200 w-24 h-1 rounded-full"></div>
      </div>
      <div className="md:hidden pt-5 flex justify-between items-center pr-12 pl-12 pb-2 bg-black alig">
       <div className="flex flex-col items-center">
        <HomeIcon/>
        <span className="font-thin">Home</span>
       </div>
      <div className="flex flex-col items-center">
        <Search className="text-zinc-500"/>
        <span className="font-thin text-zinc-500">Search</span>
      </div>
      <div className="flex flex-col items-center">
        <LibraryBig className="text-zinc-500"/>
        <span className="font-thin text-zinc-500">Your Library</span>
      </div>
      </div>
     </div>
    </div>
  );
}
