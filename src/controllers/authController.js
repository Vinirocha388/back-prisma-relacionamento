import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

class AuthController {
    async getAllUsers(req, res) {
        try {
          const users = await UserModel.findAll();
          res.json(users);
        } catch (error) {
          console.error("Erro ao listar usuários:", error);
          res.status(500).json({ error: "Erro ao listar usuários" });
        }
      }

      //Registrar novo usuário 
      async register(req, res) {        
        
        try {
            const { name, email, password } = req.body;
            //Validação básica
            if (!name || !email || !password) {
                return res.status(400).json({ error: "Todos os campos são obrigatórios" });
            }

            //Verifica se o usuário já existe
            const userExists = await userModel.findByEmail(email);
            if (userExists) {
                return res.status(400).json({ error: "Email já cadastrado" });
            }

            //HASH da senha 
            const hashedPassword = await bcrypt.hash(password, 10); 


            //Cria o objeto usuário
            const data = {
                name,
                email,
                password: hashedPassword,
            };

            //Cria o usuário
            const newUser = await userModel.create(data);
            res.status(201).json({ message: "Usuário registrado com sucesso", user}); 
            
        } catch (error) {
          console.error("Erro ao registrar usuário:", error);
          res.status(500).json({ error: "Erro ao registrar usuário" });
        }
      }
}

export default new AuthController();