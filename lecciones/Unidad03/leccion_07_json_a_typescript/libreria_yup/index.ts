import * as yup from 'yup';

interface ApiResponse {
  userId: number;
  username: string;
  email: string;
}

const registrationSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup.string().required().min(8),
  email: yup.string().email().required(),
});

const fetchUserData = async (userId: number): Promise<ApiResponse> => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = await response.json();

  try {
    await registrationSchema.validate(data);
  } catch (error) {
    throw new Error('Formato de respuesta API inválido.');
  }

  return data as ApiResponse;
};
