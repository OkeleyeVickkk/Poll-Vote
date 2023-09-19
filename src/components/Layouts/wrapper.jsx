import { AnimatePresence, motion } from "framer-motion";

export default function DashboardPageContentWrapper({ children }) {
	return (
		<AnimatePresence>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
