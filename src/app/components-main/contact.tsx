import {
  EnvelopeIcon,
  // PhoneIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Hero CTA */}
      <div
        id="contatos"
        className="relative isolate overflow-hidden py-16 sm:py-20"
      >
        <Image
          alt=""
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/footer.avif`}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          width={1824}
          height={1080}
          style={{ maxHeight: "60vh" }}
        />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Vamos trabalhar juntos!
            </h2>
            <p className="mt-4 text-base text-pretty text-gray-300 sm:text-lg">
              Tenho paixão por transformar ideias em soluções digitais modernas
              e eficientes. Se você busca alguém comprometida com qualidade,
              performance e boa comunicação, entre em contato comigo.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Info */}
            <dl className="flex-1 space-y-6 text-sm text-gray-300">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Meios de contato
              </h2>
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-5 w-5 text-white" />
                <div>
                  <dt className="font-semibold text-white">Email</dt>
                  <dd>andressasilva04178@gmail.com</dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-5 w-5 text-white font-bold text-lg">🌐</div>
                <div>
                  <dt className="font-semibold text-white">Redes</dt>
                  <dd>
                    <a
                      href="https://www.linkedin.com/in/andressa-cristiny-da-costa-silva-96407b221/"
                      target="_blank"
                      className="underline hover:text-white"
                    >
                      LinkedIn
                    </a>{" "}
                    &nbsp;|&nbsp;
                    <a
                      href="https://github.com/AndressaCristiny"
                      target="_blank"
                      className="underline hover:text-white"
                    >
                      GitHub
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Contact Form */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Me envie uma mensagem
              </h2>
              <form
                action="https://formsubmit.co/andressasilva04178@gmail.com"
                method="POST"
                className="flex flex-col gap-3"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="flex-1 rounded-md bg-white/5 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-indigo-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    required
                    className="flex-1 rounded-md bg-white/5 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-indigo-500"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Escreva sua mensagem..."
                  rows={3}
                  required
                  className="rounded-md bg-white/5 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-indigo-500"
                />
                <button
                  type="submit"
                  className="w-fit rounded-md bg-indigo-500 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-400"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
