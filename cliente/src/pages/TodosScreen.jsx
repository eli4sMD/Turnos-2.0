import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'
import { getTasks } from '../selectors/taskSelectors'
import { type } from '../types/types'
import { NavBar } from '../ui/NavBar'

export const TodosScreen = () => {

  const { tasks = [], taskDispatch } = useContext(TaskContext);

  useEffect(() => {
    (async () => {
      const data = await getTasks();
      console.log(data);
      taskDispatch({
        types: type.SET_ALL_TASKS,
        payload: data
      });
    })();
  }, [])

  useEffect(() => {
    (async () => {
      const data = await postTasks();
      console.log(data);
      taskDispatch({
        types: type.SET_ALL_TASKS,
        payload: data
      });
    })();
  }, [])

  return (
    <>
    <h1>Turnos disponibles</h1>
      <div className="row">
        {
          (!tasks)
            ? <p>Cargando...</p>
            : tasks.map(task => (
              <div key={task._id} className="card mx-2" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title bg-primary p-2 rounded text-center text-white">{task.title}</h5>
                  <p className="card-text p-2 border rounded mt-3">Horario: {task.description}</p>
                </div>
                <div className="card-footer p-2 mx-2">
                </div>
              </div>
            ))
        }
      </div>
    </>
  )
}
