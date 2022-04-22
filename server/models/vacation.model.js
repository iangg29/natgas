const db = require('../db/database');
const Base = require('./base.model');
const User = require('./user.model');
const Asueto = require('./asueto.model');
const AppError = require('../utils/appError');

module.exports = class Vacation extends Base {
    static table = 'vacaciones';
    static vacations = 0;

    constructor({ startdate, enddate, substitute, email}) {
        super();
        this.startdate = startdate;
        this.enddate = enddate;
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
        if (new Date(this.startdate) > new Date(this.enddate))
            throw new AppError(
                'La fecha de fin de vacaciones debe de ser despues del inicio del periodo.',
                400
            );

        const asuetos = await db
            .select('*').from('asueto').where('date', '>=' , this.startdate).andWhere('date', '<=' , this.enddate);
        const diasasuetos = asuetos.length;
        const weekends = Vacation.findWeekends(new Date(this.startdate), new Date(this.enddate));
        Vacation.vacations = Vacation.calcVacationDays(new Date(this.startdate), new Date(this.enddate), diasasuetos, weekends);

        // CHECK IF NUMBER OF DAYS REQUESTED ARE OVER THE AVAILABLE DAYS FOR EMPLOYEE

        if (Vacation.vacations > user.vacations)
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


    static findWeekends(start, end) {
        let count = 0;

        while(end.getTime() >= start.getTime()){
            start.setDate(start.getDate() + 1);
            if(start.getDay() === 0 || start.getDay() === 6){
                count++
            }
        }
        return count;

    }
    static calcVacationDays(start, end, diasasuetos, weekends){
        let vacations = 0;
        if(end.getTime() - start.getTime() === 0){
            vacations = 1 - diasasuetos - weekends;

        }
        else{
            vacations = ((end.getTime() - start.getTime()) / (1000 * 3600 * 24) + 1) - diasasuetos - weekends;
        }
        return vacations;
    }

};
