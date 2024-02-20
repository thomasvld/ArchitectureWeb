import Image from "next/image";
import Layout from '../layout'; // Assurez-vous que le chemin est correct
import MenuPopUpState from '../../components/menu';
import BasicRating from "@/components/rating";


export default function Bleach() {
  return (
    <>
      <h2>Dernier chapitre de Bleach :</h2>
      <label htmlFor="manga-select">Quel manga voulez-vous lire ? <MenuPopUpState /></label>
      <p>Retrouvez le dernier chapitre de Bleach ci-dessous : </p>
      <h3>Votre avis sur ce chapitre :</h3>
      <p><BasicRating /></p>


    </>
  )
}

