import Image from "next/image";
import Layout from "./layout"; // Assurez-vous que le chemin est correct
import MenuPopUpState from "../components/menu";
import BasicRating from "@/components/rating";

export default function Home() {
  return (
    <>
      <h1>Projet Architecture Web Thomas Valade</h1>

      <p>
        Ici vous retrouverez mon projet d'architecture web pour mon semestre
        Erasmus.
      </p>

      <label htmlFor="manga-select">Quel manga voulez-vous lire ? </label>
      <p id="manga-select">
        <MenuPopUpState />
      </p>
    </>
  );
}
