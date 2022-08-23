import { HomeIcon } from "@heroicons/react/solid";

function Home() {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold">Home</h1>
      <span className="text-7xl">
        <HomeIcon className=" w-16 h-16" />
      </span>
    </div>
  );
}

export default Home;
