import { UsersService } from "./users.service";
import { asyncHandler } from "../../utils/async-handler";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/send-response";

const getAllUsers = asyncHandler(async (req, res) => {
  const result = await UsersService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully",
    data: result,
  });
});

export const UsersController = { getAllUsers };