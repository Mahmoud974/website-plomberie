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
          <MenubarTrigger className="relative cursor-pointer transition-all duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300">
            HOME
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <MenubarTrigger className="relative cursor-pointer transition-all duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300">
          PRESTATIONS
        </MenubarTrigger>
        <MenubarContent className="bg-black text-white border border-gray-700 shadow-lg rounded-md overflow-hidden">
          {[
            { name: "Pompes à chaleur", href: "pompes-a-chaleur" },
            { name: "Chauffage", href: "chauffage" },
            { name: "Climatisation", href: "climatisation" },
            { name: "Plomberie", href: "plomberie" },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <MenubarItem className="cursor-pointer px-4 py-2 transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                {item.name}
              </MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <Link href="realisations">
          <MenubarTrigger className="relative cursor-pointer transition-all duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300">
            NOS RÉALISATIONS
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <Link href="about">
          <MenubarTrigger className="relative cursor-pointer transition-all duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300">
            À PROPOS
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <span className="text-white">|</span>

      <MenubarMenu>
        <Link href="/contact">
          <MenubarTrigger className="relative cursor-pointer transition-all duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300">
            CONTACT
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
