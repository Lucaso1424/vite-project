import { useNavigate } from "react-router-dom";

export function Store() {
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
    }

    return <div>
        <h1>Store Page</h1>
        <button onClick={goToMainPage}>Go to main page</button>
    </div>
}