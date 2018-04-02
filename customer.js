export const createCustomer = (name, orders) => ({
    name,
    premium: orders >= 100
});