const app = Vue.createApp({
    data() {
        return {
            name: '',
            showState: true,
            itemName: '',
            items: [],
            done: true,
        }
    },
    methods: {
        change() {
            this.showState = !this.showState;
        },
        addItem() {
            let newitem = { id: Date.now(), nom: this.itemName, completed: false };
            this.items.push(newitem);
            this.itemName = ""
        },
        remove(index) {
            this.items.splice(index, 1);
        },
        toggleCompleted(item) {
            item.completed = !item.completed
        }
    },
    computed: {
        sortedItems() {
            return this.items.slice().sort((a, b) =>b.completed - a.completed);
        }
    }
});
app.mount('#app')