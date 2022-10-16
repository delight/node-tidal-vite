// Path: test/playlist.test.ts
// use vitest to create a test file for playlist.ts
// run `vitest test/playlist.test.ts` to run the test

import { expect, test } from 'vitest'
import { Playlists } from '../src/api/playlists'

// you need to set the environment variables VITE_TIDAL_TOKEN and VITE_TIDAL_COUNTRY_CODE in a .env file
import { Tidal } from '../src/index'
import { ClientOptions } from '../src/types/ClientTypes'

const tidal = new Tidal( { token: import.meta.env.VITE_TIDAL_TOKEN, countryCode: import.meta.env.VITE_TIDAL_COUNTRY_CODE } as ClientOptions ) 

// test Playlists.getPlaylistFolders() method
test('Playlists.getPlaylistFolders()', async () => {
    const playlists = new Playlists(tidal)
    const folders = await playlists.getPlaylistFolders()
    expect(folders).toBeDefined() // check if the response is defined
    expect(folders).toHaveProperty('totalNumberOfItems') // total number of playlists
    expect(folders).toHaveProperty('items') // array of folders and root playlists
    expect(folders.items).toBeInstanceOf(Array) // check if folders.items is an array
    expect(folders.items[0]).toHaveProperty('itemType') // check if folders.items[0] has itemType property
})