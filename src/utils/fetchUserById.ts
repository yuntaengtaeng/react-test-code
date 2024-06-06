interface User {
  id: number;
  name: string;
  age: number;
}

const fetchUserById = (id: number): Promise<User> => {
  // Promise<User> 타입을 명시
  const users: User[] = [
    {
      id: 1,
      name: 'john',
      age: 21,
    },
    {
      id: 2,
      name: 'james',
      age: 31,
    },
    {
      id: 3,
      name: 'gray',
      age: 24,
    },
  ];

  const findUser = users.find((user) => id === user.id);

  return new Promise((resolve, reject) => {
    if (findUser) {
      resolve(findUser);
    } else {
      reject('Not Found User');
    }
  });
};

export default fetchUserById;
