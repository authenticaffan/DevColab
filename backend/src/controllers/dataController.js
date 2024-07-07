exports.handleData = (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
};
