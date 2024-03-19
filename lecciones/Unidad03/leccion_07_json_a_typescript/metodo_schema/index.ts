import {default as apiDataSchema} from '../../../json_schema/apiDataSchema.json';

type APIDataSchema = typeof apiDataSchema;

async function fetchAndValidateUserData(
  url: string,
  schema: APIDataSchema
): Promise<any> {
  const response = await fetch(url);
  // const userData = await response.json();

  //check data:
  const userData = {
    userId: 1,
    name: 'John Cena',
    email: 'john.cena@gmail.com',
  };

  // Check if all fields in userData match the schema
  const isValid = Object.entries(schema).every(
    ([field, type]) => typeof userData[field] === type
  );

  if (!isValid) {
    console.error('API data validation failed.');
    return null;
  }

  return userData;
}

// Sample usage
const apiUrl = 'https://api.example.com/user/1';
fetchAndValidateUserData(apiUrl, apiDataSchema).then(data => {
  if (data) {
    console.log('Validated user data:', data);
  }
});
