import axios from 'axios';

export const getImages = async (imageName, page) => {
    const API_KEY = '35816515-8a00d30cd5d7f589803acf0cd';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
    
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}