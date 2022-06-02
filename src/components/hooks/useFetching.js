import { useState } from "react"


export const useFetchng = (callback) => {
    const [commentsisLoaded, setisLoaded] = useState(false)
    const [error, setError] =useState('');

    const fetching = async () => {
        try {
            setisLoaded(true)
            await callback()
        } catch (error) {
            setError(error.message);
            return console.log(error);
        }

        finally {
            setisLoaded(false);
        }
    }
    return [fetching, commentsisLoaded, error]
}