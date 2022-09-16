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
import PropTypes from "prop-types";



const CustomTooltip = ({ active, payload  }) => {
  if (active) {
    return (
      <div className="custom-tooltip-bar-chart">
        <p className="title-bar-chart">{`${payload[0].value}kg`}</p>
        <p className="subtile-bar-chart">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

const BarCharts = ({ userId }) => {
  const datas = useFetch("activity", userId);
  console.log(datas)
  const arrayOfDatas = [];

  const mapOnTheDatas = datas.map((i, index) => {
    return { i, index };
  });

  /**
   * crete the new array for the chart
   */
  for (let a of mapOnTheDatas) {
    arrayOfDatas.push({
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
          data={arrayOfDatas}
          barGap={8}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={40}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="id"
            dy={15}
            padding={{ left: -28, right: -28 }}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            tickCount="3"
            yAxisId="kilogram"
            dataKey="kilogram"
            allowDecimals={false}
            dx={48}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
            domain={["dataMin - 2", "dataMax + 1"]}
          />
          <YAxis
            dataKey="calories"
            yAxisId="calories"
            hide={true}
            domain={["dataMin - 20", "dataMax + 10"]}
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
            yAxisId="kilogram"
            radius={[50, 50, 0, 0]}
            maxBarSize={8}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            yAxisId="calories"
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

BarCharts.propTypes = {
  userId: PropTypes.string,
};

export default BarCharts;
