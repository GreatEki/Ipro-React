import React, { createContext } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = () => {
	return <OrderContext.Provider> </OrderContext.Provider>;
};

export default OrderContextProvider;
