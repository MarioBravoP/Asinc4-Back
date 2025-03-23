const Data = require('../models/Data');

exports.getAllData = async (req, res, next) => {
    try {
        const data = await Data.findOne();
        if (!data) {
            return res.status(404).json({ error: 'No se encontraron datos' });
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};
