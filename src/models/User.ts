export interface User {
    userId?: number;
    name: string;
    lastName: string; 
    email: string; 
    roleId :number; 
    roleDisplayName: string;
    isActive: boolean; 
    trackingState?: string;
}