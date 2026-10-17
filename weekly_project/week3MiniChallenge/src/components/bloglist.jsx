import BlogCard from './blogcard'
function BlogList(props) {
  return (
    <div className="blog-container">
        {array.map(props.blogsData, (blog) => {
            return <BlogCard title={blog.title} description={blog.description} author={blog.author} />
        })}
    
    </div>
  )
}
export default BlogList