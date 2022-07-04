import { ref } from "vue";

const isOpen = ref(false);
const isOpenSidebar = ref(false);

export function useSidebar() {
    return {
        isOpen,
        isOpenSidebar
    };
}
