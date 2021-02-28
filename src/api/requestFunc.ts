import { API_KEY } from "src/constants/mainData";

export interface TResponseFetch extends Response {
    success: boolean;
    status_code: number;
    status_message: string;
}

export interface TErrorFetch extends Error {
    success: boolean;
    status_code: number;
    status_message: string;
}

export function api<R, B, E = TResponseFetch>(url: string, method: string, body?: B, params: any = {}): Promise<R> {
    const urlFetch = `${url}?${new URLSearchParams({ api_key: API_KEY, ...params }).toString()}`;
    return fetch(urlFetch, {
        method,
        mode: 'cors',
        body: body && JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then((data: R) => {
            return data;
        })
        .catch((error: E) => {
            throw error;
        });
}
