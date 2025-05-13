"use client";
import Image from "next/image";
import Link from "next/link";

import TypingEffect from "./typing-effect";
import Svg from "./svg";
import CodeEditor from "./code-editor";

export default function Banner() {
  return (
    // <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
    <div
      className="overflow-hidden dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem] "
      style={{
        background: `linear-gradient(to bottom, rgba(0,4,12,0.70), rgba(0,4,12,0.65))`,
      }}
    >
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-9xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              alt=""
              width="530"
              height="530"
              decoding="async"
              data-nimg="1"
              className="absolute bottom-full right-full -mb-56 -mr-72"
              style={{ color: "transparent" }}
              src={`/portfolio/blur-indigo.png`}
            />
            <div className="relative">
              <div className="inline-block min-h-[3rem]">
                <p className="bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                  <TypingEffect text="Bem-vindo(a)" />
                </p>
              </div>

              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Ao início da sua jornada digital, onde inovação e tecnologia se
                unem para construir um futuro brilhante.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Link
                  className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                  href="#projetos"
                >
                  Iniciar
                </Link>
                <Link
                  className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                  href="https://github.com/AndressaCristiny"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:w-full">
            <CodeEditor />
          </div>

          <Image
            alt=""
            width="530"
            height="530"
            decoding="async"
            data-nimg="1"
            className="absolute -right-64 -top-64"
            style={{ color: "transparent" }}
            src={`/portfolio/blur-cyan.png`}
          />

          <Image
            alt=""
            width="567"
            height="567"
            decoding="async"
            data-nimg="1"
            className="absolute -bottom-1 -right-44"
            style={{ color: "transparent" }}
            src={`/portfolio/blur-indigo.png`}
          />

          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <Svg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
