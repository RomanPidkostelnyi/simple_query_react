const client = (url) => {
    const data = fetch(url);
    if(data.ok) {
        return data.json();
    }
    return Promise.reject(new Error(data.text()))
}

export default client
