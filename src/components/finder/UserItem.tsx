import PropTypes from "prop-types";
import Link from "next/link";
import { GithubUser } from "../../../types";
import { Col } from "antd";
import Image from "next/image";

const UserItem = ({ user }: { user: GithubUser }) => {
  return (
    <Col xxl={6}>
      <Image width={150} height={150} src={user.avatar_url} alt="user_avatar" />
      <div>{user.login}</div>
      <Link href={`/user?userName=${user.login}`}>More</Link>
    </Col>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

UserItem.defaultProps = {
  user: {
    id: 4,
    login: "wematu",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  },
};

export default UserItem;
