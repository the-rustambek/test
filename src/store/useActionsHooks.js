import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './usersSlice';
 

const actions = {
    fetchUsers
};

const useActionsHooks = () => {
    const dispatch = useDispatch();
    return useMemo(() => {
        return bindActionCreators(actions, dispatch);
    }, [dispatch]);
};

export default useActionsHooks;