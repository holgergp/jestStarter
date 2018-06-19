import { getOrdersFromRemote } from "./3rdParty/orderRemoteService";

export let processOrders = somePar => {
  const orders = getOrdersFromRemote().orders;
  return orders.map(it => it.id);
};
