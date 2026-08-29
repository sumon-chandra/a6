import { prisma } from "../../lib/prisma";
import ApiError from "../../utils/app-error";

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  if (!users) throw ApiError.notFound("No users found!");
  return users;
};

export const UsersService = {
  getAllUsers,
};