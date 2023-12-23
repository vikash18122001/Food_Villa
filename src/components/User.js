import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
  
  }, []);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
     
    </div>
  );
};

export default User;
