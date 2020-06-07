import React from 'react'; //react helps in understanding jsk to the net

const Card = (props) => {
	const { name , email , id , username} = props;
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
				<p>{props.username}</p>
			</div>
		</div>		

		);
}

export default Card;