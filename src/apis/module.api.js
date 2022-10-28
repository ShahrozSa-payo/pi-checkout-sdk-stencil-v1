async function create(title, userId) {
  return fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      userId: userId,
    }),
  }).then(res => res.json());
}

const ModuleApi = Object.freeze({
  create,
});

export default ModuleApi;
