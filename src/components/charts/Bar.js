// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import BarData from "./BarData.json";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function Bar() {
	return (
		<ResponsiveBar
			data={BarData}
			keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
			indexBy="country"
			theme={{
				fontFamily: "Poppins",
				fontSize: "0.8rem"
			}}
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			layout="horizontal"
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={{ scheme: "purple_orange" }}
			borderColor={{ theme: "labels.text.fill" }}
			axisTop={null}
			axisRight={null}
			axisBottom={null}
			axisLeft={null}
			enableLabel={false}
			labelSkipWidth={15}
			labelSkipHeight={12}
			labelTextColor={{
				from: "color",
				modifiers: [["darker", 1.6]]
			}}
			legends={[
				{
					dataFrom: "keys",
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 2,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: "left-to-right",
					itemOpacity: 0.85,
					symbolSize: 20,
					effects: [
						{
							on: "hover",
							style: {
								itemOpacity: 1
							}
						}
					]
				}
			]}
			role="application"
			ariaLabel="Nivo bar chart demo"
			barAriaLabel={(e) =>
				e.id + ": " + e.formattedValue + " in country: " + e.indexValue
			}
		/>
	);
}
