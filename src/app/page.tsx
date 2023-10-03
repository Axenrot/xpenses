import Image from "next/image";

export default function Home() {
  return (
    <main className="grid gap-2 auto-rows-max items-start text-black font-bold grid-cols-4 md:grid-cols-6 lg:grid-cols-8 h-full border border-red-500">
      <div className="border border-black lg:h-full row-span-1 self-center h-32 flex flex-row lg:flex-col col-span-full lg:col-span-2 xl:col-span-1">
        {" "}
        Block 1
      </div>
      <div className="self-start border border-black h-full col-span-full md:col-span-4">
        {" "}
        Block 2
      </div>
      <div className="border border-black h-full col-span-full md:col-span-2 xl:col-span-3">
        {" "}
        Block 3
      </div>
    </main>
  );
}
