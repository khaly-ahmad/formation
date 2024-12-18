import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header>
                <h1 data-content="All blogs"> All blogs </h1>
                <Link to="/"> home </Link>
                <Link to="/create"> New blog </Link>
            </header>
        </>);
}

export default Header;