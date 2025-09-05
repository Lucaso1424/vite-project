import { useNavigate } from "react-router-dom";
import { getStoresFromDB } from "../../services/storeService";
import { useEffect, useState } from "react";
import type { Store } from "../../models/Store";
import { Button } from "../../components/Button/Button";

export function Stores() {
    const [stores, setStores] = useState<Store[]>([]);

    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
    }

    const getStores = async () => {
        try {
            const data = await getStoresFromDB();
            setStores(data);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }

    // useEffect() forma parte de React Hooks, se usa para ejecutar código cuando el componente se monta, se actualiza o se desmonta
    // COMO EL ngOnINIT DE ANGULAR
    useEffect(() => {
        getStores();
    }, []);
    
    return <div>
        <h1>Store Page</h1>
        <Button text="Go to main page" action={goToMainPage}></Button>
        <Button text="Get Stores" action={getStores}></Button>
        {stores.map((store, index) =>
            <div key={index}>
                {store.name} - {store.location} - {store.storeId}
            </div>
        )}
    </div>
}