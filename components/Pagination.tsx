import React from 'react'
import {PaginationWrapper, PageActionsWrapper, PageActionsBtn} from '@/styling/Pagination'

export default function Pagination(props: { pagination: any; currentPage: number; handleChangePage: any; }) {
    const {pagination, currentPage, handleChangePage} = props;

    return (
        <PaginationWrapper>
            <PageActionsWrapper>
                <PageActionsBtn disabled={currentPage === 1} onClick={() => handleChangePage(1)}>&#60;&#60;</PageActionsBtn>
                <PageActionsBtn disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}>&#60;</PageActionsBtn>
                    <span>{currentPage || pagination.pages} of {pagination.pages}</span>
                <PageActionsBtn disabled={currentPage === pagination.pages} onClick={() => handleChangePage(currentPage + 1)}>&gt;</PageActionsBtn>
                <PageActionsBtn disabled={currentPage === pagination.pages} onClick={() => handleChangePage(pagination.pages)}>&gt;&gt;</PageActionsBtn>
            </PageActionsWrapper>
        </PaginationWrapper>
    )
}