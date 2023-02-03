import { Nav } from "@/components/nav";
import Image from "next/image";

export default async function Post() {
  const data = (await (
    await fetch("https://dog.ceo/api/breeds/image/random")
  ).json()) as {
    status: string;
    message: string;
  };

  return (
    <>
      <header>
        <Nav links={["home"]} />
      </header>

      <hgroup>
        <h2>Server component</h2>
        <h3>Hello, from dog</h3>
      </hgroup>
      <Image src={data.message} alt="dog image" width={200} height={200} />
    </>
  );
}
