import jwt from 'jsonwebtoken';
import { SECRET } from './config.js';

const tokenExtractor = async (req, res, next) => {
    try{
        const authorization = req.get('authorization')
        if(authorization && authorization.toLowerCase().startsWith('bearer')){
            try{
                req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
                next();
            }catch{
                res.status(401).json({error: 'token invalid'})
            }
        }else{
            res.status(401).json({error: 'token missing'})
        }
    }catch(error){
        next(error)
    }
}

export {
    tokenExtractor
}