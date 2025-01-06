import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(resp.data);
    };

    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};
