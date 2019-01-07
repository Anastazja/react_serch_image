import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID 8d163589c4289465dcd44f3de786f177ce30cdb46540f8018bc94f0ff49961f9'
    }
});