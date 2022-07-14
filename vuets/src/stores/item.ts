import axios from "axios";
import { defineStore } from "pinia";
import axiosClient from "../axios";
import Item from "../types/item";

export const useItemStore = defineStore({
    id: "item",
    state: () => {
        return {
            item: [] as Item[],
            loading: false as boolean
        };
    },
    actions: {
        fetchItem() {
            axiosClient.get("/item").then(res => {
                this.item = res.data;
            });
        },
        fetchOneItem(itemId: string) {
            axiosClient.get(`/item/${itemId}`).then(res => {
                this.item = res.data;
                return res;
            });
        },
        updateItem(data: Item) {
            this.loading = true;
            axiosClient.put(`/item/${data.id}`, data).then(res => {
                this.item = res.data;
                this.loading = false;
                return res;
            });
        },
        async saveItem(data: object) {
            this.loading = true;
            await axiosClient
                .post("/item", data)
                .then(res => {
                    this.loading = false;
                    return res;
                })
                .catch(err => {
                    this.loading = false;
                });
        }
    },
    getters: {
        getItem(state) {
            return state.item;
        },
        getLoading(state) {
            return state.loading;
        }
    }
});
