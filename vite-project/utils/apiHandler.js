import axios from "axios"

export const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL

export class CallApi {
    constructor(base) {
        this.base = base
    }

    async getData(path) {
        try {
            const res = await axios.get(this.base + path)

            if (res.status !== 200) throw new Error(res.statusText)

            return res.data
        } catch (error) { throw new Error(error.message) }
    }
    async postData(path, body) {
        try {
            const res = await axios.post(this.base + path, body)

            if (res.status !== 201) throw new Error(res.statusText)

            return res.data
        } catch (error) { throw new Error(error.message) }
    }
    async patchData(path, body) {
        try {
            const res = await axios.patch(this.base + path, body)

            if (res.status !== 201) throw new Error(res.statusText)

            return res.data
        } catch (error) { throw new Error(error.message) }
    }
    async removeData(path) {
        try {
            const res = await axios.delete(this.base + path)

            if (res.status !== 201) throw new Error(res.statusText)

            return res.data
        } catch (error) { throw new Error(error.message) }
    }
}

