import Image from "next/image";
import Layout from "../layout"; // Assurez-vous que le chemin est correct
import MenuPopUpState from "../../components/menu";
import BasicRating from "@/components/rating";
import HomeButton from "@/components/bandeau";
import RowContextMenuDragonball from "@/components/dragonballlist";

export default function Dragonball() {
  return (
    <>
      <HomeButton />
      <h2>Dernier chapitre de Dragon Ball :</h2>
      <label htmlFor="manga-select">
        Quel manga voulez-vous lire ? <MenuPopUpState />{" "}
      </label>
      <p>Retrouvez le dernier chapitre de Dragon Ball ci-dessous : </p>
      <RowContextMenuDragonball />
      <p>
        <BasicRating />
      </p>
    </>
  );
}
