import { useState } from 'react';

const AddText = ({ isOpen, onClose, onAddText }) => {
	const [modalText, setModalText] = useState('');

	const handleAddText = () => {
		if (modalText.trim() !== '') {
			onAddText(modalText);
			setModalText('');
			onClose();
		}
	};

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
				isOpen ? 'visible' : 'hidden'
			}`}
		>
			<div className="bg-white p-4">
				<input
					type="text"
					value={modalText}
					onChange={(e) => setModalText(e.target.value)}
					placeholder="Enter text"
					className="border p-2 mb-2"
				/>
				<button
					onClick={handleAddText}
					className="bg-blue-500 text-white px-4 py-2"
				>
					Add Text
				</button>
				<button
					onClick={onClose}
					className="bg-gray-500 text-white px-4 py-2 ml-2"
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default AddText;
