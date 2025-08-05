import { getAllUsers } from "../services/user.service.js";

export const listUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ message: "Usuários listados com sucesso", users });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};
