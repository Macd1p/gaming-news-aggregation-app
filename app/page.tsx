import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-800 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-700 p-4">
        <ul className="flex justify-between items-center">
          <li className="text-2xl font-bold text-slate-200">
          Gaming<span className="text-red-500">Hub</span>
          </li>
          <li>
            <Link href="/signup" className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600">
                Sign Up
            </Link>
          </li>
        </ul>
      </header>

      {/* Main Section */}
      <section 
        className="relative flex flex-col justify-center items-center text-center flex-grow px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gamer.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Get Your Latest Gaming News Here
          </h1>
          <p className="text-slate-400 mb-8 max-w-xl">
            Stay updated with the newest trends, releases, and reviews in the gaming world. Join us and never miss out on the latest updates!
          </p>
          <Link href="/login" className="bg-slate-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600">
              Login
          </Link>
        </div>
      </section>
    </div>
  );
}




