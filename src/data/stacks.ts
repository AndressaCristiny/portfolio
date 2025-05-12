import {
  CodeBracketIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const stacks = [
  {
    name: "Front-end Moderno",
    description: "React, Next.js, Tailwind CSS, com foco em performance e UX.",
    icon: CodeBracketIcon,
  },
  {
    name: "Back-end Escalável",
    description:
      "TypeScript,Node.js, NestJS, Express, C#, PHP/Laravel, Python e APIs REST integradas a bancos de dados.",
    icon: ServerStackIcon,
  },
  {
    name: "Segurança e Autenticação",
    description: "JWT, OAuth2, criptografia e boas práticas de segurança.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Entrega Rápida",
    description:
      "Desenvolvimento eficiente com metodologias ágeis, foco em entregas constantes, comunicação clara e alinhamento com os objetivos do projeto.",
    icon: RocketLaunchIcon,
  },
  // {
  //   name: "Mobile First",
  //   description: "Design responsivo e otimização para dispositivos móveis.",
  //   icon: DevicePhoneMobileIcon,
  // },
  // {
  //   name: "Cloud & DevOps",
  //   description: "Deploy em Vercel, AWS, CI/CD e GitHub Actions.",
  //   icon: CloudIcon,
  // },
];
