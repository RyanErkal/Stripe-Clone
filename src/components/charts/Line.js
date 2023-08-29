// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import LineData from "./LineData.json";

const data = LineData;

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function Line(LineData) {
	return (
		<ResponsiveLine
			data={data}
			margin={{ top: 50, right: 110, bottom: 0, left: 50 }}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
				min: "auto",
				max: "auto",
				stacked: false,
				reverse: false
			}}
			curve="natural"
			axisTop={null}
			axisRight={null}
			axisBottom={null}
			axisLeft={null}
			enableGridX={false}
			enableGridY={false}
			enableArea={true}
			colors={{ scheme: "purple_orange" }}
			theme={{
				fontFamily: "Poppins",
				fontSize: "0.8rem"
			}}
			lineWidth={4}
			enablePoints={false}
			pointSize={10}
			pointColor={{ theme: "background" }}
			pointBorderColor={{ from: "serieColor" }}
			pointLabelYOffset={-12}
			useMesh={true}
			enableCrosshair={false}
			legends={[
				{
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: "left-to-right",
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: "circle",
					symbolBorderColor: "rgba(0, 0, 0, .5)",
					effects: [
						{
							on: "hover",
							style: {
								itemBackground: "rgba(0, 0, 0, .03)",
								itemOpacity: 1
							}
						}
					]
				}
			]}
		/>
	);
}

export default Line;
