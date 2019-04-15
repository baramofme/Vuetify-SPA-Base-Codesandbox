import { Vue, Component } from "vue-property-decorator";
import * as TodoService from "../../services/TodoService";
import * as TodoVO from "../../models/TodoVO";

@Component({
  name: "TodoList",
  template: `
    <div></div>
  `
})
export default class TodoList extends Vue {
  private todos: Array<any> = [];
  private deleteMessage: string = "";
  private idToDelete: number = null;
  private mounted() {
    this.init();
  }
  private init() {
    this.todos = TodoService.get();
  }
  showDeleteConfirm(id: number) {
    this.idToDelete = id;
    let todo = this.todos.find(t => t.id == id);
    this.deleteMessage = `Do you want to delete item <b>${todo.title}</b>?`;
  }
  onDelete() {
    TodoService.remove(this.idToDelete);
    this.init();
  }
  goToAdd() {
    this.$router.push("add");
  }
}
