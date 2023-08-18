const API_KEY = '38907171-7241555849c935db3777d6917';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const fetchImages = async (query, page) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchImages };
