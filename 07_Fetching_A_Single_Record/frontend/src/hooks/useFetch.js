
import { useEffect, useState} from 'react';
// import axios from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        //----------------------------------------------
        const fetchData = async() => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if(!res.ok) throw new Error(`<h1>${res.status}</h1>:  ${res.statusText} on ${res.url.split('1337')[1]}`)
                const json = await res.json();
                setData(json.data);
                setLoading(false);
                
            } catch (error) {
                setError(error.message);
                setData(null);
                setLoading(false);
            }
        }
        fetchData();

        //-----------------------------------------------
        // const fetchData = async() => {
        //     setLoading(true);
        //     try {
        //         const res = await axios.get(url);
        //         const { data } = res;
        //         setData(data.data);
        //         setLoading(false);
                
        //     } catch (error) {
        //         setError(error.message);
        //         setData(null);
        //         setLoading(false);
        //     }
        // }
        // fetchData();
    }, [url])


    return { loading, error, data };
}

export default useFetch;