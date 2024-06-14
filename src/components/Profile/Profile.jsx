/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  max-width: 300px;
  cursor: pointer;
  color: gray;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
  transition: transform 0.3s;

  ${Card}:hover & {
    transform: rotate(3deg);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
`;

const Name = styled.h2`
  text-align: center;
  transition: color 0.3s;

  ${Card}:hover & {
    color: white;
  }
`;

function Profile(props) {
  const { profile, setActiveProfile } = props;
  const { name, avatar } = profile;

  const history = useHistory();

  const activeProfileHandler = () => {
    setActiveProfile(profile);
    history.push("/home");
  };

  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}

export default Profile;
