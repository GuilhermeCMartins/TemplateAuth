

type User = {
  email: string;
  password: string;
};

export const handleRegister = async (credentials: User) => {

  try {
    const response = await fetch(
      'http://authenticationwebapi-dev.eba-asx26e3f.us-east-1.elasticbeanstalk.com/auth/register',
      {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      const user = data.user;
      return user
      
    } else {
      return null
    }
  } catch (error) {
    console.log(error);
  }
};
