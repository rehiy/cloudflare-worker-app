/**
 * OpenAI API Proxy
 * @auther Rehiy
 * @url https://www.rehiy.com/post/500
 * @description storage.get('keys') 为存储的key列表，每行一个key
 */

export async function openai_proxy(request, storage) {
    const url = new URL(request.url);

    const backend = request.url
        .replace(url.host, 'api.openai.com')
        .replace('/openai/v1/', '/v1/');

    const auth = await openai_key(request, storage);
    const payload = {
        method: request.method,
        headers: {
            Authorization: auth
        },
    };

    if (request.body) {
        payload.body = await request.text();
        payload.headers['Content-Type'] = 'application/json';
    }

    return fetch(backend, payload);
}

export async function openai_key(request, storage) {
    let auth = request.headers.get('Authorization');

    if (auth == 'Bearer sk-of-opentdp-sponsor') {
        const keys = await storage.get('keys');
        if (keys) {
            const keylist = keys.trim().split('\n');
            const sortkey = Math.floor(Math.random() * keylist.length);
            auth = 'Bearer ' + keylist[sortkey];
        }
    }

    return auth;
}
