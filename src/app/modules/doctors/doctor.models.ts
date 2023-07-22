export interface IDoctor {
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

export interface IDoctorListResponse {
    success: boolean;
    doctors: IDoctor[];
}
