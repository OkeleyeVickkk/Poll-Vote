import Icon from "./Icon";
import useGoBack from "../hooks/useGoBack";

export default function GoBack() {
	const goBack = useGoBack();
	return (
		<button
			type="button"
			className="font-semibold flex items-center gap-x-3 px-5 hover:text-primary bg-white hover:bg-primary/20 hover:border-primary/20 text-slate-600 border border-slate-300 py-3 rounded-md"
			onClick={() => goBack()}>
			<Icon iconName="solar:arrow-left-line-duotone" />
			<span>Go Back</span>
		</button>
	);
}
