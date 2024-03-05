import Image from "next/image";
import Layout from "../layout"; // Assurez-vous que le chemin est correct
import MenuPopUpState from "../../components/menu";
import BasicRating from "@/components/rating";
import HomeButton from "@/components/bandeau";

export default function Bleach() {
  return (
    <>
      <HomeButton />
      <h2>Dernier chapitre de Bleach :</h2>
      <label htmlFor="manga-select">
        Quel manga voulez-vous lire ? <MenuPopUpState />
      </label>
      <p>Retrouvez le dernier chapitre de Bleach ci-dessous : </p>
      <p>
        <BasicRating />
      </p>
    </>
  );
}
