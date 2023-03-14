import jwt from 'jsonwebtoken';
import { users, jwtSecret } from "@/utils";


export default async function handler(req, res) {
    const auth = req.headers['authorization'];
    switch(req.method) {
        case 'GET':
            if(!auth) {
                return res.status(401).send({message: 'Invalid bearer token'});
            }
            const token = auth.split(' ').slice(-1)[0];
            try {
                const data = jwt.verify(token, jwtSecret);
                const user = users.find(user => user.id === data.id);
                if(!user) {
                    throw new Error();
                }
                res.json(user);
            } catch (error) {
                res.status(401).json({message: 'Malformed bearer token'})
            }
            break;
        default:
            res.status(405).json({message: 'Method not allowed'});

    }
}