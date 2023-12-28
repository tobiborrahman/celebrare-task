import { useState } from 'react';
import AddText from '../AddText';
import './TextEditor.css';

const TextEditor = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleAddText = (text) => {
		document.execCommand('insertText', false, text);
		setModalOpen(false);
	};

	const handleFontChange = (font) => {
		document.execCommand('fontName', false, font);
	};

	return (
		<>
			<div className="flex justify-between px-20 pt-5">
				<div>
					<button className="py-2 px-6 bg-amber-500 mr-5 rounded-md hover:bg-amber-500/10 duration-500">
						Undo
					</button>
					<button className="py-2 px-6 bg-amber-500 rounded-md hover:bg-amber-500/10 duration-500">
						Redo
					</button>
				</div>

				<div
					contentEditable
					className="h-[500px] w-[500px] border rounded-md px-6 py-2 mt-4 text-editor-content"
					placeholder="Primary text"
				/>

				<div>
					<select
						onChange={(e) => handleFontChange(e.target.value)}
						className="py-2 px-4 bg-amber-500 text-white rounded-md hover:bg-amber-500/10 duration-500"
					>
						<option value="Arial">Arial</option>
						<option value="Courier">Courier</option>
						<option value="Times New Roman">Times New Roman</option>
					</select>
					<div>
						<button className="py-2 px-6 mr-5 mt-5 rounded-md bg-amber-500 hover:bg-amber-500/10 duration-500">
							Size
						</button>
						<button className="py-2 px-6 bg-amber-500 rounded-md hover:bg-amber-500/10 duration-500">
							Color
						</button>
					</div>
					<div>
						<button
							onClick={() => setModalOpen(true)}
							className="py-2 px-6 bg-amber-500 rounded-md hover:bg-amber-500/10 duration-500 mt-[350px]"
						>
							Add Text
						</button>
					</div>
				</div>
			</div>

			<AddText
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
				onAddText={handleAddText}
			/>
		</>
	);
};

export default TextEditor;
