export async function placeOrder(order) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  return {
    id: Date.now(),
    ...order,
  };
}