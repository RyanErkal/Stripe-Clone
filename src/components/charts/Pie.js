// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";
import PieData from "./PieData.json";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function Pie(PieDate) {
	return (
		<ResponsivePie
			data={PieData}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.5}
			theme={{
				fontFamily: "Poppins",
				fontSize: "0.8rem"
			}}
			padAngle={0.7}
			cornerRadius={3}
			activeInnerRadiusOffset={20}
			activeOuterRadiusOffset={20}
			colors={{ scheme: "purple_orange" }}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.2]]
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: "color" }}
			arcLabelsSkipAngle={10}
			enableArcLabels={false}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]]
			}}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					size: 4,
					padding: 1,
					stagger: true
				},
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					rotation: -45,
					lineWidth: 6,
					spacing: 10
				}
			]}
			motionConfig="default"
			transitionMode="startAngle"
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					justify: false,
					translateX: 0,
					translateY: 56,
					itemsSpacing: 0,
					itemWidth: 100,
					itemHeight: 18,
					itemTextColor: "#999",
					itemDirection: "left-to-right",
					itemOpacity: 1,
					symbolSize: 12,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000"
							}
						}
					]
				}
			]}
		/>
	);
}

export default Pie;
