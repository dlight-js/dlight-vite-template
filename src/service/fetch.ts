export function post(url: string, body: object, options?: any) {
    return fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        ...(options??{})
    }).then(data => data.json())
}

export function get(url: string, options?: any) {
    return fetch(url, {
        method: 'GET',
        ...(options??{})
    }).then(data => data.json())
}