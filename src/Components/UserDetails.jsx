import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Users } from "./Users";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3004/data?id=${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  //   return user.length === 0 ? <h1>Product not found</h1> : (

  //      <h2>
  //          <p>User Details</p>
  //           {user.model}
  //           {user.warranty}
  //           {user.manufacture}
  //       </h2>

  //   )

  if (user === null) {
    return <h1>...Loading Data</h1>;
  } else if (user.length === 0) {
    return <h1>Product does not exist</h1>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {user.map((item) => (
        <div key={item.id}>
          <h2>Product Name: {item.name}</h2>
          <h2>Product Model: {item.model}</h2>
          <h2>Product Warranty: {item.warranty}</h2>
          <h2>Product Manufacture: {item.manufacture}</h2>
          <h2>Product Price: {item.price}</h2>
        </div>
      ))}
    </div>
  );
};

export { UserDetails };
