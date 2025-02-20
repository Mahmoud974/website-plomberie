import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export function MiniMenu() {
  return (
    <Menubar className="bg-transparent shadow-none uppercase text-white border-none cursor-pointer flex items-center gap-4">
      {/* Home */}
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger>HOME</MenubarTrigger>
        </Link>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <MenubarTrigger>PRESTATIONS</MenubarTrigger>
        <MenubarContent className="bg-black text-white">
          <Link className="cursor-pointer" href="pompes-a-chaleur">
            <MenubarItem>Pompes à chaleur</MenubarItem>
          </Link>
          <Link className="cursor-pointer" href="chauffage">
            <MenubarItem>Chauffage</MenubarItem>
          </Link>
          <Link className="cursor-pointer" href="climatisation">
            <MenubarItem>Climatisation</MenubarItem>
          </Link>
          <Link className="cursor-pointer" href="plomberie">
            <MenubarItem>Plomberie</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <Link className="cursor-pointer" href="realisations">
          <MenubarTrigger>NOS RÉALISATIONS</MenubarTrigger>
        </Link>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <Link className="cursor-pointer" href="about">
          <MenubarTrigger>À PROPOS</MenubarTrigger>
        </Link>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <Link className="cursor-pointer" href="/contact">
          <MenubarTrigger>CONTACT</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
