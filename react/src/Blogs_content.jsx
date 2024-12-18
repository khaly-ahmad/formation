import usefetch from './usefetch'; 
import Blogs from './blogs';
const Blogs_content = () => {

    const url = 'http://localhost:3000/blogs'
    const { data: blogs, error, isPending } = usefetch(url)

    return (
        <div className="Blogs">
            {error && <div> {error} </div>}
            {isPending && <div> is pending... </div>}
            {blogs && <Blogs blogs={blogs} />}
        </div>
    );
}

export default Blogs_content;