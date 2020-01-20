import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loading from '../components/Loading';

const StyledProfile = styled.div`
  h3 {
    text-align: center;
  }
  .info {
   text-align: center;
  } 
`;

const Profile = ({ history, text }) => {
	const [loading, setLoading] = useState(true);
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		axios.get('/api/user/profile').then(({ data: user }) => {
			setUserInfo(user);
			setLoading(false);
		}).catch(reason => console.log(reason));
	}, []);

	return (
		<StyledProfile className="row">
			<div className="col s12 m8 l4 offset-m2 offset-l4">
				<h3>Profile</h3>
				{loading ? (
					<Loading />
				) : (
					<>
						<div className="info">{userInfo.name}</div>
						<div className="info">{userInfo.email}</div>
					</>
				)}
			</div>
		</StyledProfile>
	);
};


export default Profile;