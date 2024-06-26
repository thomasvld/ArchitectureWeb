import Image from "next/image";
import Layout from "../layout"; // Assurez-vous que le chemin est correct
import MenuPopUpState from "../../components/menu";
import HomeButton from "@/components/bandeau";
import RowContextMenuBleach from "@/components/bleachlist";

export default function Bleach() {
  return (
    <center>
      <HomeButton />
      <h2 id="bleach">Dernier chapitre de Bleach :</h2>
      <label id="bleach" htmlFor="manga-select">
        Quel manga voulez-vous lire ? <MenuPopUpState />
      </label>
      <p id="bleach">Retrouvez le dernier chapitre de Bleach ci-dessous : </p>
      <RowContextMenuBleach />
    </center>
  );
}
