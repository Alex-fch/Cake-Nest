import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <div>
            <h1>Error page 🙈</h1>
            <Link to="/">
                <button>Retourner à la page d&apos;accueil</button>
            </Link>
        </div>
    )
}
 
export default ErrorPage