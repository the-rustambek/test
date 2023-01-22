import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers, createUsers } from './usersSlice';
 

const actions = {
    fetchUsers,
    createUsers
};

const useActionsHooks = () => {
    const dispatch = useDispatch();
    return useMemo(() => {
        return bindActionCreators(actions, dispatch);
    }, [dispatch]);
};

export default useActionsHooks;