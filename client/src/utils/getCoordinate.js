


const getCoordinates = async (address, apiKey) => {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    const response = await axios.get(url)
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng
      };
    } else {
      throw new Error('Geocoding API error: ' + response.data.status);
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error.message);
    return null;
  }
};