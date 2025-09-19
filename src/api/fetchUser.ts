export interface User {
  _id: string;
  name: string;
  projects: string[];
  chats: string[];
}

export const fetchDefaultUser = async (): Promise<User | null> => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const res = await fetch(`${API_URL}/api/users/68cd9d2b82400de34d202080`);
    
    if (!res.ok) throw new Error("Failed to fetch user");
    const data: User = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
