/**
 * Proxy List
 * @auther Rehiy
 * @url https://www.rehiy.com/
 */

const PROXY_API = 'https://proxylist.geonode.com/api/proxy-list'

export async function proxy_socks4(request, env, ctx) {
    const url = new URL(request.url);
    const page = Math.max(1, +url.pathname.split('/').pop());
    const resp = await fetch(`${PROXY_API}?limit=500&page=${page}&protocols=socks4`)
    const json = await resp.json()
    const list = json.data.map(v => v.ip + ':' + v.port)
    return new Response(list.join('\n'));
}
