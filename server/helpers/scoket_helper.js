const emitOrderStatusUpdate = ({
  io,
  customerName,
  role,
  orderStatus,
  data,
}) => {
  io.to(customerName).emit("orderStatusUpdate", {
    io,
    customerName,
    role,
    orderStatus,
    data,
  });
};

module.exports = {
  emitOrderStatusUpdate,
};
