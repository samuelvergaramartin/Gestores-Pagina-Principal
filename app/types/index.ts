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