import Link from "next/link";

export default function Home() {
  const links = [
    { title: "Personal Blog", url: "https://davidhullster.github.io", icon: "📝" },
    { title: "GitHub Profile", url: "https://github.com/davidhullster", icon: "💻" },
    { title: "About Me", url: "#", icon: "👋" },
    { title: "Contact", url: "mailto:davidhullster@example.com", icon: "📧" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
      
      {/* Animated Mesh Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 flex flex-col items-center animate-in fade-in zoom-in duration-700">
        
        {/* Avatar Placeholder */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 shadow-lg border-4 border-white/30 flex items-center justify-center text-3xl mb-4 overflow-hidden relative">
          <span className="z-10 relative">🚀</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">David Hull</h1>
        <p className="text-white/80 text-center mb-8 font-medium">
          DevOps • Engineering • Tinkerer
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.url}
              className="group relative flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 text-white overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-xl">{link.icon}</span>
                <span className="font-semibold">{link.title}</span>
              </div>
              <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-white/50 text-sm flex gap-4">
           <span>Société Anonyme</span>
        </div>
      </div>
    </main>
  );
}
