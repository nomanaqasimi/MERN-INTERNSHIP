import { useState  , useEffect } from 'react';
function UserList(){
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

 useEffect(() => {
    const fetchUsers = async () => {
    

try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data =  await response.json();
    setUsers(data);
}
catch(error){
setError(error.message);
}finally{
setLoading(false);
    }
}
fetchUsers();
 }, [])
 if(loading){
     return <div id="loading">Loading...</div>
 }
 if(error){
     return <div>{error}</div>
 }
 return (
    <div className="container"> 
    {users.map((user) => (
      <p key={user.id}>{user.name}</p>
    ))}
    </div>
 )
}
 export default UserList