import { GET_COUNTER } from "./queries";

export const mutations = {
  updateCounter: (_, variables, { cache }) => {
    //query existing data
    const data = cache.readQuery({ query: GET_COUNTER });
    //Calculate new counter value
    const newCounterValue = data.counter + variables.offset;
    cache.writeData({
      data: { counter: newCounterValue }
    });
    return null; //best practices
  }
};
