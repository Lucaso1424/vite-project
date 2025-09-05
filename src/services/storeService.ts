import type { Store } from "../models/Store";
import { appSettings } from "../settings/appSettings";

export async function getStoresFromDB(): Promise<Store[]> {
    const response = await fetch(appSettings.apiUrl + "Store", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}