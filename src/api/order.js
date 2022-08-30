import { createHeaders } from "./index"

const  apiURL = process.env.REACT_APP_API_URL;

export const orderAdd = async (user, order) =>{
    try{    
        const response = await fetch(`${apiURL}/${user.id}`,{
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: [ ...user.translations, order ]
        })
    })

    if(!response.ok){
        console.log("USER " + user.id);
        throw new Error("Could not update the order")
        
    }
    
    const result = await response.json()
    return [null, result]
}
    catch(error){
        return [error.message, null]

    }
}


export const orderClearHistory = async (userId) =>{
    try{
        const response = await fetch(`${apiURL}/${userId}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations:[]
            })
        })

        if(!response.ok){
            throw new Error('Could not update orders')
        }

        const result = await response.json()
        return[null,result]
    }
    catch (error) {
        return [error.message, null]

    }

}