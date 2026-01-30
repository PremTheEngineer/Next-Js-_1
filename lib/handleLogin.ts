import { HASH_ROUNDS, HASH_SALT } from "./constants";

interface LoginFormData {
  newUserCheck: boolean;
  username: string;
  password: string;
  email?: string;
  age?: number;
  gender?: string;
}

function hash(password: string) {
  const len = password.length;
  let saltedPassword = "";
  for (let i = 0; i < HASH_ROUNDS; i++) {
    saltedPassword +=
      HASH_SALT +
      password.substring(0, len / 2) +
      HASH_SALT +
      password.substring(len / 2);
  }
  return saltedPassword;
}

export function handleLogin(formData: LoginFormData) {
  const usersRaw = localStorage.getItem("users");
  const users: LoginFormData[] = usersRaw ? JSON.parse(usersRaw) : [];

  const { newUserCheck, username, password } = formData;

  // SIGN UP
  if (newUserCheck) {
    const userExists = users.some((u) => u.username === username);

    if (userExists) {
      //   toast.error("User already exists");
      return { success: false, message: "User already exists" };
    }

    const newUser = {
      username,
      password: hash(password),
      email: formData.email,
      age: formData.age,
      gender: formData.gender,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    return { success: true, message: "Signup successful" };
  }

  // LOGIN
  const existingUser = users.find((u) => u.username === username);

  if (!existingUser) {
    // toast.error("User not found");
    return { success: false, message: "User not found" };
  }

  if (existingUser.password !== hash(password)) {
    // toast.error("Invalid password");
    return { success: false, message: "Invalid password" };
  }

  localStorage.setItem("user", JSON.stringify(existingUser));
  return { success: true, message: "Login successful" };
}
