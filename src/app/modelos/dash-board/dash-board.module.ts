
import { Periodo } from "../periodo/periodo.module";
import { PlantaoStatus } from "../plantao-status/plantao-status.module";
import { Setores } from "../setores/setores.module";
import { ValoresDosPlantoes } from "../valores-plantoes/valores-plantoes.module";
import { Usuarios } from '../usuario-modelo/usuario-modelo.module';

export class DashBoardPlantoes {

  id_PlantaoMedico!: number;
  data!: Date;
  diaDaSemana!: Date;
  userID!: Usuarios;
  periodoID!: Periodo;
  statusDoPlantaoID!: PlantaoStatus;
  valorDoPlantaoID!: ValoresDosPlantoes;
  setoresID!: Setores;
}

