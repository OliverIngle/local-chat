import { Request, Response } from "express";


function receiver(req: Request, res: Response) {

    let body = req.body;
    let message = body.message;

    if (!message) {
        return res
            .status(400)
            .send("Please include a message")
    }

    res
        .status(200)
        .send("Message received")
    console.log(message);

}


export default receiver;