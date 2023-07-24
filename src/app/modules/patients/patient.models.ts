export interface IPatient {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    password: string;
    education: string;
    experience: string;
    image: string;
    department: string;
    created_at: string;
    updated_at: string;
}

export interface IPatientListResponse {
    success: boolean;
    patients: IPatient[];
}


export type USER_TYPE = 'SUPER ADMIN' | 'ADMIN' | 'AUTHOR';


export type REQUEST_TYPE = 'REGISTER' | 'LOGIN';

