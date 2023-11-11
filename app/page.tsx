import { GithubLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="h-[512px] w-[360px] bg-gray-900 relative">
        <div className="mt-8 flex flex-col items-center gap-8 w-full">
          <Image
            src="/favicon.ico"
            alt="Edvaldo Junior"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full bg-gray-950 overflow-hidden"
          />
          <div className="text-center">
            <h1 className="font-bold text-2xl">Edvaldo Junior</h1>
            <Link
              href="https://github.com/EddyPBR"
              target="_blank"
              rel="noopener noreferrer"
              className="font-light text-sm transition-colors cursor-alias hover:text-indigo-400"
            >
              @EddyPBR
            </Link>
          </div>
          <div className="h-0.5 w-28 bg-indigo-500 rounded-lg" />
          <h3>DESENVOLVEDOR FULLSTACK</h3>
        </div>

        <div className="h-14 w-full bg-gray-800 absolute bottom-0">
          <ul className="flex gap-6 justify-center items-center h-full">
            <li>
              <Link href="https://github.com/EddyPBR" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-indigo-400">
                <GithubLogo size={32} />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/eddy_pbr" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-indigo-400">
                <InstagramLogo  size={32} />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/eddypbr" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-indigo-400">
                <LinkedinLogo size={32} />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@eddypbr" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-indigo-400">
                <YoutubeLogo size={32} />
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
