import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Facebook, Instagram, Twitter, Phone } from "lucide-react";
import Link from "next/link";

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="border-none shadow-none text-3xl ">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#0A2A3D] text-white border-none">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul className="grid gap-4 py-4">
          <li>
            <Link
              href="/"
              className="hover:underline text-2xl   hover:text-yellow-500"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/pompes-a-chaleur"
              className="hover:underline text-2xl hover:text-yellow-500"
            >
              POMPES À CHALEUR
            </Link>
          </li>
          <li>
            <Link
              href="/chauffage"
              className="hover:underline text-2xl hover:text-yellow-500"
            >
              CHAUFFAGE
            </Link>
          </li>
          <li>
            <Link
              href="/climatisation"
              className="hover:underline text-2xl hover:text-yellow-500"
            >
              CLIMATISATION
            </Link>
          </li>
          <li>
            <Link
              href="/plomberie"
              className="hover:underline text-2xl hover:text-yellow-500"
            >
              PLOMBERIE
            </Link>
          </li>
          <li>
            <Link
              href="/realisation"
              className="hover:underline text-2xl hover:text-yellow-500"
            >
              NOS RÉALISATIONS
            </Link>
          </li>
          <li>
            <Link
              href="/a-propos"
              className="hover:underline text-2xl hover:text-yellow-500"
            >
              À PROPOS
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="hover:underline text-2xl hover:text-yellow-500"
            >
              CONTACTS
            </Link>
          </li>
        </ul>
        <div className="py-4 text-center">
          <h3 className="font-semibold">Nous contacter</h3>
          <p>
            <strong>Téléphone:</strong>{" "}
            <a href="tel:+123456789" className="hover:underline">
              +1 (234) 567-89
            </a>
          </p>
          <p>26000 | Valence</p>
        </div>
        <SheetFooter>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Twitter size={24} />
            </a>
            <a href="tel:+123456789" className=" ">
              <Phone size={24} />
            </a>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
