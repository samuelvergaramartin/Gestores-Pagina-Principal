import { JSX } from "react/jsx-runtime";

/**
 * Representa los elementos de la Sidebar
 */

export type SideBarItem = {
    id: string;
    label: string;
    icon?: JSX.Element;
    primary?: boolean;
    href?: string
}

/**
 * Representa a un usuario
 */

export type User = {
    id: number,
    email: string,
    fullname: string,
    password: string,
    isAdminIT: boolean,
    permissions: UserPermission[]
}

/**
 * Representa los permisos de los usuarios en general
 */

export enum USER_PERMISSIONS {
    VIEW_DASHBOARD,
    EDIT_DASHBOARD,
    DELETE_DASHBOARD,
    EXPORT_DASHBOARD,
    VIEW_FACTURA_COMPRA,
    EDIT_FACTURA_COMPRA,
    DELETE_FACTURA_COMPRA,
    EXPORT_FACTURA_COMPRA,
    VIEW_FACTURA_VENTA,
    EDIT_FACTURA_VENTA,
    DELETE_FACTURA_VENTA,
    EXPORT_FACTURA_VENTA,
    VIEW_CLIENTE,
    EDIT_CLIENTE,
    DELETE_CLIENTE,
    EXPORT_CLIENTE,
    VIEW_EMPRESA,
    EDIT_EMPRESA,
    DELETE_EMPRESA,
    EXPORT_EMPRESA,
    VIEW_EMPLEADO,
    EDIT_EMPLEADO,
    DELETE_EMPLEADO,
    EXPORT_EMPLEADO
}

/**
 * Representa los nombres de permisos de los usuarios en general
 */
export enum USER_PERMISSIONS_NAMES {
    "Ver dashboard",
    "Editar dashboard",
    "Eliminar dashboard",
    "Exportar dashboard",
    "Ver factura compra",
    "Editar factura compra",
    "Eliminar factura compra",
    "Exportar factura compra",
    "Ver factura venta",
    "Editar factura venta",
    "Eliminar factura venta",
    "Exportar factura venta",
    "Ver cliente",
    "Editar cliente",
    "Eliminar cliente",
    "Exportar cliente",
    "Ver empresa",
    "Editar empresa",
    "Eliminar empresa",
    "Exportar empresa",
    "Ver empleado",
    "Editar empleado",
    "Eliminar empleado",
    "Exportar empleado"
}

/**
 * Representa un permiso de usuario
 */

export type UserPermission = {
    name: USER_PERMISSIONS,
    displayName: string
    granted: boolean
}

/**
 * Representa los roles de los usuarios en general
 */
export enum USER_ROLES {
    FACTURACION,
    ADMINISTRADOR,
    CLIENTE,
    RRHH,
    GERENCIA
}

/**
 * Representa los nombres de roles de los usuarios en general
 */
export enum USER_ROLES_NAMES {
    "Facturación",
    "Administrador",
    "Cliente",
    "Recursos Humanos",
    "Gerencia"
}

/**
 * Representa un permiso de usuario
 */

export type UserRole = {
    name: USER_ROLES,
    displayName: string
    hasRole: boolean
}