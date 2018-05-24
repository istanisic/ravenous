const apiKey = 'shWKnbA94QGKVPdjvCcOxx-UsWfyzDpLPSJsXnxZ33pYsA-IF9DeTENjDRJpgOc1oil4n_b3uMIv9bNc7a1VsmEjTQmYgQWZPqTI6PEl49yaoO5go0kXqkj2xrYEW3Yx';

const Yelp = {
  search: async function (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => response.json()).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        });
      }
    });
  }
};

export default Yelp;
