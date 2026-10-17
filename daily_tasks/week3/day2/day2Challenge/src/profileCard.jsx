import aaravImg from "./assets/aarav.jpg";
import priyaImg from "./assets/priya.jpg";
import rohanImg from "./assets/rohan.jpg";
import "./App.css";

function ProfileCard({ name, role, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    image: aaravImg
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "UI/UX Designer",
    image: priyaImg
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Backend Engineer",
    image: rohanImg
  }
];

export default function UserList() {
  return (
    <div className="user-list">
      {users.map((user) => (
        <ProfileCard 
          key={user.id} 
          name={user.name} 
          role={user.role} 
          image={user.image} 
        />
      ))}
    </div>
  );
}