export const getImage = async () => {
  try {
    const apiKey = "";
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await response.json();

    return data.images.original.url;
  } catch (error) {
    console.error(error);
    return "Not found image";
  }
};
