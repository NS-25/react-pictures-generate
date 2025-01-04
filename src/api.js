import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID YVycXM2XIS1ftBhcKJRb3vsDCJm96qkLIBNf81PKeDI'
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
};

export default searchImages;