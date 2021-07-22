/**
 * Storage 本地存储 检验过期
 * @type {{set: Storage.set, get: Storage.get, remove: Storage.remove}}
 * exp 过期时间的秒数 一天的秒数 60 * 60 * 24
 */
declare const WebStorage: {
    set: (key: string, value: string) => void;
    get: (key: string, exp?: number) => any;
    remove: (key: string) => void;
    hasLocalSotrage: () => Storage;
    setCookie: (key: string, value: string, day: number) => void;
    getCookie: (name: string) => any;
};
export default WebStorage;
