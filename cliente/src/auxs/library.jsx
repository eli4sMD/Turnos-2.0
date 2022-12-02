export const diccionario={
    getUser: async()=>{
        try{
            const req = await fetch('http://localhost:4000/task')
            const response= await req.json()
            return(response)
        }catch(error){
            console.log(error);
            return{msg: 'error :' +error}
        }
    },

    createTask: async(title,description)=>{
            if(!title,  !description){
            return { error: 'Todos los datos son necesarios'}
        }
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        title,
        description
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {

    console.log(raw)

    const res = await fetch("http://localhost:4000/task", requestOptions)
        const resjson = await res.json();
        return resjson;
    }catch (error){
        console.log(error)
    }
}

