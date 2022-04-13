const base = require('./base.controller');
const Natgasblock = require('../models/natgasblock.model');
const User = require('../models/user.model');
const UserDetails = require('../models/views/useremployment.view.model');
const NatgasblockDetails = require('../models/views/natgasblocks.view.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const NatgasBlock = require('../models/natgasblock.model');

exports.getNatgasblocks = base.getAll(Natgasblock);
exports.getNatgasblock = base.getOne(Natgasblock, 'idNatgasblock');
exports.getMyNatgasblocks = base.getOne(NatgasblockDetails, 'email');
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

exports.getPending = catchAsync(async (req, res, next) => {
    // GET DEPARTMENT AND POSITION
    const { position, departamento, email } = (
        await UserDetails.getOne('email', req.user.email)
    )[0];

    if (position == 'Analista' || position == 'Especialista')
        next(
            new AppError(
                'El puesto de este empleado no es el adecuado para aprobar solicitudes de natgas blocks',
                400
            )
        );
    // GET PENDING REQUESTS
    let natgasBlocks = NatgasblockDetails.tableReference
        .where({
            departamento,
        })
        .whereNot({
            email,
        })
        .where({ status: 0 });

    switch (position) {
        case 'Gerencia':
            natgasBlocks.whereNot({ position: 'Gerencia' });
        case 'Direccion':
            natgasBlocks.whereNot({ position: 'Direccion' });
        case 'Coordinacion':
            natgasBlocks.whereNot({ position: 'Coordinacion' });
            break;
        default:
            break;
    }

    natgasBlocks = await natgasBlocks;

    // SEND PENDING REQUESTS
    res.status(200).json({
        message: 'Natgas blocks requests retrieved successfully',
        results: natgasBlocks.length,
        natgasBlocks,
    });
});
