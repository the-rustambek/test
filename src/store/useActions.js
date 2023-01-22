import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    fetchUsers
} from './crudSlice';

const actions = {
    fetchUsers
};

const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => {
        return bindActionCreators(actions, dispatch);
    }, [dispatch]);
};

export default useActions;