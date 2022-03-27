const base = require('./base.controller');
const Natgasblock = require('../models/natgasblock.model');
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const NatgasBlock = require('../models/natgasblock.model');

exports.getNatgasblocks = base.getAll(Natgasblock);
exports.getNatgasblock = base.getOne(Natgasblock, 'idNatgasblock');
exports.getMyNatgasblocks = base.getOne(Natgasblock, 'email');
exports.createNatgasblock = base.createOne(Natgasblock);
exports.updateNatgasblock = base.updateOne(Natgasblock, 'idNatgasblock');
exports.deleteNatgasBlock = base.deleteOne(Natgasblock, 'idNatgasblock');

exports.approveNatgasblock = catchAsync(async (req, res, next) => {
    // UPDATE NGB STATUS
    const natgasBlock = (
        await NatgasBlock.updateOne('idNatgasBlock', req.params.id, {
            status: 1,
        })
    )[0];

    // UPDATE USER NGB
    const user = (await User.getOne('email', natgasBlock.email))[0];

    await User.updateOne('email', natgasBlock.email, {
        ngBlocks: user.ngBlocks - 1,
    });

    // SEND RESPONSE
    res.status(200).json({
        message: 'NGB updated sucessfully.',
        natgasBlock,
    });
});
