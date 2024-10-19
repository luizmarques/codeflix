
type User = {
    id: string,
    name: string,
    username: string,
    website: string,
}

export const getAppSettings = (): Promise<{ theme: string; language: string}> => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve({
                theme:'dark',
                language: 'en',
            });

        }, 3000)
    });
}

export const getUserInfo = (): Promise<{
    name:string;
    email:string;
    age:number;
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name:"John Doe",
                email:"John@Doe.com",
                age: 40
            });

        }, 3000)
    });

}

export async function getUserById(id: string): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json()
    return user
}