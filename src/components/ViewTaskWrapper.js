import { useParams, useNavigate, useLocation } from 'react-router-dom'
import ViewTask from './ViewTask';

function ViewTaskWrapper(props){
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    return(
        <ViewTask params={params} navigate={navigate} location={location} {...props} />
    );
}
export default ViewTaskWrapper;