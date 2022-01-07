//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import SearchResults from './SearchResults';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useNavigate();
    const onSubmit = e => {
        history(`/?s=${searchQuery}`)
        e.preventDefault()
    };

    return (
        <div className="Search">
        
    <form action="/" method="get" style={{backgroundColor: "orange"}}>
        <div >
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            />
        </div>
        
        
        <button type="submit" className="Search_icon">
        <FaSearch size="20px" onClick={<SearchResults />}/>
        </button>
    </form>
    </div>
);
}

export default SearchBar;

