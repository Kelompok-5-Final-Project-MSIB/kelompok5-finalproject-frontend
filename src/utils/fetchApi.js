const BASE_URL = process.env.API_URL;
export const loginUser = async (email, password) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body: formData,
  });

  return response;
};
