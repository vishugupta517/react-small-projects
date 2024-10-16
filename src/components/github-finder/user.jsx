/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at
  } = user;

  const createdDate = new Date(created_at);
  console.log(createdDate);
  return (
    <div className='user'>
      <div>
        <img src={avatar_url} className='avatar' alt='User' />
      </div>
      <div className='name-container'>
        <a href={`https://github.com/${login}`} target='_blank'>
          {name || login}
        </a>
        <p>
          User joined on{' '}
          {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
            month: 'short'
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className='profile-info'>
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
