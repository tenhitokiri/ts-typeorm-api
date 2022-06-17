import "reflect-metadata"
import app from "./app";
import {AppDataSource}from "./database/db";

const main = async () => {
    const port = process.env.PORT || 3000;
    await AppDataSource.initialize()
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
        }).on('error', (err :string) => {
            console.log(err);
        }
    );
    
}

main();