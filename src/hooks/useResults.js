import { useEffect, useState } from "react";
import yelp from "../API/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term: searchTerm,
                    location:'Rochester, NY 14613'
                }
            });
            setResults(response.data.businesses);
        } catch(err){
            setErrorMessage('Something went wrong');
        }
    }

    // run search api when search screen is first rendered
    useEffect(()=> {
        searchApi('italian');
    }, [])

    return [searchApi, results, errorMessage];
};