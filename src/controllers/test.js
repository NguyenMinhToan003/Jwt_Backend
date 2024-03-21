import pool from "../config/connectBymysql";

const themkhachhang = async (req, res) => {
  try {
    // Acquire a connection from the pool
    const connection = await pool.getConnection();

    // Execute the query using the connection
    const [data] = await connection.execute(
      `INSERT INTO khachhang(TenKH, Diachi, SoDienThoai) VALUES ('Toan', 'Daklak', '0375216157')`
    );

    // Release the connection back to the pool
    connection.release();

    // Check if the insert was successful
    if (data && data.affectedRows === 1) {
      // Send success response
      return res.status(200).json({ message: "Customer added successfully." });
    } else {
      // Send error response if data couldn't be inserted
      return res.status(500).json({ error: "Failed to add customer." });
    }
  } catch (error) {
    // Handle any errors that occur during database operation
    console.error("Error adding customer:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = { themkhachhang };
