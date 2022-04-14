const db = require('../db/database');
const Base = require('./base.model');
const User = require('./user.model');
const Asueto = require('./asueto.model');
const AppError = require('../utils/appError');

module.exports = class extends Base {
    static table = 'vacaciones';

    constructor({ startdate, enddate, substitute, email }) {
        super();
        this.startdate = new Date(startdate);
        this.enddate = new Date(enddate);
        this.substitute = substitute;
        this.email = email;

        this.tableName = 'vacaciones';
    }

    async save() {
        // CHECK IF USER HAS USED ALL VACATION DAYS
        const user = (await User.getOne('email', this.email))[0];
        if (user.vacations < 1)
            throw new AppError(
                'Ya no le quedan mas vacaciones al usuario.',
                400
            );

        // CHECK IF FIRST DATE IS EARLIER THAN SECOND DATE
        if (this.startdate > this.enddate)
            throw new AppError(
                'La fecha de fin de vacaciones debe de ser despues del inicio del periodo.',
                400
            );

        
        
        
        
        const vacationDays =
            ((this.enddate.getTime() - this.startdate.getTime()) / (1000 * 3600 * 24) + 1);
    // CHECK IF NUMBER OF DAYS REQUESTED ARE OVER THE AVAILABLE DAYS FOR EMPLOYEE

        console.log(vacationDays);

        if (vacationDays > user.vacations)
            throw new AppError(
                'Los dias solicitados sobrepasan la cantidad de vacaciones disponibles',
                400
            );

        // CREATE VACATIONS REQUEST
        const idVacaciones = await db
            .insert({
                startdate: this.startdate,
                enddate: this.enddate,
                substitute: this.substitute,
                email: this.email,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idVacaciones,
        });
    }
};
