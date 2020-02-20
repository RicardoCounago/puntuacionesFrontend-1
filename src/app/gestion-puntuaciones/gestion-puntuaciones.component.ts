import { Component, OnInit, Input } from '@angular/core';
import { PuntuacionService } from '../services/puntuacion.service';
import { JugadorService } from '../services/jugador.service';
import { Puntuacion } from '../models/puntuacion';

@Component({
  selector: 'app-gestion-puntuaciones',
  templateUrl: './gestion-puntuaciones.component.html',
  styleUrls: ['./gestion-puntuaciones.component.css']
})
export class GestionPuntuacionesComponent implements OnInit {

  @Input() public idUsuario: string;
  public listaPuntuaciones;

  constructor(private jugadorService: JugadorService, private puntuacionService: PuntuacionService) { }

  ngOnInit() {
    this.listarPuntuaciones();
  }

  listarPuntuaciones() {
    this.jugadorService.getPuntuacionesJugador(this.idUsuario).subscribe(
      result => this.listaPuntuaciones = result['datos'].puntuaciones,
      error => console.error(error)
    )
  }

  borrarPuntuacion(idPuntuacion) {
    this.puntuacionService.borrarPuntuacion(idPuntuacion).subscribe(
      result => this.listarPuntuaciones(),
      error => console.error(error)
    );
  }

  addPuntuacion(valorPuntuacion) {
    let puntuacion = new Puntuacion('', valorPuntuacion)
    this.jugadorService.addPuntuacion(this.idUsuario, puntuacion).subscribe(
      result => this.listarPuntuaciones(),
      error => console.error(error)
    );
  }

}
