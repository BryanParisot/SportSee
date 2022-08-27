import { useEffect, useState } from "react";

const BaseUrl = "http://localhost:3000";

/**
 * return the datas fetch in back-end
 * @param {string} service name of the service
 * @param {number} userId id of the user
 */
export function useFetch(service, userId) {
  const [data, setData] = useState([]);

  const nameOfActivity = currentService(service, userId);
  useEffect(() => {
    if (!nameOfActivity) return;
    async function fetchData() {
      try {
        const url = `${BaseUrl}${nameOfActivity}`;
        const response = await fetch(url);
        const data = await response.json();

        const dataWithTheNewFormat = await format(data, service);
        setData(dataWithTheNewFormat);

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [service, userId, nameOfActivity]);

  /**
   * return the path exact for the datas
   * @param {string} service name of the service
   * @param {number} userId id of the user
   */
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

  /**
   * rreturn the exact data relative to the service name
   * @param {string} data data for api
   * @param {string} service name of serive
   */
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
