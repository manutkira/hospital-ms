import axios from "axios";
import { defineStore } from "pinia";
import axiosClient from "../axios";
import Room from "../types/room";

export const useRoomStore = defineStore({
    id: "room",
    state: () => {
        return {
            room: [] as Room[],
            loading: false as boolean
        };
    },
    actions: {
        fetchRoom() {
            axiosClient.get("/room").then(res => {
                this.room = res.data;
            });
        },
        fetchOneRoom(roomID: string) {
            axiosClient.get(`/room/${roomID}`).then(res => {
                this.room = res.data;
                return res;
            });
        },
        async saveRoom(data: object) {
            this.loading = true;
            await axiosClient
                .post("/room", data)
                .then(res => {
                    this.loading = false;
                    return res;
                })
                .catch(err => {
                    this.loading = false;
                });
        },
        async saveBed(data: object) {
            this.loading = true;

            await axiosClient
                .post("/bed", data)
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
        getRoom(state) {
            return state.room;
        },
        getLoading(state) {
            return state.loading;
        }
    }
});
