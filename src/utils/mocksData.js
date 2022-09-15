import axios from "axios";

export const mockUsersInfos = async (userId) => {
  try {
    const response = await axios.get(`./../../datas/${userId}/infouser.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const mockactivity = async (userId) => {
  try {
    const response = await axios(`./../../datas/${userId}/activity.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const mockaverageSession = async (userId) => {
  try {
    const response = await axios(`./../../datas/${userId}/averagesession.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const mockPerformance = async (userId) => {
  try {
    const response = await axios(`./../../datas/${userId}/performance.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
