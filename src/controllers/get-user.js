const getUser = async (req, res) => {
	return res.json({ data: "user's private data" });
};

module.exports = getUser;
