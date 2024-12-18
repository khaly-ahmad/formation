import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('Khaly');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { title, content, username };
        try {
            const res = await fetch('http://localhost:3000/blogs',{
                method: 'POST',
                headers: {'content-type':'Application/json'},
                body: JSON.stringify(body)
            });
            console.log(body)
            navigate('/');
            if(!res.ok) throw Error('error in your request')
        }catch(error){
            console.log(error.message)
        }
    }
    return (
        <div className="new-blog">
            <h1> Add a new blog </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Title:  </label>
                <input type="text" id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content"> Blog content: </label>
                <textarea required id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <label htmlFor="author"> Author:  </label>
                <select required id="author" value={username} onChange={(e) => { setUsername(e.target.value) }}>
                    <option value="Khaly"> Khaly </option>
                    <option value="Amad"> Amad </option>
                    <option value="Djifri"> Djifri </option>
                </select>
                <button id="btn"> publish </button>
            </form>

            
        </div>
    );
}

export default Create;