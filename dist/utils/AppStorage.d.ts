export default class AppStorage {
    /**
     * 保存
     * @param key
     * @param data
     */
    static set(key: string, data: any): Promise<void>;
    static get(key: string, exp?: number): Promise<any>;
    /**
     * 删除
     * @param key
     */
    static remove(key: string): Promise<void>;
    /**
     * 清除
     * @returns {*|void|IDBRequest}
     */
    static clear(): Promise<void>;
}
