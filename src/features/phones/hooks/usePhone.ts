import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/types";
import { useCallback, useMemo } from "react";
import sortByFirstName from "../utils/sortByFirstName";
import { EditablePhone } from "../redux/reducer";

import {addPhoneRequest, deletePhoneRequest, editPhoneRequest, getPhonesRequest} from "../redux/actions";

export const usePhone = () => {
  const dispatch = useDispatch();
  const { phones, ...phonesState } = useSelector((state: RootState) => state.phones);
  const sortedContactsByName = useMemo(() => phones?.sort(sortByFirstName) || [], [phones]);

  const getPhones = useCallback(() => {
      dispatch(getPhonesRequest());
  }, [dispatch]);

  const addPhone = useCallback((phone: EditablePhone) => {
    dispatch(addPhoneRequest(phone));
  }, [dispatch]);

  const editPhone = useCallback((phone: EditablePhone, id: string) => {
    dispatch(editPhoneRequest(phone, id));
  }, [dispatch]);

  const deletePhone = useCallback((id: string) => {
    dispatch(deletePhoneRequest(id));
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
