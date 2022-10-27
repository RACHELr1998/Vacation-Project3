import express, { NextFunction, Request, Response } from "express";
import path from "path";
import imagesLogic from "../5-logic/images-logic";

const router = express.Router();

router.get("/api/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const imageName = request.params.imageName;
        const absolutePath = path.join(__dirname, "..", "1-assets", "images", imageName);
        const filePath = await imagesLogic.getFilePath(absolutePath);
        response.sendFile(filePath);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;