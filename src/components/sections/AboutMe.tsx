import Image from "next/image";
import aboutImage from "./image.png";

export function AboutMe() {
  return (
    <section id="about" className="border-t border-white/5 bg-[#02040b] px-6 py-20 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 lg:grid lg:grid-cols-[5fr_4fr] lg:items-center lg:gap-16">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              About Me
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              About <span className="text-accent">Me</span>
            </h2>
          </div>
          <p className="max-w-2xl font-sans text-base leading-relaxed text-zinc-300 md:text-lg">
            My name is <span className="font-semibold text-white">Swapneel Mukherjee</span>. I live in Andal and I have completed my education with strong foundations in technology and engineering. My mother&apos;s name is <span className="font-semibold text-white">Payel Layek Mukherjee</span> and my father&apos;s name is <span className="font-semibold text-white">Shyamal Mukherjee</span>. I am passionate about building secure, scalable systems and creating impactful digital experiences.
          </p>
          <p className="max-w-2xl font-sans text-base leading-relaxed text-zinc-400">
            I enjoy solving complex problems, learning new technologies, and using my skills to help teams deliver reliable, high-performance products. This section is a quick introduction to who I am and where I come from.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1118] p-4 shadow-2xl shadow-black/40">
          <Image
            src={aboutImage}
            alt="Swapneel Mukherjee"
            width={900}
            height={900}
            className="h-full w-full rounded-[1.75rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
