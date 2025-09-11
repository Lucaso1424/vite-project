import type { User } from "../models/User";
import { appSettings } from "../settings/appSettings";

export async function getUsersFromDB(): Promise<User[]> {
    const response = await fetch(appSettings.apiUrl + "User", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data: User[] = await response.json();
    return data;
}

export async function newUser(user: User): Promise<void> {
    const request = await fetch(appSettings.apiUrl + "User", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    await request.json();
}

export async function updateUser(user: User): Promise<void> {
    const response = await fetch(appSettings.apiUrl + "User", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    await response.json();
}

export async function deleteUser(id: number): Promise<void> {
    const response = await fetch(appSettings.apiUrl + "User/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    await response.json();
}