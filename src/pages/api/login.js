// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {users, secret} from '@/utils';
import {promisify} from 'node:util';
import jwt from 'jsonwebtoken';

const sign = promisify(jwt.sign).bind(jwt);

export default async function handler(req, res) {
  const {email, password} = req.body;
  switch(req.method) {
    case 'POST':
      if(!email) {
        return res.status(400).json({message: 'Please provide an email address'});
      }
      if(!password) {
        return res.status(400).json({message: 'Please provide a password'});
      }
      const user = users.find(user => user.email === email && user.password === password);
      if(!user) {
        return res.status(401).json({message: 'Invalid Credentials'});
      }
      const token = await sign({id: user.id}, secret);
      res.json({user, token});
      break;
    default:
      res.status(405).json({message: 'Method not supported'});
  }
 
}
