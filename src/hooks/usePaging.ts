import { useState } from "react"

export const usePaging = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    return {
        setCurrentPage,
        setTotalPages,
        currentPage,
        totalPages
    }
}