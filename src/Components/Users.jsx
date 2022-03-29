import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       
        fetch(`http://localhost:3004/data`)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err))
      
    }, []);

    return (
      
        <table>

          <thead>

           <tr>
      
             <th>Name</th>
             <th>Price</th>
             <th>More Details</th>

           </tr>

          </thead>

          <tbody>
           {users.map((user) => (
              <tr key={user.id}>
                 <td>{user.name}</td>
                 <td>{user.price}</td>
                 <td>
                   <Link to={`/users/${user.id}`}>more details..</Link>
                 </td>
              </tr>
           ))}

          </tbody>

        </table>

    )
}

