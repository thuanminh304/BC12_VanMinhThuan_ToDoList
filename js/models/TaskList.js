class TaskList {
  constructor() {
    this.arrTask = [];
    this.arrTaskCompleted = [];
  }
  addTask(task) {
    return this.arrTask.push(task)
  }
  deleteTask(index) {
    return this.arrTask.splice(index, 1)
  }
  deleteTaskComplete(index) {
    return this.arrTaskCompleted.splice(index, 1)
  }
  checkComplete(index) {
    let taskComplete = ''
    if (index < this.arrTask.length) {
      taskComplete = this.arrTask.slice(index, index + 1)
    } else {
      taskComplete = this.arrTask.slice(index)
    }
    this.arrTaskCompleted = [...this.arrTaskCompleted, ...taskComplete]
    this.deleteTask(index)
  }
  checkAll() {
    let taskComplete = ''
    taskComplete = this.arrTask.slice(0)
    this.arrTaskCompleted = [...this.arrTaskCompleted, ...taskComplete]
    this.arrTask = []
  }
  sortAZ () {
    
    this.arrTask.sort((a,b) => a.task.localeCompare(b.task))
    this.arrTaskCompleted.sort((a,b) => a.task.localeCompare(b.task))
  }
  sortZA() {
    
    this.arrTask.reverse((a,b) => a.task.localeCompare(b.task))
    this.arrTaskCompleted.reverse((a,b) => a.task.localeCompare(b.task))
  }
  

}
export default TaskList