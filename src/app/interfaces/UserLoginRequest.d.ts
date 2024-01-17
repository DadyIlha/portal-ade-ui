import { NextApiRequest } from "next";

interface UserLoginRequest extends NextApiRequest {
    [x: string]: any;
    body: {
        username: string;
        password: string;
    }
}