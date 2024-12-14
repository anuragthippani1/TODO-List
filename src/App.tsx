import React from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { useTodos } from './hooks/useTodos';
import { ListTodo } from 'lucide-react';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div className="flex items-center gap-3">
            <ListTodo className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">Todo List</h1>
          </div>
          
          <TodoInput onAdd={addTodo} />
          
          <div className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 py-4">
                No todos yet. Add one above!
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
          
          {todos.length > 0 && (
            <div className="text-sm text-gray-500">
              {todos.filter((t) => t.completed).length} of {todos.length} completed
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;