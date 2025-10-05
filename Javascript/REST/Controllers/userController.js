import { service } from "../Services/services.js";

export class UserController {
    static getAllUsers = async (req, res) => {
        try {
            const users = await service.userService.getUsers();
            return res.status(200).json(users);
        } catch (error) {
            // return res.status(500).json({error: error});
            throw new Error(error);
        }
    }
    static findUserById = async (req, res) => {
        const { id } = req.params;
        try {
            const user = await service.userService.getUserById(parseInt(id));
            return res.status(200).json(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    static createUser = async (req, res) => { 
        const data = req.body;
        try {
            const user = await service.userService.createUser(data);
            return res.status(200).json(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    static updateUserById = async (req, res) => {
        const { id } = req.params;
        try {
            const user = await service.userService.updateUserById(parseInt(id), req.body);
            return res.status(200).json(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    static deleteUserById = async (req, res) => {
        const { id } = req.body;
        try {
            const user = await service.userService.deleteUserById(parseInt(id));
            return res.status(200).json(user);
        } catch (error) {
            throw new Error(error);
        }
    }
}