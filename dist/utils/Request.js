import { Base64 } from 'js-base64';
import { ENV, WebStorage } from './index';
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300)
        return response;
    var error = new Error(response.statusText);
    error.name = response.status;
    throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function Request(options) {
    var url = ENV.api_base + options.url;
    options.headers = {
        Accept: 'application/json'
    };
    if (options.params) {
        if (options.method === 'get') {
            var query = '';
            for (var i in options.params) {
                query += i + '=' + options.params[i] + '&';
            }
            query = query.substring(0, query.length - 1);
            if (query)
                url = url + "?" + query;
        }
        else {
            options.headers['Content-Type'] = 'application/json; charset=utf-8';
            options.body = JSON.stringify(options.params);
        }
        delete options.params;
    }
    // HttpBasicAuth
    var token = WebStorage.get(ENV.storage.token);
    if (token) {
        options.headers['Authorization'] = 'Basic ' + Base64.encode(token + ':'); //读取本地token
    }
    return fetch(url, options)
        .then(checkStatus)
        .then(function (response) { return response.json(); })
        .catch(function (error) {
        return error;
    });
}
export function FetchGet(url) {
    var option = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(url, option)
        .then(function (response) { return response.json(); })
        .catch(function (error) {
        return error;
    });
}
