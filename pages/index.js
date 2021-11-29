import { getSession, signOut, useSession } from "next-auth/react";
import Cover from "../components/cover.jsx";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen py-2">
			<main>
				<Cover />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
