declare module 'js-cookie' {
    interface CookiesStatic<T> {
        get(key: string): string | undefined;
        getJSON(key: string): T | undefined;
        set(key: string, value: string | object, options?: Cookies.CookieAttributes): void;
        remove(key: string, options?: Cookies.CookieAttributes): void;
    }

    namespace Cookies {
        interface CookieAttributes {
            expires?: number | Date;
            path?: string;
            domain?: string;
            secure?: boolean;
            sameSite?: 'strict' | 'lax' | 'none';
        }
    }

    const Cookies: CookiesStatic<object>;
    export default Cookies;
}
