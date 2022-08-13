import { useEffect, useState } from "react";

const BaseUrl = "http://localhost:3000";

export function useFetch(service, userId) {
  const [data, setData] = useState([]);

  const nameActivity = currentService(service, userId);
  useEffect(() => {
    if (!nameActivity) return;
    async function fetchData() {
      try {
        const url = `${BaseUrl}${nameActivity}`;
        const response = await fetch(url);
        const data = await response.json();

        const dataFormat = await format(data, service);
        setData(dataFormat);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [service, userId, nameActivity]);
  
  function currentService(service, userId) {
    switch (service) {
      case "userName":
        return `/user/${userId}`;
      case "percentageActivity":
        return `/user/${userId}`;
      case "activity":
        return `/user/${userId}/activity`;
      case "averageSessions":
        return `/user/${userId}/average-sessions`;
      case "performance":
        return `/user/${userId}/performance`;
      default:
        console.log("error");
    }
  }

  function format(data, service) {
    switch (service) {
      case "averageSessions":
        return data.data?.sessions;
      case "activity":
        return data.data?.sessions;
      case "userName":
        return data.data;
      case "performance":
        return data.data;
      case "percentageActivity":
        return data.data;
      default:
        console.log("error");
    }
  }
  return data;
}
