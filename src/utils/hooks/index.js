import { useEffect, useState } from "react";

const isLive = process.env.REACT_APP_ENVIRONMENT === "LIVE";

const BaseUrl = isLive ? "http://localhost:3000" : "../../../datas/";

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
        return isLive ? `/user/${userId}` : `${userId}/infouser.json`;
      case "percentageActivity":
        return isLive ? `/user/${userId}` : `${userId}/infouser.json`;
      case "activity":
        return isLive ? `/user/${userId}/activity` : `${userId}/activity.json`;
      case "averageSessions":
        return isLive
          ? `/user/${userId}/average-sessions`
          : `${userId}/averagesession.json`;
      case "performance":
        return isLive
          ? `/user/${userId}/performance`
          : `${userId}/performance.json`;
      default:
        console.log("error");
    }
  }

  /**
   * return the exact data relative to the service name
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
