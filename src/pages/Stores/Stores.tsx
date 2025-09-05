import { useNavigate } from "react-router-dom";
import { getStoresFromDB } from "../../services/storeService";
import { useState } from "react";
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