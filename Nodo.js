class Nodo {
    constructor(dato, prioridad)
    {
        this.dato = dato;
        this.prioridad = prioridad;
        this.siguiente = null;
    }

    get dato()
    {
        return this.dato;
    }

    get prioridad()
    {
        return this.prioridad;
    }

    get siguiente()
    {
        return this.siguiente;
    }

    set siguiente(nodoSiguiente)
    {
        this.siguiente = nodoSiguiente;
    }

}

class ColaConPrioridad {
    constructor()
    {
        this.cola = [];
    }

    agregar(nuevoNodo)
    {
        if(this.cola == null)
        {
            this.cola.push(nuevoNodo); 
        } else
            {
                let inicio = this.cola;
                while(inicio != null)
                {
                    if(inicio.siguiente == null)
                    {
                        inicio.siguiente = nuevoNodo;
                        return;
                    }
                    inicio = inicio.siguiente;
                }
            } 
    }

    extraer()
    {
        if(this.cola.prioridad == 1)
        {
            
        }
        return this.cola.shift();
    }
}