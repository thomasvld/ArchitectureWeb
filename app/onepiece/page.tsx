import Image from "next/image";
import Layout from "../layout"; // Assurez-vous que le chemin est correct
import MenuPopUpState from "../../components/menu";
import HomeButton from "@/components/bandeau";
import RowContextMenuOnepiece from "@/components/onepiecelist";

export default function Onepiece() {
  return (
    <center>
      <HomeButton />
      <h2>Dernier chapitre de One Piece :</h2>
      <label htmlFor="manga-select">
        Quel manga voulez-vous lire ? <MenuPopUpState />{" "}
      </label>
      <p>Retrouvez le dernier chapitre de One Piece ci-dessous : </p>
      <RowContextMenuOnepiece />
    
    </center>
  );
}
