import express from "express";
import fs from "fs";

const app = express();
const port = 3000;
app.use("/", (req, res) => {
    // fs.readFile("./members.json", "utf8", (err, jsonString) => {
    //     if (err) {
    //         console.log("File read failed:", err);
    //         return;
    //     }
    //     try {
    //         const jsonData = JSON.parse(jsonString);
    //         res.json(jsonData)
    //     } catch (err) {
    //         console.log("Error parsing JSON string:", err);
    //         return;
    //     }
    // });
    try {
        const jsonString = fs.readFileSync('members.json');
        const jsonData = JSON.parse(jsonString);
        res.json(jsonData)
    } catch (err) {
        console.log("Error parsing JSON string:", err);
        return;
    }
})
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})