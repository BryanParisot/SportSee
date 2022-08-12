import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFetch } from "../../utils/hooks";

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip-bar-chart">
        <p className="title-bar-chart">{`${payload[0].value}g`}</p>
        <p className="subtile-bar-chart">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

const BarCharts = ({ userId }) => {
  const datas = useFetch("activity", userId);
  const array = [];

  const mappage = datas.map((i, index) => {
    return { i, index };
  });

  for (let a of mappage) {
    array.push({
      id: a.index + 1,
      kilogram: a.i.kilogram,
      calories: a.i.calories,
    });
  }

  return (
    <div className="barChart">
      <div className="contain_legends">
        <p>Activité quotidienne</p>
        <div className="legends">
          <div className="legend_weight">
            <div className="buble_red"></div>
            <p className="weight"> Poids (kg)</p>
          </div>
          <div className="legend_clc_burn">
            <div className="buble_black"></div>
            <p className="clc_burn">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer className="chart" width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={array}
          barGap={8}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="id"
            dy={16}
            padding={{ left: -28, right: -28 }}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            allowDecimals={false}
            dx={48}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <Tooltip
            wrapperStyle={{
              width: 60,
              backgroundColor: "#E60000",
            }}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
            content={<CustomTooltip />}
          />
          <Bar
            radius={[50, 50, 0, 0]}
            maxBarSize={8}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            radius={[50, 50, 0, 0]}
            maxBarSize={8}
            dataKey="calories"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BarCharts;
