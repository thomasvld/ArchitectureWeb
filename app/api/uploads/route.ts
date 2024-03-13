import path from "path";
import fs from "fs/promises";

export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    

    const formData = await request.formData()
    console.log(formData);

    const mangaselect = formData.get('mangaselect')
    const file = formData.get('imageData') as File;
    const fileContent = Buffer.from(await file.arrayBuffer());

    const dir = 'public/uploads/' + mangaselect
    let filename = path.join(dir, file.name);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filename, fileContent);
    console.log(filename)
    const [extension, ...name] = filename.split(".").reverse();
    
    return Response.json({ mangaselect, file })
}


