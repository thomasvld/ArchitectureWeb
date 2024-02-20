import Image from "next/image";
import Layout from "./layout"; // Assurez-vous que le chemin est correct
import BasicRating from "@/components/rating";
import MenuPopUpState from "../../components/menu";

export default function Home2() {
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
