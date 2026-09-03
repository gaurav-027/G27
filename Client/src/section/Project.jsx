import InfiniteMenu from '../components/InfiniteMenu'

export default function Project() {

  const items = [
  {
    image: '/project1.png',
    link: '/lancerflow',
  },
  {
    image: '/project2.png',
    link: '/xitamin',
  },
  {
    image: '/project3.png',
    link: '/vidio',
  },
  {
    image: '/project5.png',
    link: '/G27',
  },
  {
    image: '/project4.png',
    link: '/wanderlust',
  },
  {
    image: '/project6.png',
    link: '/joybox',
  },
  {
    image: '/project7.png',
    link: '/manojKirana',
  }
];

  return (
    <>
      <div className="relative w-full h-[100svh] min-h-[520px] overflow-hidden bg-black">
        <div className="w-full h-full absolute inset-0">
          <InfiniteMenu items={items} scale={1} />
        </div>
        <div className="w-full absolute top-0 p-4 sm:p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 z-20 pointer-events-none">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-sm sm:text-base lg:text-xl w-full sm:w-1/2 md:w-1/3 text-left sm:text-right text-white/70">
            Drag to rotate sphere & explore interactive projects.
          </p>
        </div>
      </div>
    </>
  );
}
