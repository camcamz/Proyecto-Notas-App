export class Nota {
    _id: string;
    titulo: string;
    descripcion: string;
    creada: string;
    completada: string;
  
    constructor(
      _id: string,
      titulo: string,
      descripcion: string,
      creada: string,
      completada: string
    ) {
      this._id = _id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.creada = creada;
      this.completada = completada;
    }
  }