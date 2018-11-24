import React, { useState, useContext } from 'react';
import { Plus, MoreVertical } from 'react-feather';
import { DragSource, DropTarget } from 'react-dnd';
import { css } from 'emotion';

import { InputData } from '../pages/Resume';
import Button from './Button';

import { getColor, getFontSize, getFontWeight } from './theme';

const TYPE = 'INPUT';

const inputStyles = type => css`
	color: ${getColor(type)};
	font-size: ${getFontSize(type)};
	font-weight: ${getFontWeight(type)};
	border: 0;
	outline: none;
	padding: 8px 14px;
	min-width: 350px;
	:hover {
		background: #fafaff;
	}
	:active,
	:focus {
		background: #f4faff;
	}
`;

const inputContainer = css`
	display: flex;
	align-items: center;
`;

const inputOptionStyles = isIconVisible => css`
	opacity: ${Number(isIconVisible)};
	transition: opacity 0.2s ease;
`;

function connectSource(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
		connectDragPreview: connect.dragPreview(),
	};
}

function connectTarget(connect) {
	return {
		connectDropTarget: connect.dropTarget(),
	};
}

const sourceSpecs = {
	beginDrag(props) {
		return { entry: props.name };
	},
};

const targetSpecs = {
	hover(props, monitor) {
		props.moveInput({
			currentEntry: monitor.getItem().entry,
			hoveredEntry: props.name,
			field: props.field,
		});
	},
};

const Input = ({ value, placeholder, name, type, field, ...props }) => {
	const [showIcon, setIconVisibility] = useState(false);
	const { setInputValue } = useContext(InputData);
	const { isDragging, connectDragSource, connectDragPreview, connectDropTarget } = props;
	return connectDropTarget(
		connectDragPreview(
			<div
				className={inputContainer}
				style={isDragging ? { opacity: '.8' } : { opacity: '1' }}
				onMouseEnter={() => setIconVisibility(true)}
				onMouseLeave={() => setIconVisibility(false)}
			>
				<input
					onChange={e => setInputValue(e, field)}
					name={name}
					className={inputStyles(type)}
					placeholder={placeholder}
					value={value}
				/>
				<div className={inputOptionStyles(showIcon)}>
					<Button
						icon={<Plus size={16} />}
						type="secondary"
						onClick={() => console.log('works')}
					/>
					{connectDragSource(
						<div style={{ display: 'inline' }}>
							<Button
								icon={<MoreVertical size={16} />}
								type="secondary"
								style={{ cursor: 'grab' }}
							/>
						</div>,
					)}
				</div>
			</div>,
		),
	);
};

export default DropTarget(TYPE, targetSpecs, connectTarget)(
	DragSource(TYPE, sourceSpecs, connectSource)(Input),
);
