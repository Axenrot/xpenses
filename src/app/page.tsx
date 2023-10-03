import Image from "next/image";

export default function Home() {
  return (
    <main className="grid gap-2 grid-rows-8 md:grid-rows-4 lg:grid-rows-1 items-start text-black font-bold grid-cols-4 md:grid-cols-6 lg:grid-cols-8 h-full border border-red-500">
      <div className="border border-black h-full row-span-1 lg:row-span-1 flex flex-row lg:flex-col col-span-full lg:col-span-2 xl:col-span-1">
        {" "}
        Block 1
      </div>
      <div className="self-start border border-black h-full row-span-4 lg:row-span-1 col-span-full md:col-span-4">
        {" "}
        Block 2
      </div>
      <div className="border border-black h-full col-span-full row-span-3 sm:row-span-4 lg:row-span-1 md:col-span-2 xl:col-span-3">
        {" "}
        Block 3
      </div>
    </main>
  );
}
