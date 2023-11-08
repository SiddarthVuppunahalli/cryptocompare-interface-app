import { useState } from "react";
import { DropdownBox, DropdownItems, DropdownWrapper } from "../styles/dropdown.style";
import { useDispatch } from "react-redux";

const dropdownData = [
    { label: 'USD', value: 0},
    { label: 'JPY', value: 1},
    { label: 'EUR', value: 2},
]

function Dropdown() {
    const [selectedItem, setSelectedItem] = useState<string>('USD');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleDropdownOpen = () => {
        setIsOpen(true);
    }

    const handleDropdownClick = (item: string) => {
        setSelectedItem(item);
        dispatch(setCurrency(item));
        setIsOpen(false);
    }

    return (
        <DropdownWrapper>
            <div onClick={handleDropdownOpen}>
            <DropdownBox>
                {selectedItem}
            </DropdownBox>
            </div>
            {isOpen && (
                dropdownData.map((dropdownItem) => (
                    <div onClick={() => handleDropdownClick(dropdownItem.label)}>
                        <DropdownItems>{dropdownItem.label}</DropdownItems>
                    </div>
                ))
            )}
        </DropdownWrapper>
    );
}

export default Dropdown;