import { Medicos } from "../medicos/medicos.module";
import { Periodo } from "../periodo/periodo.module";
import { PlantaoStatus } from "../plantao-status/plantao-status.module";
import { Setores } from "../setores/setores.module";
import { ValoresDosPlantoes } from "../valores-plantoes/valores-plantoes.module";

export class DashBoardPlantoes {

  id_PlantaoMedico!: number;
  data!: Date;
  diaDaSemana!: Date;
  periodoId!: Periodo;
  medicosID!: Medicos;
  plantaoStatusID!: PlantaoStatus;
  valorDosPlantoesID!: ValoresDosPlantoes;
  setoresID!: Setores;
}

