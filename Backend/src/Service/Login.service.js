import { FindUserbyUsername } from "../Repository/Login.repository.js";

/**
 * Handles user Login logic
 * @param {Object} param0 - user data
 * @param {string} param0.username - The user's username
 * @param {string} param0.password - The user's password
 */

export async function LoginService({username, password}) {
  const user = await FindUserbyUsername(username);
  

  if (!user) {
    throw { status: 401, message: "Account not found" };
  }

  const match = await bcrypt.compare(password, user.Password);
  if (!match) {
    throw { status: 401, message: "Invalid Credential" };
  }

  const token = generateKey(user._id.toString());
  
  return {
    token, response: {
      message: "Login Successful",
      userid: user._id.toString(),
      name: user.Profile_name || user.Username,
      username: user.Username,
      role: user.Role,
      profileImage: user.Profile_pic,
    }
  }
}

