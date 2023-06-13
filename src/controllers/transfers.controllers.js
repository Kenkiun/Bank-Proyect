const Transfer = require('../models/transfers.model')


exports.transfer = async (req, res, next) => {
  try{
    const {amount, accountNumber, senderUserId} = req.body

    const userReciever = await User.findOne({
      where: {
        status: true,
        accountNumber: accountNumber
      }
    })

    const recieverUserId = transferToThisUser.id

    const userSender = await User.findOne({
      where: {
        status: true,
        id: senderUserId,
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

    const newAmountReciever = userReciever + amount

    await userSender.update({amount: newAmountUserMakeTransfer})
    await userReciever.update({amount: newAmountReciever})
    
    await Transfer.create({amount, senderUserId, recieverUserId})

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