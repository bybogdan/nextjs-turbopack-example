import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

export default async function Post() {
  const data: { name: string } = await new Promise((res) =>
    setTimeout(() => {
      res({ name: "Cat" });
    }, 1000)
  );

  return (
    <>
      <header>
        <Nav links={["home"]} />
      </header>

      <hgroup>
        <h2>Server componennt </h2>
        <h3>Hello, {data.name}</h3>
      </hgroup>
    </>
  );
}
