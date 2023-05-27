/**
 * Header CORS
 * @auther Rehiy
 * @url https://www.rehiy.com/
 */

export function output_cors() {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'OPTIONS',
    };
    return new Response(null, { headers });
}

export function file_type(url) {
    const ext = url.split('?').shift().split('.').pop();
    const mines = {
        'json': 'application/json',
        'js': 'application/javascript',
        'css': 'text/css',
        'xml': 'text/xml',
        'html': 'text/html',
        'webm': 'video/webm',
        'mp3': 'audio/mpeg',
        'mp4': 'video/mp4',
        'webp': 'image/webp',
        'gif': 'image/gif',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'svg': 'image/svg+xml',
        'ico': 'image/x-icon',
    };
    return mines[ext] || 'text/plain';
}
