import './App.css'
import Header from './header'
import Footer from './footer'
import Greeting from './greetings'
import ProfileCard from './profileCard'
function App() {
  return (
    <>
      <Header />
      <div className="greet">
        
<Greeting name="Priya" topic="React Components" />

<Greeting name="Rohan" topic="JSX & Props" />
</div>
<div className="profile-card-container">
<ProfileCard
name="Arjun Kumar"
role="Frontend Developer"
image="https://randomuser.me/api/portraits/men/32.jpg"
/>
<ProfileCard
name="Sneha Verma"
role="UI/UX Designer"
image="https://randomuser.me/api/portraits/women/44.jpg"
/>
</div>
      <Footer />
    </>
  )
}

export default App
