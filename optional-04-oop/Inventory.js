/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    // Properti `items` sebagai daftar item dalam bentuk array
    this.items = [];
  }

  /**
   * Method untuk menambahkan item ke properti `items`.
   * @param {Item} item - Objek item yang akan ditambahkan.
   */
  addItem(item) {
    this.items.push(item);
  }

  /**
   * Method untuk menghapus item berdasarkan `id`.
   * @param {number} id - ID dari item yang akan dihapus.
   */
  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  /**
   * Method untuk mengembalikan informasi detail semua barang dalam inventory.
   * @returns {string} Informasi detail semua item dalam inventory.
   */
  listItems() {
    return this.items.map((item) => item.displayDetails()).join("\n");
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
