export interface Field {
    name: string;
    label: string;
    type?: string;
    multiline?: boolean;
    rows?: number;
    sm?: number;
}

export interface FormComponentProps<T> {
    initialValues: T;
    fields: Field[];
    title: string;
    endpoint: string;
    onSuccessMessage?: string;
}
