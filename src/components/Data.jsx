import React, { useContext } from "react";
import IpDataContext from "../Context/IpDataContext";

function Data() {
	const { ipData } = useContext(IpDataContext);

	return (
		<div className="h-72 lap">
			<div className="flex justify-center space-x-16 bg-[white] mx-10 p-10 rounded-md lap">
				<div className="">
					<h1 className="text-gray-500 font-medium">IP ADDRESS</h1>
					<h1 className="text-2xl font-medium">1444.66.737</h1>
				</div>
				<div>
					<h1 className="text-gray-500 font-medium">LOCATION</h1>
					<h1 className="text-2xl font-medium">
						{ipData.length > 0 ? ipData.location.region : null},{" "}
						{ipData.length > 0 ? ipData.location.country : null}
					</h1>
				</div>
				<div>
					<h1 className="text-gray-500 font-medium">TIMEZONE</h1>
					<h1 className="text-2xl font-medium">
						{ipData.length > 0 ? ipData.location.timezone : null}
					</h1>
				</div>
				<div>
					<h1 className="text-gray-500 font-medium">ISP</h1>
					<h1 className="text-2xl font-medium">{ipData.isp}</h1>
				</div>
			</div>
		</div>
	);
}

export default Data;
