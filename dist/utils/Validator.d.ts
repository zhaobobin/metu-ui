/**
 * 表单校验
 */
declare const Validator: {
    /**
     * Form字段错误检查
     * @param fieldsError
     * @returns {boolean}
     */
    hasErrors: (fieldsError: any) => boolean;
    /**
     * 判断是否是手机号
     * @param tel
     * @returns {boolean}
     */
    isMobile: (tel: string) => boolean;
    /**
     * 动态检查输入值是不是手机号，1开头并且 <= 11位数值返回true
     * @param value
     */
    checkMobile: (value: string) => boolean;
    /**
     * 判断是否是邮箱
     * @param email
     * @returns {boolean}
     */
    isEmail: (email: string) => boolean;
    /**
     * 密码强度
     * @param value
     * @returns {number}
     */
    checkPsdLevel: (value: string) => number;
};
export default Validator;
