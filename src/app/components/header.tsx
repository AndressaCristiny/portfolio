"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    // <header className="sticky top-0 z-50 w-full bg-background/10 backdrop-blur-sm">
    <header className="sticky top-0 z-50 w-full bg-[rgba(0,4,12,0.7)] backdrop-blur-md shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-300">
              Andressa Cristiny
            </span>
          </Link>
        </div>

        {/* Navegação - Centralizados */}
        <nav className="flex-1 flex justify-center items-center space-x-6 text-muted-foreground">
          <Link
            href="#projetos"
            className="text-base font- transition-colors hover:text-zinc-50"
          >
            Projetos
          </Link>
          <Link
            href="#habilidades"
            className="text-base font-medium transition-colors hover:text-zinc-50"
          >
            Habilidades
          </Link>
          <Link
            href="#sobre"
            className="text-base font-medium transition-colors hover:text-zinc-50"
          >
            Sobre
          </Link>
          <Link
            href="#contatos"
            className="text-base font-medium transition-colors hover:text-zinc-50"
          >
            Contatos
          </Link>
        </nav>

        {/* Contato */}
        <div className="flex items-center">
          <Button asChild>
            <Link href="#contatos">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
