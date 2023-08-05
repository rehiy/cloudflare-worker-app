/**
 * OpenAI API Proxy
 * @auther Rehiy
 * @url https://www.rehiy.com/
 */

import { file_type } from './comm.js';

const GITHUB_URL = 'https://raw.githubusercontent.com/opentdp/openai-chat/master';

export async function github_proxy(request) {
    const url = new URL(request.url);

    let backend = GITHUB_URL + url.pathname;
    if (url.pathname.endsWith('/')) {
        backend += 'index.html';
    }

    const res = await fetch(backend, {
        method: request.method,
        headers: {
            'User-Agent': request.headers.get('User-Agent'),
        },
    });

    const headers = new Headers();
    headers.set('Content-Type', file_type(backend));
    headers.set('Cache-Control', 'public, max-age=86400');

    return new Response(res.body, {
        status: res.status,
        headers,
    });
}
