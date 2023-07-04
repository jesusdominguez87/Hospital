type url = string;

export class HttpService {
    
    public async get(url: url) {
        const data = await fetch(url)
        return data.json();
    }

    public delete(url: url) {
        return fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public post(url: url, body: any) {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public put(url: url, body: any) {
        return fetch(url, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}