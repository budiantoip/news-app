import React, { useEffect, useState } from 'react';
import Articles from './components/Articles';
import axios from 'axios';
require('dotenv').config();

const App = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
            setArticles(res.data.response.docs);

            setLoading(false);
        };
        getArticles();

    }, []);

    return (
        <div>
            <Articles loading={loading} articles={articles} />
        </div >
    );
};

export default App;