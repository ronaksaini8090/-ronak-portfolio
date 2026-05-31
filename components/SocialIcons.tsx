"use client";

export default function SocialIcons() {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/ronaksaini8090",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ronak-saini-649bb3320/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ronaksaini773/",
    },
    {
      name: "Email",
      href: "mailto:ronaksaini773@gmail.com",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-gray-700
            px-4
            py-2
            text-sm
            text-gray-300
            transition-all
            duration-300
            hover:border-cyan-400
            hover:text-cyan-400
            hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
          "
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}