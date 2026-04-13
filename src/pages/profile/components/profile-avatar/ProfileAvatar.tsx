import styles from './profile-avatar.module.css';

type Props = {
  initials: string;
};

export const ProfileAvatar = ({ initials }: Props) => (
  <div className={styles.avatarSection}>
    <div className={styles.avatar}>{initials}</div>
    <button className={styles.editBtn} disabled>
      Изменить фото
    </button>
  </div>
);
