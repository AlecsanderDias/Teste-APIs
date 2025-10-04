import { service } from "../Services/services";

export class UserController {
    static getAllUsers = async (req, res) => {
        try {
            const users = await service.userService.getUsers();
            console.log(users);
            return res.status(200).json(users);
        } catch (error) {
            throw new Error(error);
            return res.status(500).json({error: error});
        }
    }
    static findUserById = async (req, res) => {
        const { id } = req.body;
        try {
            const user = await service.userService.getUserById(id);
            console.log(user);
            return res.status(200).json(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    static updateUserById = async (req, res) => {
        const { id } = req.body;
        try {
            const user = await service.userService.updateUserById(id);
            console.log(user);
            return res.status(200).json(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    static deleteUserById = async (req, res) => {
        const { id } = req.body;
        try {
            const user = await service.userService.deleteUserById(id);
            console.log(user);
            return res.status(200).json(user);
        } catch (error) {
            throw new Error(error);
        }
    }
}