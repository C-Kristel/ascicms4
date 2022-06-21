const router = require('express').Router();
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {
    registerValidation,
    loginValidation
} = require('../validation');
const JWT_SECRET = process.env.Secret

// Start User

router.post('/change-password', async (req, res) => {
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
		res.json({ status: 'ok', message: 'Password Changed' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';))' })
	}
})

/*router.post('/login', async (req, res) => {
	const { username, email, password } = req.body
	const user = await User.findOne({ email }).lean() 

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', "auth-token": token, message: user.username})
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})
*/

//LOGIN
router.post('/login', async (req, res) => {
    //VALIDATION OF DATA 
    const {
        error
    } = loginValidation(req.body);
    if (error) return res.status(400).json({ 'error': error.details[0].message });
    //CHECK IF EMAIL EXISTS
    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) return res.status(400).json({ 'error': 'Email/Password is wrong!' });
    //CHECK IF PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({ 'error': 'Email/Password is wrong!' });

    //CREATE AND ASSIGN TOKEN
    const token = jwt.sign({
        id: user._id,
		email: user.email
    }, JWT_SECRET);
    res.status(200).json({ 'auth-token': token }); 

});

router.post('/register', async (req, res) => {
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

	res.json({ status: 'ok', message: 'User Created Successfully' })
})

//Get specific Contacts
router.get('/user/get/:id', async (req, res) => {
    const q = await User.findById({
        _id: req.params.id
    });
    res.json(q);
});
// End User
module.exports = router;