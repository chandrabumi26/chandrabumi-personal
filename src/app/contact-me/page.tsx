import Image from "next/image";
import GithubLogo from "@/assets/pictures/github_logo.png";
import EnvelopeLogo from "@/assets/pictures/envelope_logo.png";
import LinkedInLogo from "@/assets/pictures/linkedin_logo.png";
import Link from "next/link";

export default function ContactMe() {
  return (
    <main className="h-screen w-full flex py-[60px] px-[50px] gap-[50px]">
        <div className="w-full bg-[#FFFCF7] border-[5px] border-solid border-[#D7CCC8] rounded-2xl shadow-[0_0_14px_0_rgba(0,0,0,0.18)] p-10">
            <div className="flex flex-col">
              <h1 className="text-6xl font-semibold">Connect With Me</h1>
              <div className="flex flex-col gap-[60px] mt-16">
                <Link href="https://github.com/chandrabumi26" className="flex items-center px-9 py-7 gap-8 bg-[#E0F2FE] border-[5px] border-solid border-[#BAE6FD] rounded-2xl">
                  <Image width="50" height="50" src={GithubLogo} alt="github-logo" />
                  <span className="text-[#1E3A5F] text-3xl">github.com/chandrabumi26</span>
                </Link>
                <Link href="https://github.com/chandrabumi26" className="flex items-center px-9 py-7 gap-8 bg-[#D1FAE5] border-[5px] border-solid border-[#A7F3D0] rounded-2xl">
                  <Image width="50" height="50" src={EnvelopeLogo} alt="github-logo" />
                  <span className="text-[#1E4034] text-3xl">chandra.bumi@gmail.com</span>
                </Link>
                <Link href="https://github.com/chandrabumi26" className="flex items-center px-9 py-7 gap-8 bg-[#FCE7F3] border-[5px] border-solid border-[#FBCFE8] rounded-2xl">
                  <Image width="50" height="50" src={LinkedInLogo} alt="github-logo" />
                  <span className="text-[#5B2B45] text-3xl">Dorojatun Chandrabumi</span>
                </Link>
              </div>
            </div>
        </div>
        <div className="w-full flex flex-col bg-[#FFFCF7] border-[5px] border-solid border-[#D7CCC8] rounded-2xl shadow-[0_0_14px_0_rgba(0,0,0,0.18)] p-10">
          <h1 className="text-6xl font-semibold">Get In Touch</h1>
          <h2 className="text-2xl mt-6">Let&apos;s work together to bring your ideas to life.</h2>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col mt-16 gap-10">
              <input 
                type="text" 
                placeholder="Your@email.com"
                className="text-2xl text-[#7FB0D9] px-6 py-4 bg-[#E0F2FE] border-[5px] rounded-2xl border-[#BAE6FD] border-solid outline-none focus:ring-0"
              />
              <input 
                type="text" 
                placeholder="Subject for collaboration"
                className="text-2xl text-[#6FBFA0] px-6 py-4 bg-[#D1FAE5] border-[5px] rounded-2xl border-[#A7F3D0] border-solid outline-none focus:ring-0"
              />
              <textarea rows={4} className="text-2xl text-[#D490B6] px-6 py-4 bg-[#FCE7F3] border-[5px] rounded-2xl border-[#FBCFE8] border-solid outline-none focus:ring-0 resize-none max-h-72 h-72" placeholder="Tell me about your project idea..."></textarea>
            </div>
            <button className="cursor-pointer text-2xl bg-[#F87171] text-white w-full flex justify-center items-center py-4 rounded-2xl">Send Message</button>
          </div>
        </div>
    </main>
  );
}
