import { useEffect, useState } from "react";

const BaseUrl = "http://localhost:3000";

export function useFetch(service, userId) {
  const [data, setData] = useState([]);

  const NameActivity = currentService(service, userId);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${BaseUrl}${NameActivity}`;

        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [service, userId, NameActivity]);

  function currentService(service, userId) {
    switch (service) {
      case "userName":
        console.log("path userName");
        return `/user/${userId}`;
      case "activity":
        console.log("path activity");
        return `/user/${userId}/activity`;
      case "averageSessions":
        return `/user/${userId}/average-sessions`;
      case "performance":
        return `/user/${userId}/performance`;
      default:
        console.log("aaaaaa");
    }
  }
  return data;
}
