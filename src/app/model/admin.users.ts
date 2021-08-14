export interface AdminUsers {
    id?: string
    email: string
    name: string
    user_position?: string
    image?: string
    role?: string
    access_levels?: string
    blocked: boolean
    verified?:boolean
    msgID?:string[]
    SIPexten?:string
    user_type?: string//admin | technician
    address?: string
    position?: any
    phone?: string
    category?: string[]
    status?: string
    created_by?: string
    created_date?: string
    modified_date?: string
    timestamp?: any
}
