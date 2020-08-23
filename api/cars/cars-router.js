const express = require('express');
const knex = require('knex');
const db = require('../../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await db('cars'));
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const car = await db('cars').where({ id }).first();
		res.json(car);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const [id] = await db('cars').insert({
			vin: req.body.vin,
			make: req.body.make,
			model: req.body.model,
			mileage: req.body.mileage,
			titleStatus: req.body.titleStatus,
			transmissionType: req.body.transmissionType,
		});
		const newCar = await db('cars').where({ id }).first();
		res.status(201).json(newCar);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		await db('cars')
			.update({
				vin: req.body.vin,
				make: req.body.make,
				model: req.body.model,
				mileage: req.body.mileage,
				titleStatus: req.body.titleStatus,
				transmissionType: req.body.transmissionType,
			})
			.where('id', req.params.id);
		const updatedCar = await db('cars').where('id', req.params.id).first();
		res.json(updatedCar);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		await db('cars').where('id', req.params.id).del();
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
