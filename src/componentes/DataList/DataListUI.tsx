// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState, useEffect, useCallback } from "react";
// import { DataListUIProps } from "./props";
// import api from "../../connections/Api";

// const DataListUI = <T extends Record<string, any>>({
//     url,
//     onRowClick,
//     renderRowActions,
// }: DataListUIProps<T>): JSX.Element => {
//     const [data, setData] = useState<T[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     const fetchData = useCallback(async () => {
//         setLoading(true);
//         setError(null);

//         try {
//             const response = await api.get<T[]>(url);
//             setData(response.data);
//         } catch (err: any) {
//             setError(err.response?.data?.message || "Erro ao carregar dados");
//         } finally {
//             setLoading(false);
//         }
//     }, [url]);

//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     const formatData = (value: any) => {
//         if (typeof value === 'string' && !isNaN(Date.parse(value))) {
//             return new Date(value).toLocaleDateString();
//         }
//         return value;
//     };

//     if (loading) return <p>Carregando...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <table style={{ borderCollapse: "collapse", width: "100%" }}>
//             <thead>
//                 <tr>
//                     {data.length > 0 && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
//                     {renderRowActions && <th>Ações</th>}
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((item, index) => (
//                     <tr key={index} onClick={() => onRowClick?.(item)}>
//                         {Object.keys(item).map((key) => (
//                             <td key={key}>{formatData(key, item[key])}</td>
//                         ))}
//                         {renderRowActions && <td>{renderRowActions(item)}</td>}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default DataListUI;