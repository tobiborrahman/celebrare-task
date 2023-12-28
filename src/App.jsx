import './App.css';
import TextEditor from './components/TextEditor/TextEditor';

function App() {
	return (
		// <>
		// 	<div className="flex justify-between px-20 pt-5">
		// 		<div>
		// 			<button className="py-2 px-6 bg-amber-500 mr-5 rounded-md hover:bg-amber-500/10 duration-500">
		// 				Undo
		// 			</button>
		// 			<button className="py-2 px-6 bg-amber-500 rounded-md hover:bg-amber-500/10 duration-500">
		// 				Redo
		// 			</button>
		// 		</div>

		// 		<div>
		// 			<textarea
		// 				className="h-[500px] w-[500px] border rounded-md px-6 py-2"
		// 				type="text"
		// 				placeholder="Primary text"
		// 			/>
		// 		</div>
		// 		<div>
		// 			<button className="py-2 px-6 bg-amber-500 rounded-md hover:bg-amber-500/10 duration-500">
		// 				Font
		// 			</button>
		// 			<div>
		// 				<button className="py-2 px-6 mr-5 mt-5 rounded-md bg-amber-500 hover:bg-amber-500/10 duration-500">
		// 					Size
		// 				</button>
		// 				<button className="py-2 px-6 bg-amber-500 rounded-md hover:bg-amber-500/10 duration-500">
		// 					color
		// 				</button>
		// 			</div>
		// 			<button className="py-2 px-6 bg-amber-500 rounded-md hover:bg-amber-500/10 duration-500 mt-[350px]">
		// 				Add Text
		// 			</button>
		// 		</div>
		// 	</div>
		// </>

		<div>
			<TextEditor />
		</div>
	);
}

export default App;
