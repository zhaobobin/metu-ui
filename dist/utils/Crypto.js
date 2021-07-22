/**
 * https://github.com/entronad/crypto-es
 */
import CryptoES from 'crypto-es';
var cryptoKey = 'www.metuwang.com';
var cryptoIv = '1269571569321021';
/**
 * 加密方法
 * @param k
 * @param text
 * @returns {string}
 * @constructor
 */
export function Encrypt(k, text) {
    var DecryptKey = (k + cryptoKey).substring(0, 16);
    var key = CryptoES.enc.Utf8.parse(DecryptKey); // 十六位十六进制数作为密钥
    var iv = CryptoES.enc.Utf8.parse(cryptoIv); // 十六位十六进制数作为密钥偏移量
    var encrypted = CryptoES.AES.encrypt(text.toString(), key, {
        iv: iv
    });
    return encrypted.ciphertext.toString();
}
/**
 * 解密方法
 * @param k
 * @param text
 * @returns {string}
 * @constructor
 */
export function Decrypt(k, text) {
    var DecryptKey = (k + cryptoKey).substring(0, 16);
    var key = CryptoES.enc.Utf8.parse(DecryptKey); // 十六位十六进制数作为密钥
    var iv = CryptoES.enc.Utf8.parse(cryptoIv); // 十六位十六进制数作为密钥偏移量
    var encryptedHexStr = CryptoES.enc.Hex.parse(text);
    var srcs = CryptoES.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoES.AES.decrypt(srcs, key, {
        iv: iv
    });
    return decrypt.toString(CryptoES.enc.Utf8);
}
