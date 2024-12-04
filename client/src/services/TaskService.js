import $api from "../http/index";

export default class TaskService {
    static fetchTasks(){
        return $api.get('/tasks')
    }
    static createTasks(title, description, date){
        return $api.post('/tasks', {title, description, date})
    }
    static updateTasks(id){
        return $api.patch('/tasks/'+ id)
    }
    static deleteTasks(id){
        return $api.delete('/tasks/'+ id)
    }
}

