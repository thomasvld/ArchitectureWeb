import Image from "next/image";
import Layout from '../layout'; // Assurez-vous que le chemin est correct
import MenuPopUpState from '../../components/menu';
import BasicRating from "@/components/rating";


export default function Naruto() {
  return (
    <>
      <h2>Dernier chapitre de Naruto :</h2>
      <label htmlFor="manga-select">Quel manga voulez-vous lire ? <MenuPopUpState /> </label>
      <p>Retrouvez le dernier chapitre de Naruto ci-dessous : </p>
      <h3>Votre avis sur ce chapitre :</h3>
      <p><BasicRating /></p>


    </>
  )
}

