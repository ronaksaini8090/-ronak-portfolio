"use client";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/ronaksaini8090"
        target="_blank"
        className="rounded-xl border border-gray-700 px-4 py-2"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/ronak-saini-649bb3320/"
        target="_blank"
        className="rounded-xl border border-gray-700 px-4 py-2"
      >
        LinkedIn
      </a>

      <a
        href="https://www.instagram.com/ronaksaini773/?__pwa=1"
        target="_blank"
        className="rounded-xl border border-gray-700 px-4 py-2"
      >
        Instagram
      </a>

      <a
        href="ronaksaini773@gmail.com"
        className="rounded-xl border border-gray-700 px-4 py-2"
      >
        Email
      </a>
    </div>
  );
}