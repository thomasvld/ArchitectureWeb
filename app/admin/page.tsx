import HomeButton from "@/components/bandeau";
import { FormEvent } from "react";

export default function Admin() {
  return (
    <center>
      <HomeButton />
      <div id="divadmin">
        <h2>Ajouter des scans : </h2>
        <form action="/api/uploads" method="post" encType="multipart/form-data">
          <label>Choisissez l'oeuvre : </label>
          <select name="mangaselect" id="manga-select">
            <option value="">--Please choose an option--</option>
            <option value="bleach">Bleach</option>
            <option value="dragonball">Dragon Ball</option>
            <option value="naruto">Naruto</option>
            <option value="onepiece">One Piece</option>
          </select>
          <br></br>

          <label htmlFor="image">
            Sélectionner une image (JPG uniquement) :{" "}
            <input
              type="file"
              id="image"
              name="imageData"
              accept=".jpg"
            ></input>
          </label>
          <input type="submit" value="Envoyer"></input>
        </form>
      </div>
    </center>
  );
}
