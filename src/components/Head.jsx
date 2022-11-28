import React, { useState, useContext } from "react";
import IpDataContext from "../Context/IpDataContext";
// 192.168.1.220

function Head() {
	const [ipAddress, setIpAddress] = useState("");
	const { ipData, setIpData } = useContext(IpDataContext);

	async function getData(e) {
		e.preventDefault();
		try {
			const res = await fetch(
				`https://geo.ipify.org/api/v2/country?apiKey=at_Nj7aCt3Afh4m9rKXlG40aNBsTtVKV&ip=${ipAddress}`
			);
			const data = await res.json();
			// console.log(data);
			setIpData(data);
		} catch {}
	}
	console.log(ipData);

	return (
		<div className="head">
			<h1 className="font-bold text-white text-4xl text-center pt-5">MILES</h1>
			<p className="text-center text-white pt-4 text-2xl font-medium">
				IP Address Tracker
			</p>
			<form className=" flex justify-center pt-12" onSubmit={getData}>
				<input
					type="text"
					nanme="ipAddress"
					value={ipAddress}
					className="placeholder-shown:border-gray-500 active:border-0 p-2 w-72 rounded-l-lg"
					placeholder="IP Address"
					onChange={e => {
						setIpAddress(e.target.value);
					}}
				/>
				<input
					type="submit"
					value=">"
					className="text-white text-3xl bg-[#000] px-5 rounded-r-lg cursor-pointer"
				/>
			</form>
		</div>
	);
}

export default Head;
