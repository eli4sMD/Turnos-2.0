export const getTasks = async () => {
    try {
        const resp = await fetch('http://localhost:4000/task', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        });
        const tasks = await resp.json();
        return tasks;
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar las tareas');
    }
}

export const postTasks = async () => {
    try {
        const resp = await fetch('http://localhost:4000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body:{
                tile: localStorage.getItem('title')
            }
        });
        const tasks = await resp.json();
        return tasks;
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar las tareas');
    }
}
