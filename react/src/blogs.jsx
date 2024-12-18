import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {

    return (
        <>
            {blogs.map(blog => (
                <div className='blog' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="blog-detail">
                        <p className="title"> {blog.title} </p>
                        <p className="author"><i>writen by</i> {blog.username}</p>
                    </Link>
                </div>
            ))}
        </>);
}

export default Blogs;