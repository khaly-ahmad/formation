const app = Vue.createApp({
    data() {
        return {
            inputName: '',
            items: [
                { id: 1727, name: "ahmad", completed: false, important: false },
                { id: 172, name: "khaly", completed: false, important: true },
                { id: 1, name: "diallo", completed: true, important: false }
            ],
        }
    },
    methods: {
        addToDo() {
            if (this.inputName != '') {
                let item = { id: Date.now(), name: this.inputName, completed: false, important: false };
                this.items.push(item)
                console.log(this.items)
            }
            this.inputName = ''
        },
        remove(index) {
            this.items.splice(index, 1);
        },
        toggleCompleted(item) {
            item.completed = !item.completed;
        },
        toggleImportant(item) {
            item.important = !item.important;
        },
    },
    computed: {
        sortedItems() {
            return this.items.slice().sort((a, b) => a.completed - b.completed);
        }
    }
});
app.mount("#app")