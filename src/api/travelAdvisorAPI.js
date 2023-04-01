import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
            }
        });
        return data?.filter((place) => (place.name && place.num_reviews > 0));
    }
    catch (error) {
        console.error(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/alerts',
         {
            params: {
                lat: lat,
                lon: lng
            },
            headers: {
                'X-rapidapi-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY
            }
        });
        return data;
    }
    catch (error) {
        // console.error(error);
    }
};

