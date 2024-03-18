import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function storeImageDetails(filename: string) {
  // Diviser le chemin de l'image en utilisant "/"
  const parts = filename.replaceAll("\\", "/").split("/");
  // Récupérer le nom du manga (name) et nom du fichier (imageData)
  const name = parts[2];
  const imageData = parts[3];

  console.log(parts, name, imageData);

  try {
    // Enregistrer le NOM et NOMIMAGE dans la base de données en utilisant Prisma
    const image = await prisma.image.create({
      data: {
        name,
        imageData,
      },
    });
    console.log("Image enregistrée avec succès:", image);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'image:", error);
  }
  const data = await prisma.image.findMany();
  console.log(data);
}
