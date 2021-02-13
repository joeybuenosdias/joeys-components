import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// current page
// totalPages
// itemsPerPage
// handlePrev click
// handleNext click

// We would need a Pagination component that is controlled by an active page number
// it would take the total number of items to be paginated (T)
// the number of items per page (n)
// and the current page (p)
// then the component uses Math.ceil(T / n) to create the correct amount of pages and a page number (pageNumber)
// and the current page to style the active link correctly (p === pageNumber)
// we would also need a handlePageClick function that fires when the user clicks a new
// page number so we could reset the current page number to the number they just clicked
// and also handlePrevClick & handleNextClick functions so we could decrement/increment
// the current page number
// This is an implementation off the top of my head so I may have missed something but
// it should cover most of what we would need

const PaginationButton = styled.button`
  color: green;
`

export default function Pagination({
  handlePrevClick,
  handleNextClick,
  handleDigitClick,
  currentPage,
  totalPages,
  itemsPerPage
}) {
  function createNumbers(total, interval) {
    const digits = Math.ceil(total / interval)
    const digitsList = []
    for (var i = 1; i <= digits; i++) {
      digitsList.push(i)
    }

    return digitsList
  }

  function handleStartSlice(current, total, interval) {
    if (current <= 3) {
      return 0
    }

    if (total - 6 > currentPage) {
      return current - 4
    }

    return current - 2
  }

  function handleEndSlice(current, total, interval) {
    if (total - current < 5) {
      return total
    }

    if (current <= 3) {
      return 5
    }

    return current + 3
  }

  return (
    <div>
      {currentPage}
      <PaginationButton onClick={handlePrevClick}>Previous</PaginationButton>
      <div>
        {createNumbers(totalPages, itemsPerPage)
          .slice(
            handleStartSlice(currentPage, totalPages, itemsPerPage),
            handleEndSlice(currentPage, totalPages, itemsPerPage)
          )
          .map((item) => {
            return (
              <button key={item} onClick={() => handleDigitClick(item)}>
                {item}
              </button>
            )
          })}
      </div>
      <PaginationButton onClick={handleNextClick}>Next</PaginationButton>
    </div>
  )
}

Pagination.propTypes = {
  handleNextClick: PropTypes.func,
  handlePrevClick: PropTypes.func,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  itemsPerPage: PropTypes.number
}
