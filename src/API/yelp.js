import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer H8i3qJnA-5fd9RPTzHDPLPV32qWyk-p_ZJna20GCnmJPrnO7C6E4_WzYnuUnprH1fXdRvGbQj1-1m2uqdrSrhEcDPq94Q0rwatXFQYs3a8aK5S0jYaCY-mO-nZrTYHYx'
    }
});
