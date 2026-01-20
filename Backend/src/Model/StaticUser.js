export async function userSchema(
  username,
  email,
  password,
  salt
) {
  
  return {
    Username: `${username}`,
    Email: `${email}`,
    Password: `${password}`,
    DisplayName: null,
    Gender: null,
    Role: 'user',
    Createdat: new Date(),
  }
};

