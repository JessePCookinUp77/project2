// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const orderId = generateUniqueId(); // ID unik
  const newOrder = {
    id: orderId,
    customerName: customerName,
    items: items,
    status: "Menunggu", // Status default
    totalPrice: items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ), // Hitung total harga
  };
  orders.push(newOrder);
  return newOrder;
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // Validasi status yang diizinkan
  const allowedStatuses = ["Menunggu", "Diproses", "Selesai"];
  if (!allowedStatuses.includes(status)) {
    console.log(
      "Status tidak valid. Pilih dari: 'Menunggu', 'Diproses', atau 'Selesai'."
    );
    return null;
  }
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
    return order;
  }
  return null; // Jika ID tidak ditemukan
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((o) => o.status === "Selesai")
    .reduce((acc, order) => acc + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex((o) => o.id === id);
  if (index !== -1) {
    orders.splice(index, 1); // Hapus pesanan dari array
    return true; // Berhasil dihapus
  }
  return false; // Jika ID tidak ditemukan
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
