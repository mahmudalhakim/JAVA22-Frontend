export async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
}