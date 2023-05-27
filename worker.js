/**
 * Cloudflare Worker
 * @auther Rehiy
 * @url https://www.rehiy.com/
 */

import { output_cors } from './api/comm.js';
import { openai_proxy } from './api/openai.js';
import { proxy_socks4 } from './api/socks4.js';

export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return output_cors();
        }
        if (request.url.includes('/socks4/')) {
            return proxy_socks4(request, env.storage);
        }
        if (request.url.includes('/openai/')) {
            return openai_proxy(request, env.storage);
        }
        return new Response('Not Found', { status: 404 });
    }
}
