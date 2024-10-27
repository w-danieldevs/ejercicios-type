class Persona {
    nombre: string;
    edad: number;
    documentoIdentidad: string;
  
    constructor(nombre: string, edad: number, documentoIdentidad: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.documentoIdentidad = documentoIdentidad;
    }
  
    caminar() {
      console.log(this.nombre + " está caminando");
    }
  
    hablar() {
      console.log(this.nombre + " está hablando");
    }
  
    comer() {
      console.log(this.nombre + " está comiendo");
    }
  }
  
  const persona1 = new Persona("Juan", 30, "12345678");
  persona1.caminar();
  persona1.hablar();
  persona1.comer();
  