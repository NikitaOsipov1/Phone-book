import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/types";
import { useCallback, useMemo } from "react";
import { addPhoneThunk, deletePhoneThunk, editPhoneThunk, getPhonesThunk } from "../redux/thunks";
import sortByFirstName from "../utils/sortByFirstName";
import { EditablePhone } from "../redux/reducer";

export const usePhone = () => {
  const dispatch = useDispatch();
  const { phones, ...phonesState } = useSelector((state: RootState) => state.phones);
  const sortedContactsByName = useMemo(() => phones?.sort(sortByFirstName) || [], [phones]);

  const getPhones = useCallback(() => {
    if (phones.length <= 0) {
      dispatch(getPhonesThunk());
    }
  }, [dispatch]);

  const addPhone = useCallback((phone: EditablePhone) => {
    dispatch(addPhoneThunk(phone));
  }, [dispatch]);

  const editPhone = useCallback((phone: EditablePhone, id: string) => {
    dispatch(editPhoneThunk(phone, id));
  }, [dispatch]);

  const deletePhone = useCallback((id: string) => {
    dispatch(deletePhoneThunk(id));
  }, [dispatch]);

  return {
    ...phonesState,
    phones,
    sortedContactsByName,
    getPhones,
    addPhone,
    editPhone,
    deletePhone
  };
};
