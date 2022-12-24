import { EStatus } from "../enums/status";

export interface ITask {
    id?: number;
    title: string;
    description?: string;
    status: EStatus;
}