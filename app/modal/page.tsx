"use client";
import { Modal } from "@/components/modal";
import { Nav } from "@/components/nav";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <header>
        <Nav links={["home"]} />
      </header>

      <h1>Client page</h1>
      <h3>State can be used only in clien entries</h3>

      <Modal />
    </>
  );
}
