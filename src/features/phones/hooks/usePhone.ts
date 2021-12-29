import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/types";
import { useCallback } from "react";
import { getPhonesThunk } from "../redux/thunks";
import sortByFirstName from "../utils/sortByFirstName";

export const usePhone = () => {
  const dispatch = useDispatch();

  const getPhones = useCallback(() => {
    dispatch(getPhonesThunk());
  }, [dispatch]);

  const { phones, ...phonesState } = useSelector((state: RootState) => state.phones);
  const sortedContactsByName = phones ? sortByFirstName(phones) : null;

  return {
    ...phonesState,
    phones,
    sortedContactsByName,
    getPhones
  };
};
