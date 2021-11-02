import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const abortContr = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abortContr.signal }).then((res) => {
                return res.json();
            }).then(data => {
                setData(data);
                setIsPending(false);
                setError(null)
            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        }, 3000)

        return () => {
            abortContr.abort();
        }
    }, [url]);
    return { data, isPending, error };
}


export default useFetch;