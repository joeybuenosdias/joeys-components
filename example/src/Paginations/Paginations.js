import React, { useState } from 'react'
import { Pagination, Section } from 'joeys-components'

const commentList = [
    'hi',
    'bye',
    'hello',
    'goodbye',
    'adios',
    'bonjur',
    'arigatol',
    'yo yo',
    'sup dawg',
    'hi there',
    'hi',
    'bye',
    'hello',
    'goodbye',
    'adios',
    'bonjur',
    'arigatol',
    'yo yo',
    'sup dawg',
    'sup dawg',
    'hi there',
    'hi',
    'bye',
    'hello',
    'goodbye',
    'adios',
    'bonjur',
    'arigatol',
    'yo yo',
    'sup dawg',
    'sup dawg',
    'hi there',
    'hi',
    'bye',
    'hello',
    'goodbye',
    'adios',
    'bonjur',
    'arigatol',
    'yo yo',
    'sup dawg',
    'hi there'
]

export default function Paginations() {
    const [comments] = useState(commentList)
    const [interval] = useState(3)
    const [total] = useState(commentList.length)
    const [currentPage, setCurrentPage] = useState(1)
    function handlePrevClick() {
        setCurrentPage(currentPage - 1)
    }
    function handleNextClick() {
        setCurrentPage(currentPage +  1)
    }
    function handleDigitClick(digit) {
        setCurrentPage(digit)
    }
    return (
        <Section title="Paginations">
            {comments.slice((currentPage - 1) * interval).slice(0, interval).map((item) => {
                return (
                    <div>{item}</div>
                )
            })}
            <Pagination
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                handleDigitClick={handleDigitClick}
                currentPage={currentPage}
                totalPages={total}
                itemsPerPage={interval}
            />
        </Section>
    )
}
