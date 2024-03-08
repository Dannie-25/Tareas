import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'odma-app-tareas-odma',
  templateUrl: './tareas-odma.component.html',
  styleUrls: ['./tareas-odma.component.css']
})
export class TareasOdmaComponent implements OnInit {
  listTareas: Tarea [] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {
    //console.log(this.nombreTarea)

    //Crear el objeto
    const tarea: Tarea ={
      nombre: this.nombreTarea,
      estado: false
    }
    //Agregar el objeto al array=listTarea
    this.listTareas.push(tarea);

    //Resetear el form(variable)
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    //console.log('A borrar' + index);
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea): void{
    this.listTareas[index].estado = !tarea.estado;
  }
}
