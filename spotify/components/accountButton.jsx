import { ChevronDownIcon } from "@heroicons/react/outline";
import { signOut } from "next-auth/react";

function AccountButton(props) {
	return (
		<div
			onClick={() => signOut()}
			className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
		>
			<img
				className="rounded-full w-10 h-10"
				src={props.session?.user?.image}
				alt=""
			/>
			<h2>{props.session?.user?.name}</h2>
			<ChevronDownIcon className="w-5 h-5" />
		</div>
	);
}

export default AccountButton;
