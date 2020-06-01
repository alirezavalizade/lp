import { useContext } from 'react';
import { ClientContext } from '../contexts';

const useClient = () => useContext(ClientContext);

export default useClient;
