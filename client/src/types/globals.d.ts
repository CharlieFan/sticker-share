interface NodeRequire {
    ensure(paths: string[], callback: (require) => void, chunkName?: string): void
    ensure(paths: string[], callback: (require) => void, errorCallback?: (err) => void, chunkName?: string): void
}

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}
