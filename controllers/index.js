const models = require("../database/models");
const createMovie = async (req, res) => {
	try {
		const movie = await models.Movie.create(req.body);
		return res.status(201).json({ movie });
	} catch(error){
		return res.status(500).json({ error: error.message });
	}
};

const getAllMovies = async (req, res) => {
	try {
		const movies = await models.Movie.findAll();
		return res.status(200).json({ movies });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	createMovie,
	getAllMovies
};
