// registration api
export const registerUser = async (formData) => {
  try {
    const res = await fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      return { success: true, data };
    } else {
      return { success: false, errors: data };
    }
  } catch (error) {
    return { success: false, errors: { non_field_errors: ["Something went wrong."] } };
  }
};

// login api
export const loginUser = async (formData) => {
  try {
    const res = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data };
    }
  } catch (err) {
    return { success: false, error: 'Something went wrong' };
  }
};

