import { useState, useEffect } from 'react';
// const usefetch = (url) => {

//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [isPending, setIsPending] = useState(true);

//     useEffect(() => {
//             fetch(url)
//             .then((res) => {
//                 if (!res.ok) throw Error('error in your endpoint');
//                 return res.json()
//             })
//             .then((data) => {
//                 setError(null)
//                 setIsPending(false)
//                 setData(data);
//             })
//             .catch(err => {
//                 setIsPending(false)
//                 setError(err.message)
//             });
//     }, [url])

//     return { data, error, isPending }
// }


const usefetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
            try {
                setIsPending(true);
                const res = await fetch(url);
                if (!res.ok) throw Error('Error in your endpoint');

                const result = await res.json();

                if (isMounted) { 
                    setData(result);
                    setError(null);
                    setIsPending(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setIsPending(false);
                }
            }
        };

        setTimeout(() => {
            fetchData();
        }, 1000);;

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, error, isPending };
};



export default usefetch;