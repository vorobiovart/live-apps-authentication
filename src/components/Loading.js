import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLoading = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const Loading = ({ size }) => (
	<StyledLoading>
		<div className={`preloader-wrapper ${size} active`}>
			<div className="spinner-layer spinner-blue">
				<div className="circle-clipper left">
					<div className="circle"/>
				</div>
				<div className="gap-patch">
					<div className="circle"/>
				</div>
				<div className="circle-clipper right">
					<div className="circle"/>
				</div>
			</div>
			<div className="spinner-layer spinner-red">
				<div className="circle-clipper left">
					<div className="circle"/>
				</div>
				<div className="gap-patch">
					<div className="circle"/>
				</div>
				<div className="circle-clipper right">
					<div className="circle"/>
				</div>
			</div>
			<div className="spinner-layer spinner-yellow">
				<div className="circle-clipper left">
					<div className="circle"/>
				</div>
				<div className="gap-patch">
					<div className="circle"/>
				</div>
				<div className="circle-clipper right">
					<div className="circle"/>
				</div>
			</div>
			<div className="spinner-layer spinner-green">
				<div className="circle-clipper left">
					<div className="circle"/>
				</div>
				<div className="gap-patch">
					<div className="circle"/>
				</div>
				<div className="circle-clipper right">
					<div className="circle"/>
				</div>
			</div>
		</div>
	</StyledLoading>
);

Loading.propTypes = {
	size: PropTypes.string
};

Loading.defaultProps = {
	size: 'big'
};

export default Loading;
