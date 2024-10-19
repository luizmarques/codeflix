


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