import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Wrapper, UserName, Button } from './UserMenu.styled';
import avatar from 'images/avatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <span>
        <img src={avatar} alt="avatar" width={40} height={35} />
      </span>
      <UserName>{user.name}</UserName>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};
