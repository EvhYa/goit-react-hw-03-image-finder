import axios from 'axios';

export function getHits(q, page) {
  const hits = axios.get('https://pixabay.com/api/?per_page=12', {
    params: {
      q: q,
      page: page,
      key: '38289038-83622c9e49aee8f0430adf6fc',
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return hits;
}
