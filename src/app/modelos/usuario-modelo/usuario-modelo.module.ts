import { Role } from '../Role/Role.module';

import { ContaBancaria } from '../conta-bancaria/conta-bancaria.module';

export class Usuarios {

  id!: number ;
  name!:string;
  username!: string ;
  password!: string;
  cpf!: string;
  telefone!: string;
  especialidade!: string;
  role!: Role;
  conta_bancariaid!: ContaBancaria;


 }
