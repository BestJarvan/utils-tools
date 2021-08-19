declare const _default: {
    _get: {
        <TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
        <TObject_1 extends object, TKey_1 extends keyof TObject_1>(object: TObject_1 | null | undefined, path: TKey_1 | [TKey_1]): TObject_1[TKey_1] | undefined;
        <TObject_2 extends object, TKey_2 extends keyof TObject_2, TDefault>(object: TObject_2 | null | undefined, path: TKey_2 | [TKey_2], defaultValue: TDefault): TDefault | Exclude<TObject_2[TKey_2], undefined>;
        <TObject_3 extends object, TKey1 extends keyof TObject_3, TKey2 extends keyof TObject_3[TKey1]>(object: TObject_3, path: [TKey1, TKey2]): TObject_3[TKey1][TKey2];
        <TObject_4 extends object, TKey1_1 extends keyof TObject_4, TKey2_1 extends keyof TObject_4[TKey1_1]>(object: TObject_4 | null | undefined, path: [TKey1_1, TKey2_1]): TObject_4[TKey1_1][TKey2_1] | undefined;
        <TObject_5 extends object, TKey1_2 extends keyof TObject_5, TKey2_2 extends keyof TObject_5[TKey1_2], TDefault_1>(object: TObject_5 | null | undefined, path: [TKey1_2, TKey2_2], defaultValue: TDefault_1): TDefault_1 | Exclude<TObject_5[TKey1_2][TKey2_2], undefined>;
        <TObject_6 extends object, TKey1_3 extends keyof TObject_6, TKey2_3 extends keyof TObject_6[TKey1_3], TKey3 extends keyof TObject_6[TKey1_3][TKey2_3]>(object: TObject_6, path: [TKey1_3, TKey2_3, TKey3]): TObject_6[TKey1_3][TKey2_3][TKey3];
        <TObject_7 extends object, TKey1_4 extends keyof TObject_7, TKey2_4 extends keyof TObject_7[TKey1_4], TKey3_1 extends keyof TObject_7[TKey1_4][TKey2_4]>(object: TObject_7 | null | undefined, path: [TKey1_4, TKey2_4, TKey3_1]): TObject_7[TKey1_4][TKey2_4][TKey3_1] | undefined;
        <TObject_8 extends object, TKey1_5 extends keyof TObject_8, TKey2_5 extends keyof TObject_8[TKey1_5], TKey3_2 extends keyof TObject_8[TKey1_5][TKey2_5], TDefault_2>(object: TObject_8 | null | undefined, path: [TKey1_5, TKey2_5, TKey3_2], defaultValue: TDefault_2): TDefault_2 | Exclude<TObject_8[TKey1_5][TKey2_5][TKey3_2], undefined>;
        <TObject_9 extends object, TKey1_6 extends keyof TObject_9, TKey2_6 extends keyof TObject_9[TKey1_6], TKey3_3 extends keyof TObject_9[TKey1_6][TKey2_6], TKey4 extends keyof TObject_9[TKey1_6][TKey2_6][TKey3_3]>(object: TObject_9, path: [TKey1_6, TKey2_6, TKey3_3, TKey4]): TObject_9[TKey1_6][TKey2_6][TKey3_3][TKey4];
        <TObject_10 extends object, TKey1_7 extends keyof TObject_10, TKey2_7 extends keyof TObject_10[TKey1_7], TKey3_4 extends keyof TObject_10[TKey1_7][TKey2_7], TKey4_1 extends keyof TObject_10[TKey1_7][TKey2_7][TKey3_4]>(object: TObject_10 | null | undefined, path: [TKey1_7, TKey2_7, TKey3_4, TKey4_1]): TObject_10[TKey1_7][TKey2_7][TKey3_4][TKey4_1] | undefined;
        <TObject_11 extends object, TKey1_8 extends keyof TObject_11, TKey2_8 extends keyof TObject_11[TKey1_8], TKey3_5 extends keyof TObject_11[TKey1_8][TKey2_8], TKey4_2 extends keyof TObject_11[TKey1_8][TKey2_8][TKey3_5], TDefault_3>(object: TObject_11 | null | undefined, path: [TKey1_8, TKey2_8, TKey3_5, TKey4_2], defaultValue: TDefault_3): TDefault_3 | Exclude<TObject_11[TKey1_8][TKey2_8][TKey3_5][TKey4_2], undefined>;
        <T>(object: import("lodash").NumericDictionary<T>, path: number): T;
        <T_1>(object: import("lodash").NumericDictionary<T_1> | null | undefined, path: number): T_1 | undefined;
        <T_2, TDefault_4>(object: import("lodash").NumericDictionary<T_2> | null | undefined, path: number, defaultValue: TDefault_4): T_2 | TDefault_4;
        <TDefault_5>(object: null | undefined, path: import("lodash").Many<string | number | symbol>, defaultValue: TDefault_5): TDefault_5;
        (object: null | undefined, path: import("lodash").Many<string | number | symbol>): undefined;
        (object: any, path: import("lodash").Many<string | number | symbol>, defaultValue?: any): any;
    };
    _map: {
        <T_3, TResult>(collection: T_3[] | null | undefined, iteratee: import("lodash").ArrayIterator<T_3, TResult>): TResult[];
        <T_4, TResult_1>(collection: import("lodash").List<T_4> | null | undefined, iteratee: import("lodash").ListIterator<T_4, TResult_1>): TResult_1[];
        <T_5>(collection: import("lodash").Dictionary<T_5> | import("lodash").NumericDictionary<T_5> | null | undefined): T_5[];
        <T_6 extends object, TResult_2>(collection: T_6 | null | undefined, iteratee: import("lodash").ObjectIterator<T_6, TResult_2>): TResult_2[];
        <T_7, K extends keyof T_7>(collection: import("lodash").Dictionary<T_7> | import("lodash").NumericDictionary<T_7> | null | undefined, iteratee: K): T_7[K][];
        <T_8>(collection: import("lodash").Dictionary<T_8> | import("lodash").NumericDictionary<T_8> | null | undefined, iteratee?: string | undefined): any[];
        <T_9>(collection: import("lodash").Dictionary<T_9> | import("lodash").NumericDictionary<T_9> | null | undefined, iteratee?: object | undefined): boolean[];
    };
    _property: <TObj, TResult_3>(path: import("lodash").Many<string | number | symbol>) => (obj: TObj) => TResult_3;
    _findIndex: <T_10>(array: import("lodash").List<T_10> | null | undefined, predicate?: string | number | symbol | [string | number | symbol, any] | import("lodash").ListIterator<T_10, boolean> | import("lodash").PartialShallow<T_10> | undefined, fromIndex?: number | undefined) => number;
    _uniq: <T_11>(array: import("lodash").List<T_11> | null | undefined) => T_11[];
    _pick: {
        <T_12 extends object, U extends keyof T_12>(object: T_12, ...props: import("lodash").Many<U>[]): Pick<T_12, U>;
        <T_13>(object: T_13 | null | undefined, ...props: import("lodash").Many<string | number | symbol>[]): Partial<T_13>;
    };
    _omit: {
        <T_14 extends object, K_1 extends (string | number | symbol)[]>(object: T_14 | null | undefined, ...paths: K_1): Pick<T_14, Exclude<keyof T_14, K_1[number]>>;
        <T_15 extends object, K_2 extends keyof T_15>(object: T_15 | null | undefined, ...paths: import("lodash").Many<K_2>[]): Pick<T_15, Exclude<keyof T_15, K_2>>;
        <T_16 extends object>(object: T_16 | null | undefined, ...paths: import("lodash").Many<string | number | symbol>[]): Partial<T_16>;
    };
    _isNaN: (value?: any) => boolean;
    _trim: {
        (string?: string | undefined, chars?: string | undefined): string;
        (string: string, index: string | number, guard: object): string;
    };
};
export default _default;
