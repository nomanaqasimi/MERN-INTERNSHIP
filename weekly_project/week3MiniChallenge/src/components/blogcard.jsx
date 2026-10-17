import '../App.css'
function BlogCard(props) {
  return (
    <div className="blog-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p id="author">{props.author}</p>
    </div>
  )
}
export default BlogCard