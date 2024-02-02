"use client";

import Image from "next/image";
import GithubIcon from "../assets/githubIcon.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="row-start-12 row-end-13 col-start-2 col-end-12 flex items-center justify-between px-9">
      <Link href={"mailto:virtualsant@gmail.com"}>
        <p className="text-gray-400">contact me on virtualsant@gmail.com</p>
      </Link>
      <Link href={"https://github.com/parthnariya/e-commerce-next"}>
        <Image src={GithubIcon} alt="GithubIcon" className="max-h-6" />
      </Link>
    </footer>
  );
}
