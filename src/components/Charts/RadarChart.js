import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useFetch } from "../../utils/hooks";

const RadarCharts = ({ userId }) => {
  const [data, setData] = useState([]);
  const ACTIVITIES_ORDER_IN_CHART = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  const datas = useFetch("performance", userId);
  const arrayData = [];

  for (let abc of ACTIVITIES_ORDER_IN_CHART) {
    arrayData.push({
      activity: abc,
      value: 10,
    });
  }
  //console.log("1", datas.data);

  //   ---------------------------------------------

  useEffect(() => {
    const getDataEasy = async () => {
      const format = datas.data?.map((data) => {
        switch (data?.kind) {
          case 1:
            return { ...data, kind: "Cardio" };
          case 2:
            return { ...data, kind: "Energie" };
          case 3:
            return { ...data, kind: "Endurance" };
          case 4:
            return { ...data, kind: "Force" };
          case 5:
            return { ...data, kind: "Vitesse" };
          case 6:
            return { ...data, kind: "Intensité" };
          default:
            return console.log("une erreur s'est produite");
        }
      });
      setData(format);
      console.log(format);
    };
    getDataEasy();
  }, [datas]);

  //   ---------------------------------------------

  return (
    <div className="radar_chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dy={4}
            stroke="white"
            fontSize={12}
            dataKey="kind"
          />
          <PolarRadiusAxis axisLine={false} fontSize={0} />
          <Radar
            stroke="transparent"
            dataKey="value"
            fill="#FF0101B2"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RadarCharts;
