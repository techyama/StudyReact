import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user');
      setUsers(res.data);
    }
    getUser();
  }, []);

  return (
    <>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.age}</p>
            <p>{user.hobbies.join(',')}</p>
          </div>
        )
      })}
    </>
  );
};

export default Example;
