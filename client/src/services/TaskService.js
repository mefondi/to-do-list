import $api from "../http/index";

export default class TaskService {
    static fetchTasks(){
        return $api.get('/tasks')
    }
    static createTasks(title, description, date){
        return $api.post('/tasks', {title, description, date})
    }
    static updateTasks(id, title, description, status){
        return $api.patch('/tasks/'+ id, {title, description, status})
    }
    static deleteTasks(id){
        return $api.delete('/tasks/'+ id)
    }
}

