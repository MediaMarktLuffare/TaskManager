import { useLocation } from 'react-router-dom'
import Header from "./Header";

function HeaderWrapper(props){
    const location = useLocation();
    return(
        <Header location={location} {...props} />
    );
}
export default HeaderWrapper