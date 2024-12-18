import Header from './header';
import Blogs_content from './Blogs_content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './create';
import BlogDetail from './Detail';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Blogs_content />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/blogs/:id" element={<BlogDetail/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
