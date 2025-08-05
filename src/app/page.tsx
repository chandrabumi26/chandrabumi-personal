import Image from "next/image";
import AboutMeLogo from "@/assets/pictures/aboutme_logo.png"
import SkillsLogo from "@/assets/pictures/skills_logo.png"
import ProjectsLogo from "@/assets/pictures/projects_logo.png"
import ContactLogo from "@/assets/pictures/contact_logo.png"

export default function Home() {
  return (
    <div className="bg-[#F2E4CC] min-h-screen [font-family:var(--font-pixelify_sans)]">
      <main className="grid grid-cols-2 grid-rows-2 h-screen w-full">
        <div className="flex items-end justify-end pr-10 pb-10">
          <div className="group bg-[#B88C61] border-[10px] border-solid border-[#A27C5B] w-[350px] h-[350px] rounded-2xl flex flex-col items-center justify-center gap-6 text-black cursor-pointer">
            <Image width="180" height="180" src={AboutMeLogo} alt={"aboutme-logo"} className="group-hover:animate-bounce" />
            <span className="text-4xl group-hover:animate-bounce">About Me</span>
          </div>
        </div>
        <div className="flex pl-10 pb-10 items-end">
          <div className="group bg-[#D0F0E0] border-[10px] border-solid border-[#A8D9C2] w-[350px] h-[350px] rounded-2xl flex flex-col items-center justify-center gap-6 text-black cursor-pointer">
            <Image width="180" height="180" src={SkillsLogo} alt={"skills-logo"} className="group-hover:animate-bounce" />
            <span className="text-4xl group-hover:animate-bounce">Skills</span>
          </div>
        </div>
        <div className="flex pt-10 pr-10 justify-end">
          <div className="group bg-[#E4D4F4] border-[10px] border-solid border-[#C7B1E2] w-[350px] h-[350px] rounded-2xl flex flex-col items-center justify-center gap-6 text-black cursor-pointer">
            <Image width="180" height="180" src={ProjectsLogo} alt={"projects-logo"} className="group-hover:animate-bounce" />
            <span className="text-4xl group-hover:animate-bounce">Projects</span>
          </div>
        </div>
        <div className="flex pt-10 pl-10">
          <div className="group bg-[#FDF3C3] border-[10px] border-solid border-[#D6B980] w-[350px] h-[350px] rounded-2xl flex flex-col items-center justify-center gap-6 text-black cursor-pointer">
            <Image width="180" height="180" src={ContactLogo} alt={"contact-logo"} className="group-hover:animate-bounce" />
            <span className="text-4xl group-hover:animate-bounce">Contact</span>
          </div>
        </div>
      </main>
    </div>
  );
}
