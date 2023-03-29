import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from '../contents/root';
import Work from '../contents/work/work';
import Play from '../contents/play/play';
import About from '../contents/about/about';
import Error from '../contents/error/error';
import Project from '../contents/work/project';

import './App.scss';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={ <Root/> } errorElement={<Error/>}>
		<Route index element={ <Work/> } />
		<Route path=':project' element={ <Project/> } />
		<Route path='play' element={ <Play/> } />
		<Route path='about' element={ <About/> } />
	</Route>
));

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
