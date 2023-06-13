const User = require('../models/users.model')


exports.signup = async (req, res, next) => {
  try{
    const {name, password} = req.body
    const accountNumber = Math.floor(Math.random() * 900000) + 100000
    const amount = 1000

    const user = await User.create({
      name,
      password,
      accountNumber,
      amount
    })

    res.status(200).json({
      message: 'Account created',
      user
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
}

exports.login = async (req, res, next) => {
  try {
    const {password, accountNumber} = req.body

    const user = await User.findOne({
      where: {
        status: 'true',
        accountNumber: accountNumber,
        password: password,
      }
    })

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `The user doesn't exist`,
      });
    }

    res.status(200).json({
      message: 'Logged in'
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
}

exports.history = async (req, res, next) => {
   try {

   } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
}