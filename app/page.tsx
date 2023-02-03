import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Nav links={["post", "modal"]} />
      </header>
      <h1>Home page</h1>
    </>
  );
}
