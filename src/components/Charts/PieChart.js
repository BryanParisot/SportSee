import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { useFetch } from "../../utils/hooks";
import PropTypes from "prop-types";

const PieCharts = ({ userId }) => {
  const datas = useFetch("percentageActivity", userId);
  const COLORS = ["#FF0101B2"];

  const dataNewFormat = [
    {
      name: "groupe",
      value: datas?.todayScore || datas?.score,
    },
    { name: "group", value: 1 },
  ];

  return (
    <div className="pie_charts">
      <p className="score">Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={dataNewFormat}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
            startAngle={90}
            endAngle={450}
            fill="transparent"
          >
            <Cell fill={COLORS} cornerRadius="50%" />{" "}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score_today">
        <p className="score_number">
          {100 * datas?.todayScore || 100 * datas?.score}%
          <span className="round"></span>
        </p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

PieChart.propTypes = {
  userId: PropTypes.number,
};


export default PieCharts;
