// ApiFetcher.js
import React, { useEffect, useState } from 'react';

const Factchapi = ({ status }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let url = '';

            switch (status) {
                case 'live':
                    url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=+6';
                    break;
                case 'upcoming':
                    url = 'https://example.com/upcoming-matches-api'; // Replace with the actual API URL
                    break;
                case 'completed':
                    url = 'https://example.com/completed-matches-api'; // Replace with the actual API URL
                    break;
                default:
                    break;
            }

            if (url) {
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'd642f37c4fmshb7db6adb92f69a4p13c86bjsn901bad954894',
                        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
                    }
                };

                try {
                    const response = await fetch(url, options);
                    const result = await response.json(); // Assuming the response is in JSON format
                    setData(result);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [status]);

    return data; // Return the fetched data array
};

export default Factchapi;
