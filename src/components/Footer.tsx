"use client";

import Image from "next/image";
import GithubIcon from "../assets/githubIcon.svg";
export default function Footer() {
  return (
    <footer className="row-start-12 row-end-13 col-start-2 col-end-12 flex align-middle justify-between px-9">
      <p className="text-gray-400">contact me on Gmail@gmail.com</p>
      <Image src={GithubIcon} alt="GithubIcon" className="max-h-6" />
    </footer>
  );
}
