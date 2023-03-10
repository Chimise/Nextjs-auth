const request = async (url, { method = "GET", headers = {}, body }) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    if (!response.ok) {
        const error = new Error(data.message || 'Server returned an error response');
        error.data = data;
        throw error;
      }
      return data;
  } catch (error) {
    error = error.data ? error : new Error('Fetching data failed');
    throw error
  }
  
};

export default request;
