import { create } from "zustand";

export const useAuthStore = create(function (set) {
	return {
		isVisible: false,
		togglePassword: () => set((state) => ({ isVisible: !state.isVisible })),
	};
});
