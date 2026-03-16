import { Anek_Latin } from 'next/font/google';

const anekLatin = Anek_Latin({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-anek',
});

const collaborationReasons = [
  {
    title: "Free premium entry to all attractions",
    description: "Experience everything Sai Teerth has to offer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Access to restricted shooting spots",
    description: "Capture exclusive behind-the-scenes content",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "Brand reposts on official channels",
    description: "Get featured on our social media platforms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    title: "Long-term partnership opportunities",
    description: "Build an ongoing relationship with us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Chance to bring spirituality-based content to a new audience",
    description: "Connect with millions through meaningful content",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Priority support from the marketing team",
    description: "Dedicated assistance throughout your journey",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
];

export default function CollaborationSection() {
  return (
    <section className={`${anekLatin.variable} font-sans bg-white py-0 pb-4 pt-20 px-6 min-h-screen flex flex-col items-center`}>
      <h2 className="text-4xl md:text-5xl font-bold text-[#333] mb-16 text-center">
        Why Collaborate{' '}
        <span className="bg-gradient-to-b from-[#CD3F0D] to-[#80050A] bg-clip-text text-transparent">
          With Us?
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {collaborationReasons.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#FFF5E2] rounded-[40px] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4"
          >
            {/* Icon Container */}
            <div className="bg-[#FBBC05] text-[#5A0308] p-4 rounded-full flex items-center justify-center">
              {item.icon}
            </div>

            {/* Text Content */}
            <div className="space-y-2">
              <h3 className="text-xl  text-gray-800 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}