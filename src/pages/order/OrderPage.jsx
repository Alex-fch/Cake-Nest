import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function OrderPage() {
    const { name } = useParams();

    return (
        <div>
            <h1>Bonjour {name}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    )
}
 
export default OrderPage