export type User = {
  email: string;
  role: "user" | "admin";
};

const AUTH_KEY = "cp_auth_user";

/** Dummy credential (buat tugas) */
const DUMMY_EMAIL = "admin@company.com";
const DUMMY_PASSWORD = "admin123";

export function login(email: string, password: string): User | null {
  if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
    const user: User = { email, role: "admin" };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return user;
  }
  return null;
}

export function logout(): void {
  localStorage.removeItem(AUTH_KEY);
}

export function getUser(): User | null {
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

export function isLoggedIn(): boolean {
  return Boolean(getUser());
}