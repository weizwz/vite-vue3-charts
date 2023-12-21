type TargetContext = '_self' | '_blank'
type EmitType = (event: string, ...args: any[]) => void
type AnyFunction<T> = (...args: any[]) => T
type PropType<T> = VuePropType<T>
type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}
type Nullable<T> = T | null
type NonNullable<T> = T extends null | undefined ? never : T
type Recordable<T = any> = Record<string, T>

interface ViteEnv {
  VITE_USER_NODE_ENV: 'development' | 'production'
  VITE_PUBLIC_PATH: string
  VITE_PORT: number
}

interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}
