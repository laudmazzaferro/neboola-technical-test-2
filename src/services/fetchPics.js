const fetchPics = (url) => fetch( url ).then(response => response.json());

export {fetchPics}