import Image from "next/image";
import { PageProps } from './../.next/types/app/layout';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold text-primary-500">This is welcome Pages</h1>
      <Link href={"/about"}>
      </Link>
    </div>
  );
}
