import { Link } from 'react-router-dom';

const categories = [
	{ name: 'TX Jobs Search', path: '/search/jobs' },
	{ name: 'Room Hunt', path: '/search/housing' },
	{ name: 'Ride Sharing Live', path: '/ride-sharing-live' },
	{ name: 'Car Buy & Sell', path: '/search/vehicles' },
	{ name: 'Help a neighbor', path: '/search/community' },
	{ name: 'TX Market', path: '/search/for-sale' },
	{ name: 'Services', path: '/search/services' },
];

export default function Categories() {
	return (
		<div className='hidden md:block'>
			<nav className='flex items-center space-x-6 whitespace-nowrap overflow-x-auto'>
				{categories.map((category) => (
					<Link
						key={category.name}
						to={category.path}
						className='text-white hover:text-[#e22441] transition-colors text-sm font-medium'
					>
						{category.name}
					</Link>
				))}
			</nav>
		</div>
	);
}