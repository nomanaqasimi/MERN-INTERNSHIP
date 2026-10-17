import BlogCard from './components/blogcard'
import Navbar from './components/navbar'
import Footer from './components/footer'
import './App.css'
const blogsData = [
  {
    id: 1,
    title: "Mastering React Components and Props",
    author: "-Norhan",
    description: "In this post, we dive deep into building reusable UI components in React. We will explore how to pass data dynamically using props and manage state to create interactive web applications effortlessly."
  },
  {
    id: 2,
    title: "Fetching Real-Time Data with JavaScript",
    author: "-peter",
    description: "Learn how to integrate third-party APIs using the modern async/await Fetch API. We'll walk through a practical example of building a dynamic weather application that updates the DOM based on live data."
  },
  {
    id: 3,
    title: "Building Desktop GUIs with Java Swing",
    author: "-Daksh",
    description: "Discover the fundamentals of object-oriented programming by creating interactive desktop applications. This guide covers how to design custom user interfaces, track scores, and read data from files."
  },
  {
    id: 4,
    title: "Optimizing Data Structures in C++",
    author: "-Salar",
    description: "A comprehensive look at using the C++ Standard Template Library (STL). We discuss how hash maps, vectors, and custom sorting algorithms can be combined to build a fast, console-based text search engine."
  }
];
function App() {
  

  return (
    <>
    <Navbar />
    <div className="blog-container">
   <BlogCard title={blogsData[0].title} description={blogsData[0].description} author={blogsData[0].author} />
   <BlogCard title={blogsData[1].title} description={blogsData[1].description} author={blogsData[1].author} />
   <BlogCard title={blogsData[2].title} description={blogsData[2].description} author={blogsData[2].author} />
   <BlogCard title={blogsData[3].title} description={blogsData[3].description} author={blogsData[3].author} />
   </div>
   <Footer/>
   </>
  )
}

export default App
