const router = require('express').Router();
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.Secret

// Start User

router.post('/api/change-password', async (req, res) => {
	const { token, newpassword: plainTextPassword } = req.body

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	try {
		const user = jwt.verify(token, JWT_SECRET)

		const _id = user.id

		const password = await bcrypt.hash(plainTextPassword, 10)

		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';))' })
	}
})

router.post('/api/login', async (req, res) => {
	const { email, username, password } = req.body
	const user = await User.findOne({ email, username }).lean() 

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				email: user.email,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

router.post('/api/register', async (req, res) => {
	const { email, username, password: plainTextPassword } = req.body

	if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid email' })
	}
	
	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			email,
			username,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username/Email already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

//Get specific Contacts
router.get('/api/user/get/:id', async (req, res) => {
    const q = await User.findById({
        _id: req.params.id
    });
    res.json(q);
});
// End User
module.exports = router;