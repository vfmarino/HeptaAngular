import { Periodo } from "../periodo/periodo.module";
import { PlantaoStatus } from "../plantao-status/plantao-status.module";
import { Setor } from "../setores/setores.module";
import { Usuarios } from '../usuario-modelo/usuario-modelo.module';

export class Plantao {

  id!: number;
  data!: Date;
  diaDaSemana!: Date;
  userID!: number;
  user!:Usuarios;
  peridoID!: number;
  periodo!: Periodo;
  statusID!: number;
  status!: PlantaoStatus;
  valorID!:number;
  setoresID!: number;
  setor!: Setor;

}

