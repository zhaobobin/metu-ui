declare type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';
declare type HeadersInit = Headers | string[][] | Record<string, string>;
declare type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string;
interface IOptions {
    url: string;
    method: RequestMethod;
    headers?: HeadersInit;
    params?: Record<string | number | symbol, any>;
    body?: BodyInit | null;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function Request(options: IOptions): Promise<any>;
export declare function FetchGet(url: string): Promise<any>;
export {};
