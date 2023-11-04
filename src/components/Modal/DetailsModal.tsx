import { TableRowCurrencyData} from "../../interfaces/table";
import * as M from '../../styles/modal.style';
import * as T from '../../styles/table.style';
import { ModalItemsList } from "./ModalItemsList";

function DetailsModal ({
    selectedSymbol,
    data,
    handleModalClose
} : {
    selectedSymbol: string,
    data: TableRowCurrencyData,
    handleModalClose: () => void
}) {
    return (
        <M.ModalBackdrop>
            <M.ModalView>
                <M.ModalTitle>{selectedSymbol} details:</M.ModalTitle>
                <T.TableRowWrap>
                {ModalItemsList.map((item, index) => (
                    <T.TableRow key={index}>
                        <M.ModalCell key="0">
                            <div>{item}</div>
                        </M.ModalCell>
                        <T.TableCell key="1">
                            <div>{data ? data[item as keyof TableRowCurrencyData]: 'N/A'}</div>
                        </T.TableCell>
                    </T.TableRow>
                ))}
                </T.TableRowWrap>
                <M.ModalBtnWrapper>
                    <M.ModalBtn onClick={handleModalClose}>OK</M.ModalBtn>
                </M.ModalBtnWrapper>
            </M.ModalView>
        </M.ModalBackdrop>
    )
}

export default DetailsModal;