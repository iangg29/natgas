const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'blogpost';

    constructor({ Fecha, Título, Contenido, Imagen }) {
        super();
        this.Fecha = Fecha;
        this.Título = Título;
        this.Contenido = Contenido;
        this.Imagen = Imagen;

        this.tableName = 'blogpost';
        this.Slug = Título.toLowerCase().split(' ').join('-');
    }

    async save() {
        const idBlogPost = await db
            .insert({
                Fecha: this.Fecha,
                Título: this.Título,
                Contenido: this.Contenido,
                Imagen: this.Imagen,
                Slug: this.Slug,
            })
            .into(this.tableName);
        return await db.select('*').from(this.tableName).where({
            idBlogPost,
        });
    }
};
