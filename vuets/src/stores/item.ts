import axios from "axios";
import { defineStore } from "pinia";
import Item from "../types/item";

const itemType: Item[] = [];

export const useItemStore = defineStore({
    id: "item",
    state: () => {
        return {
            item: itemType
        };
    },
    actions: {
        fetchItem() {
            axios.get("http://localhost:8000/api/item").then(res => {
                this.item = res.data;
            });
        },
        saveItem(data: object) {
            axios.post("http://localhost:8000/api/item", data);
        }
    },
    getters: {
        getItem(state) {
            return state.item;
        }
    }
});
