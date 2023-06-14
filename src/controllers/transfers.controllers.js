const Transfer = require('../models/transfers.model')
const User = require('../models/users.model')

exports.transfer = async (req, res, next) => {
  try{
    const {amount, accountNumber, senderId} = req.body

    const userReciever = await User.findOne({
      where: {
        status: true,
        accountNumber: accountNumber
      }
    })

    const recieverId = userReciever.id

    const userSender = await User.findOne({
      where: {
        status: true,
        id: senderId
      }
    })

    if(amount > userSender.amount) {
      res.status(400).json({
        status: 'error',
        message: 'error'
      })
    }

    if(accountNumber === userSender) {
      res.status(400).json({
        status: 'error',
        message: 'error'
      })
    }

    const newAmountUserMakeTransfer = userSender.amount - amount

    const newAmountReciever = userReciever.amount + amount

    await userSender.update({amount: newAmountUserMakeTransfer})
    await userReciever.update({amount: newAmountReciever})
    
    await Transfer.create({amount, senderId, recieverId})

    res.status(200).json({
      message: 'transfer success'
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
}