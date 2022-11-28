import { createContext, useState } from "react";

const IpDataContext = createContext();

export function IpDataProvider({ children }) {
	const [ipData, setIpData] = useState([]);
	return (
		<IpDataContext.Provider value={{ ipData, setIpData }}>
			{children}
		</IpDataContext.Provider>
	);
}

export default IpDataContext;
