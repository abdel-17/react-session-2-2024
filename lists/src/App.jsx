import { useState } from "react";
import "./App.css";

export function App() {
	const [todos, setTodos] = useState([]);

	function onAddTodo(todo) {
		setTodos((todos) => [...todos, todo]);
	}

	function onRemoveTodo(todo) {
		setTodos((todos) => todos.filter((t) => t.id !== todo.id));
	}

	return (
		<div>
			<h1>Todo List</h1>
			<AddTodo onAdd={onAddTodo} />
			<div className="app-todos">
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} onRemove={onRemoveTodo} />
				))}
			</div>
		</div>
	);
}

function TodoItem({ todo, onRemove }) {
	return (
		<div className="app-todos__item">
			<p className="app-todos__item__title">{todo.title}</p>
			<button onClick={() => onRemove(todo)}>Delete</button>
		</div>
	);
}

function AddTodo({ onAdd }) {
	const [title, setTitle] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		onAdd({
			id: Math.random(),
			title,
		});
	}

	return (
		<form className="app-add-todo" onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={(event) => setTitle(event.currentTarget.value)}
			/>
			<button type="submit" disabled={title.length === 0}>
				Add
			</button>
		</form>
	);
}
