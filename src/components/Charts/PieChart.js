import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { useFetch } from "../../utils/hooks";

const PieCharts = ({ userId }) => {
  const datas = useFetch("percentageActivity", userId);
  const COLORS = ["#FF0101B2"];

  const dataaa = [
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
            data={dataaa}
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
        </p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

export default PieCharts;
