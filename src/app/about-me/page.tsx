import PersonImage from "@/assets/pictures/person_image.png";
import BulbImage from "@/assets/pictures/bulb_image.png";
import InfoImage from "@/assets/pictures/info_image.png";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  const arr = [
    {
      title: "Name",
      value: "Dorojatun Chandrabumi"
    },
    {
      title: "Profession",
      value: "Frontend Dev"
    },
    {
      title: "Origin",
      value: "Indonesia"
    },
    {
      title: "Likes",
      value: "Gundam, HipHop, NFL, Rock, Science"
    }
  ]
  const skills = [
    {
      title: "NextJS",
      color: "#000000"
    },
    {
      title: "ReactJS",
      color: "#61DAFB"
    },
    {
      title: "TypeScript",
      color: "#3178C6"
    },
    {
      title: "JavaScript",
      color: "#F7DF1E"
    },
    {
      title: "VueJS",
      color: "#4FC08D"
    },
    {
      title: "PHP",
      color: "#777BB3"
    },
    {
      title: "HTML",
      color: "#E34F26"
    },
    {
      title: "SCSS/SASS",
      color: "#CC6699"
    },
    {
      title: "jQuery",
      color: "#0769AD"
    },
  ]
  return (
    <main className="h-screen w-full flex flex-col py-[60px] px-[50px] gap-[50px]">
      <div className="flex w-full gap-10">
        <div className="flex bg-[#FFFCF7] border-[5px] border-solid border-[#D7CCC8] rounded-2xl shadow-[0_0_14px_0_rgba(0,0,0,0.18)] p-10 w-2/3 gap-8">
          <div className="flex flex-col items-center">
            <Image width="200" height="200" src={PersonImage} alt="person-image" />
            <span className="text-4xl">1998-06</span>
          </div>   
          <div className="flex flex-col gap-6">
            { arr.map((item, index) => (
              <div key={index} className="flex w-full">
                <div className="flex w-1/3 justify-between">
                  <span className="text-4xl">{item.title}</span>
                  <span className="text-4xl">:</span>
                </div>
                <span className="text-4xl text-wrap font-bold ml-2 w-2/3">{item.value}</span>
              </div>
            )) } 
          </div>
        </div>

        <div className="flex flex-col bg-[#FFFCF7] border-[5px] border-solid border-[#D7CCC8] rounded-2xl shadow-[0_0_14px_0_rgba(0,0,0,0.18)] w-1/3">
          <div className="flex items-center p-5 border-b-[5px] border-solid border-[#D7CCC8] gap-6">
            <Image width="64" height="64" src={BulbImage} alt="person-image" />
            <h1 className="text-4xl">Outstanding Skills</h1>
          </div>
          <div className="flex w-full relative">
            <Link href="/" className="absolute right-5 bottom-5 underline text-[#005FCC]">more about skills</Link>
            <ul className="flex flex-col gap-4 p-5">
              {skills.slice(0, 5).map((skill, index) => (
                <li key={index} className="text-2xl flex items-center">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="ml-2">{skill.title}</span>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-4 p-5">
              {skills.slice(5).map((skill, index) => (
                <li key={index + 5} className="text-2xl flex items-center">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="ml-2">{skill.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#FFFCF7] border-[5px] border-solid border-[#D7CCC8] rounded-2xl shadow-[0_0_14px_0_rgba(0,0,0,0.18)] w-full">
          <div className="flex items-center p-5 border-b-[5px] border-solid border-[#D7CCC8] gap-6">
            <Image width="64" height="64" src={InfoImage} alt="person-image" />
            <h1 className="text-4xl">About Me</h1>
          </div>
          <div className="flex w-full p-5">
            <p className="text-wrap text-justify text-2xl">
              Highly ambitious and quick-learner, fueled by a passion for growth and innovation, with almost four years of experience in Front-End Developer Field. Eager to absorb new technologies and adeptly apply them to create impactful, and intuitive user interfaces. Proficient in Javascript and Frameworks such as NextJs, ReactJs, VueJs, and Typescript. I’m currently practicing my Backend Skill with GoLang, its been fun to learn a new technologies to make each other working from my Frontend Stacks to my Backend Stacks.
            </p>
          </div>
        </div>
    </main>
  );
}