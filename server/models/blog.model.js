const db = require('../db/database');

module.exports = class {
    constructor({ Fecha, Título, Contenido, Imagen }) {
        this.Fecha = Fecha;
        this.Título = Título;
        this.Contenido = Contenido;
        this.Imagen = Imagen;

        this.Slug = Título.toLowerCase().split(' ').join('-');
        this.table = 'blogpost';
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
            .into(this.table);
        return await db.select('*').from(this.table).where({
            idBlogPost,
        });
    }
};
