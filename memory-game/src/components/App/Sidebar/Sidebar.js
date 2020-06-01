import React from 'react';
import { Avatar } from '../ui';
import { SettingIcon } from '../../../theme/Icons';
import { Wrapper, Header, Footer } from './elements';

const mock = "https://www.google.com/s2/u/0/photos/private/AIbEiAIAAABDCJKP-onGiYTuJCILdmNhcmRfcGhvdG8qKGMyMWNiNTlmZmEyNDNlMTU4MTM5Y2M2NzEwOTQzMGVlNTg2N2QwNGQwARQKsVR5E54nqevkfoyh79XDMoI5";

const Sidebar = ({
    onReset
}) => {

    return(
        <Wrapper>
            <Header
                initial={{ scale: .8, x: 10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: .2 }}
            >
                <Avatar size={40} src={mock} circle strongShadow />
            </Header>
            <Footer
                whileHover={{ scale: 1.1, rotate: 90, }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: .8, x: 10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: .2 }}
                onClick={onReset}
            >
                <SettingIcon size={25} />
            </Footer>
        </Wrapper>
    );
};

export default Sidebar;