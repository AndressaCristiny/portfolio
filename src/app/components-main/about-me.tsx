import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8 mb-80"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,#2C3E50,#1A2634)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[linear-gradient(135deg,#2C3E50,#1A2634)] shadow-xl ring-1 shadow-indigo-700/10 ring-indigo-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12"
          /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-lg font-semibold text-gray-200 sm:text-xl">
            <p>
              {/* “Estou em constante evolução profissional, movida pela curiosidade
              e pela vontade de aprender todos os dias. Acredito que a
              curiosidade é essencial para o crescimento na área de tecnologia e
              um dos principais motores da inovação.” */}
              “Sou desenvolvedora full-stack com foco em construir soluções do
              zero que realmente entregam valor. Tenho experiência prática em
              projetos complexos, sempre priorizando performance, escalabilidade
              e clareza nos processos. Meu diferencial está na capacidade de
              transformar desafios técnicos em sistemas robustos, bem
              documentados e prontos para crescer junto com o negócio. Tenho
              visão de produto, pensamento crítico e gosto de atuar em ambientes
              onde inovação e eficiência andam juntas.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt=""
              src="https://avatars.githubusercontent.com/u/92947091?s=400&u=758e1f8dff8073b7446efd1f9907f69dfd5c661a&v=4"
              className="mx-auto size-20 rounded-full"
              width={1824}
              height={1080}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-100">
                Andressa Cristiny
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-500"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-400">Desenvolvedora Full-Stack</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
