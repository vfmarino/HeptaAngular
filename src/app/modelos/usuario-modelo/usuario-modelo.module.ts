import { Role } from '../Role/Role.module';
import { Hospitais } from '../hopitais/hopitais.module';
import { ContaBancaria } from '../conta-bancaria/conta-bancaria.module';

export class Usuarios {

  id_user!: number ;
  nome!:string;
  username!: string ;
  password!: string;
  cpf!: string;
  telefone!: string;
  especialidade!: string;
  role?: Role[];
  conta_bancariaid!: number;
  hospitaisid!: number;


 }
