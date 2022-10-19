import { readFile,  rename} from "fs";
import path, {resolve} from "path";

const __dirname = resolve()

export const gallTrash = (fileName) => {
    const oldPath = path.join(__dirname,  `api/public/images/product/${fileName}`);

    readFile(oldPath, (err, data) => {
        if(err){
            console.log('File not found');
        }
        if(data){
            //renameSync(oldPath, newPath, callback) // moving file
            const newPathTrash = path.join(__dirname,  `api/public/images/product/trash/${Date.now() +'_'+ fileName}`)
            rename(oldPath,newPathTrash, (err) => {
                if(err){
                    console.log(err);
                }
            })
        }
        
    })

}