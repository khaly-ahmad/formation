import usefetch from "./usefetch";
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const {data: blog, error, isPending } = usefetch('http://localhost:3000/blogs/'+id);

    const handleDelete = async () =>{
        try {
            const res = await fetch('http://localhost:3000/blogs/' + id, { method: 'DELETE' });
            if (!res.ok) throw Error('Erreur lors de la suppression');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="blog-detail">
            {error && <div> {error} </div>}
            {isPending && <div> is pending... </div>}
            {blog && 
            <article>
                <h1> {blog.title} </h1>
                <i> written by <span className="author" > {blog.username} </span></i>
                <div className="paragraph">
                    {blog.content}
                </div>
                <button onClick={handleDelete}>delete</button>
            </article>
            }
        </div>
    );
}

export default BlogDetail;