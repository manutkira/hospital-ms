import axios from "axios";
import { defineStore } from "pinia";
import Room from "../types/room";

const roomType: Room[] = [];

export const useRoomStore = defineStore({
    id: "room",
    state: () => {
        return {
            room: roomType
        };
    },
    actions: {
        fetchRoom() {
            axios.get("http://localhost:8000/api/room").then(res => {
                this.room = res.data;
            });
        },
        saveRoom(data: object) {
            axios.post("http://localhost:8000/api/room", data).then(res => {
                return res;
            });
        },
        saveBed(data: object) {
            axios.post("http://localhost:8000/api/bed", data).then(res => {
                return res;
            });
        }
    },
    getters: {
        getRoom(state) {
            return state.room;
        }
    }
});
