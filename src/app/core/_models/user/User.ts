import { Endereco } from "../util/Endereco";
import { Role } from "./Role";

export class User {
    id: number;
    name: string;
    email: string;
    cpf: string;
    role: Role;
    preUserId: number;
    stationId: number;
    token?: string;

    secondSlotId: number;
    secondVaccine: string;
    secondVaccineDate: string;

    firstSlotId: number;
    firstVaccine: string;
    firstVaccineDate: string;
}