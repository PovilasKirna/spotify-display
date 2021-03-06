import { useSession } from "next-auth/react";
import AccountButton from "./accountButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

function Cover() {
	const { data: session, status } = useSession();
	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data } = useSWR("/api/spotify", fetcher); // has to fetch repeatedly to update songs https://stackoverflow.com/questions/67726138/is-there-a-way-to-fetch-data-every-second-in-nextjs-with-getserversideprops
	const router = useRouter();

	return (
		<div>
			<header className="absolute top-1/10 right-1/10 z-20">
				<AccountButton session={session} />
			</header>
			<div>
				<div className="absolute w-full h-full botom-0 bg-gradient-to-t from-black z-10"></div>
				<div>
					<img
						className="absolute w-full z-1 -inset-y-1/2 scrollbar-hide"
						src={data?.albumImageUrl}
						alt="song cover"
					/>
				</div>
				<div className="flex h-screen items-center justify-center">
					<img
						className="absolute z-20 h-2/5"
						src={data?.albumImageUrl}
						alt="smaller song cover"
					/>
				</div>
				<div className="absolute text-white text-center w-screen z-20 bottom-1/10 text-6xl">
					<span className="whitespace-nowrap block w-full">
						{data?.title} - {data?.artist}
					</span>
				</div>
				<div className="absolute botom-40 left-1/2 flex align-items-center m-2 text-white z-20">
					{/* <div>time</div> */}
					<div className="rounded-5 w-11/12 m-2 bg-gray-600">
						<div
							className="rounded-5 w-1/10 h-5 bg-gray-300	"
							style={{ width: +1 + "%" }}
						></div>
					</div>
					{/* <div className="floatLeft">time</div> */}
				</div>
			</div>
			{/* <div className="z-20 text-white absolute">
				<button type="button" onClick={() => router.reload()}>
					Click here to reload
				</button>
			</div> */}
		</div>
	);
} // have to either fix tailwind class css or implement my own old css

export default Cover;
