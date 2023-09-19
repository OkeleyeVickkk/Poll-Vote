import InputField from "../../components/InputField";
import Icon from "../../components/Icon";

const PasscodeComponent = () => {
	return (
		<div className="sm:p-4 w-5/6 sm:w-3/5 md:w-11/12 py-24">
			<div className="flex flex-col gap-y-3">
				<h1 className="text-3xl md:text-4xl font-extrabold md:w-3/4">Joining as a Participant ?</h1>
				<span>No account needed.</span>
				<form action="" className="relative">
					<span className="text-xl text-primary absolute z-[1] top-1/2 left-5 -translate-y-1/2 font-extrabold">#</span>
					<InputField placeholder="Enter code here" customStyle="rounded-full py-[.8rem] min-h-[2rem] relative text-xl" icon={true} />
					<button
						type="submit"
						className="text-white bg-primary hover:bg-primary-dark absolute right-2 top-1/2 -translate-y-1/2 p-[10px] rounded-full">
						<Icon iconName="solar:arrow-right-line-duotone" style="w-5 h-5" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default PasscodeComponent;
