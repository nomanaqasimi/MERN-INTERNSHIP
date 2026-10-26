const errorHandling = (err, req, res, next) => {
console.error("Error:", err.message);
res.status(500).json({ error: "Internal Server Error" });
};
module.exports = errorHandling;