export interface DropdownProps {
  selectedSortedBy: string
  setSelectedSortedBy: React.Dispatch<React.SetStateAction<string>>
}

export interface DropdownItem {
  label: string
  name: string
  value: string
}
