export default function Progress({ progress }: { progress: number }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
      <h1 className="titleText mb-8 text-center font-rp1 font-bold text-white">
        Beyond the horizon, Into the Arena
      </h1>
      <div className="h-2 w-2/3 overflow-hidden rounded-full bg-gray-700 md:w-1/3">
        <div
          className="h-full bg-[#92CEFF] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-xl text-white">{Math.round(progress)}%</p>
    </div>
  );
}
