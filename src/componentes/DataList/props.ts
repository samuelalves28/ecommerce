import { ReactNode } from "react";

export interface DataListUIProps<T> {
    url: string;
    onRowClick?: (item: T) => void;
    renderRowActions?: (item: T) => ReactNode;
}