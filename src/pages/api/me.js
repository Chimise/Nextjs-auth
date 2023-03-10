import { users, secret } from "@/utils";
import jwt from 'jsonwebtoken';
import {promisify} from 'node:util'

const verify = promisify(jwt.verify).bind(jwt);


const handler = async (req, res) => {
    const auth = req.headers['authorization'];
    switch(req.method) {
        case 'GET':
            if(!auth) {
                return res.status(401).send({message: 'Invalid bearer token'});
            }
            const token = auth.split(' ').slice(-1)[0];
            try {
                const data = await verify(token, secret);
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

export default handler;