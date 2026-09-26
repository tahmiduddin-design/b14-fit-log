export default function NotFound() {

  return (

    <main className="min-h-screen bg-[#090b0f] text-white flex flex-col items-center justify-center">
    
      <h1 className="text-6xl font-black">
        404
      </h1>

      <p className="text-gray-400 mt-4">
        Page not found
      </p>

      <a href="/" className="mt-6 bg-[#ccff00] text-black px-5 py-3 rounded font-bold">Go Home</a>

    </main>

  );

}