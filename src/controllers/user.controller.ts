import { User} from '../entities/User.entity';
import { Request, Response } from 'express';

/* {firstName, lastName, email, active,password} */

export const createUser = async (req: Request, res: Response) => {
    try{
        const {firstName,
            lastName,
            email,
            password} = req.body;
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        await user.save();
        console.log(user);    
        res.send(user);
    
    }
    catch(err){
        if (err instanceof Error) {
        return res.status(500).json({error : err.message});
        }
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try{
        const users = await User.find();
        res.send(users);
    }
    catch(err){
        if (err instanceof Error) {
        return res.status(500).json({error : err.message});
        }
    }
}

export const getUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const user = await User.findOneBy({id : parseInt(id)});
        res.json(user);
    }
    catch(err){
        if (err instanceof Error) {
        return res.status(500).json({error : err.message});
        }
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const user = await User.update({id : parseInt(id)}, req.body);
        return res.status(204).send(user);
    }
    catch(err){
        if (err instanceof Error) {
        return res.status(500).json({error : err.message});
        }
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const result = await User.delete({id : parseInt(id)});
        if (result.affected === 0 ) 
            return res.status(404).json({error: "User not found"}) 
        return res.status(204).send(result);
    }
    catch(err){
        if (err instanceof Error) {
        return res.status(500).json({error : err.message});
        }
    }
}