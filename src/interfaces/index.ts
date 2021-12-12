export interface IRespronse<T> {
    code: number | string
    message?: string
    data: T | any
}
