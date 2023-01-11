import Image from 'next/image';
import avatar from '../public/image-avatar.png';
const Profile = () => {
  return (
    <span className="profile-icon">
      <Image src={avatar} alt="avatar" />
    </span>
  );
};

export default Profile;
