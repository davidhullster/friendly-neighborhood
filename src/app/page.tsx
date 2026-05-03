import Image from "next/image";
import Link from "next/link";

async function getPexelsImage() {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    return null;
  }

  try {
    const res = await fetch("https://api.pexels.com/v1/search?query=nature+landscape+aesthetic&orientation=landscape&size=large&per_page=15", {
      headers: {
        Authorization: apiKey,
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch image');
    }

    const data = await res.json();
    if (data.photos && data.photos.length > 0) {
      // Pick a random photo from the results
      const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];
      return randomPhoto.src.original;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Pexels image:", error);
    return null;
  }
}

export default async function Home() {
  const bgImage = await getPexelsImage() || "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg";

  const links = [
    { title: "Personal Blog", url: "https://davidhullster.github.io", icon: "📝" },
    { title: "GitHub Profile", url: "https://github.com/davidhullster", icon: "💻" },
    { title: "About Me", url: "#", icon: "👋" },
    { title: "Contact", url: "mailto:davidhullster@example.com", icon: "📧" },
  ];

  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative bg-neutral-900"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      {/* Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8 flex flex-col items-center animate-in fade-in zoom-in duration-700">
        
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
              className="group relative flex items-center justify-between p-4 bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 text-white overflow-hidden shadow-sm hover:shadow-md"
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
