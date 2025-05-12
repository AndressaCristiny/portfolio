import { stacks } from "@/data/stacks";

export default function Stacks() {
  return (
    <div id="habilidades" className="py-24 sm:py-32 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-700">
            Stack de Desenvolvimento
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-300 sm:text-5xl lg:text-balance">
            Tudo que você precisa para construir aplicações modernas
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Minha stack combina desempenho, escalabilidade e uma ótima
            experiência do usuário. Do front-end ao back-end, passando por
            integrações — estou pronta para transformar ideias em produtos
            funcionais.
          </p>
          {/* e deploys automatizados */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {stacks.map((x) => (
              <div key={x.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-300">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <x.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {x.name}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {x.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
