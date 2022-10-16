import {defineConfig} from 'vitest/config'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'Node Tidal',
            fileName: 'node-tidal'
        }
    }
})

