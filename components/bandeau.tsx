import * as React from "react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <>
    <center>
      <div id="divbandeau">
        <Link href="/">
          <button id="home" type="button">
            Home
          </button>
        </Link>
        <Link href="/bleach">
          <button type="button">Bleach</button>
        </Link>
        <Link href="/dragonball">
          <button type="button">Dragon Ball</button>
        </Link>
        <Link href="/naruto">
          <button type="button">Naruto</button>
        </Link>
        <Link href="/onepiece">
          <button type="button">One Piece</button>
        </Link>
        <Link href="/admin">
          <button id="admin" type="button">
            Ajouter
          </button>
        </Link>
      </div>
      </center>
    </>
  );
}
