import React, { useState } from 'react'

export type Column<T> = {
    key: keyof T
    label: string
    render?: (value: T[keyof T], row: T) => React.ReactNode
}

type Props<T> = {
    columns: Column<T>[]
    data: T[] | undefined  // Data can be undefined initially
    onRowClick?: (row: T) => void
    className?: string
    itemsPerPage?: number // Optional prop for items per page
}

const Table = <T,>({ columns, data = [], onRowClick, className, itemsPerPage = 10 }: Props<T>) => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalItems = data.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
    }

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentData = data.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        {columns.map(col => (
                            <th key={col.key as string} className="border border-gray-300 p-2 text-left">
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, index) => (
                        <tr 
                            key={index} 
                            className="hover:bg-gray-200 cursor-pointer" 
                            onClick={() => onRowClick?.(row)}
                        >
                            {columns.map(col => (
                                <td key={col.key as string} className="border border-gray-300 p-2">
                                    {col.render 
                                        ? col.render(row[col.key], row) 
                                        : (row[col.key] as React.ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <button 
                    className="p-2 bg-gray-300 rounded" 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="text-sm">
                    Page {currentPage} of {totalPages}
                </span>
                <button 
                    className="p-2 bg-gray-300 rounded" 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Table