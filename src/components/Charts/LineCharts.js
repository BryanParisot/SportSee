import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFetch } from "../../utils/hooks";

const LineCharts = ({ userId }) => {
  const datas = useFetch("averageSessions", userId);

  for (let index of datas) {
    const day = index.day;
    switch (day) {
      case 1:
        index.day = "L";
        break;
      case 2:
        index.day = "M";
        break;
      case 3:
        index.day = "M";
        break;
      case 4:
        index.day = "J";
        break;
      case 5:
        index.day = "V";
        break;
      case 6:
        index.day = "S";
        break;
      case 7:
        index.day = "D";
        break;
      default:
        console.log("number dosent exist");
    }
  }
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="line_charts">
      <div className="contain_title">
        Durée moyenne des
        <br /> sessions
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
          data={datas}
        >
          <XAxis
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            tickLine={false}
            dy={10}
            dataKey="day"
            padding={{ left: 10, right: 10 }}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis hide={true} />
          <Tooltip
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
            content={<CustomTooltip />}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
