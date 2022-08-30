import { createHeaders} from  './index';
const apiURL = process.env.REACT_APP_API_URL

const checkForUser = async (username) =>{
    try{
        const response = await fetch(`${apiURL}?username=${username}`)
        if(!response.ok){
            throw new Error(`Could not complete requestss.`)
        }
        const data = await response.json();
        return [null, data]

    }catch(error){
        return [error.message, []]  

    }
}

const createUser = async (username) =>{
    try{
        const response = await fetch(apiURL,{
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })  
        })
        if(!response.ok){
            throw new Error(`Could not create user with username ` + username)
        }
        console.log("we did it?");
        const data = await response.json();
        return [null, data]

    }catch(error){
        return [error.message, []]
        

    }
    

}

export const loginUser = async (username) =>{
    const[checkError, user] = await  checkForUser(username);

    if(checkError !== null){
        return[checkError, null]
    }

    if(user.length > 0 )
    {
        return [null, user.pop()]
    }
    console.log("creating New user");
    return await createUser(username);
    
}

export const userById = async (userId) =>{
    try{
        const response = await fetch(`${apiURL}/${userId}`)
        if(!response.ok){
            throw new Error("Could not fetch user")
        }
        console.log("Trying to get list");
        const user = await response.json()
        return[null, user]
    }
    catch(error){
        return [error.message, null]

    }
}