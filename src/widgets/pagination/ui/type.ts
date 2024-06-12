export interface PaginationProps {
  pagesAmount: number
  activePage: number
  setActivePage: React.Dispatch<React.SetStateAction<number>>
}
