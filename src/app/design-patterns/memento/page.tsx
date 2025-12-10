'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MementoPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <div className="mb-6">
        <Link href="/design-patterns" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
          ← Back to Design Patterns
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Memento Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Memento?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Memento pattern captures and externalizes an object's internal state without violating encapsulation, allowing the object to be restored to this state later. Think of it as a snapshot that can be used to roll back to a previous state.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Common use cases include undo/redo functionality, transaction rollback, and game saves.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Key Components
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Originator:</strong> The object whose state we want to save and restore</li>
            <li><strong>Memento:</strong> A snapshot of the Originator's state</li>
            <li><strong>Caretaker:</strong> Manages the mementos (stores and retrieves them)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example: Text Editor with Undo
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Memento - stores the state
public class EditorMemento
{
    public string Content { get; }
    public DateTime Timestamp { get; }
    
    public EditorMemento(string content)
    {
        Content = content;
        Timestamp = DateTime.Now;
    }
}

// Originator - creates and restores mementos
public class TextEditor
{
    public string Content { get; private set; } = "";
    
    public void Type(string text)
    {
        Content += text;
    }
    
    public EditorMemento Save()
    {
        return new EditorMemento(Content);
    }
    
    public void Restore(EditorMemento memento)
    {
        Content = memento.Content;
    }
}

// Caretaker - manages memento history
public class EditorHistory
{
    private readonly Stack<EditorMemento> _history = new();
    
    public void Push(EditorMemento memento)
    {
        _history.Push(memento);
    }
    
    public EditorMemento Pop()
    {
        if (_history.Count == 0)
            throw new InvalidOperationException("No history to undo");
        return _history.Pop();
    }
    
    public bool HasHistory => _history.Count > 0;
}

// Usage
var editor = new TextEditor();
var history = new EditorHistory();

// Save initial state
history.Push(editor.Save());

editor.Type("Hello");
history.Push(editor.Save());

editor.Type(" World");
history.Push(editor.Save());

editor.Type("!");
// Content: "Hello World!"

// Undo last action
history.Pop(); // Remove current state
editor.Restore(history.Pop());
// Content: "Hello World"

// Undo again
editor.Restore(history.Pop());
// Content: "Hello"`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Game Save Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class GameState
{
    public int Level { get; }
    public int Score { get; }
    public string PlayerPosition { get; }
    
    public GameState(int level, int score, string position)
    {
        Level = level;
        Score = score;
        PlayerPosition = position;
    }
}

public class Game
{
    public int Level { get; set; } = 1;
    public int Score { get; set; } = 0;
    public string PlayerPosition { get; set; } = "Start";
    
    public GameState SaveGame()
    {
        Console.WriteLine("Game saved!");
        return new GameState(Level, Score, PlayerPosition);
    }
    
    public void LoadGame(GameState state)
    {
        Level = state.Level;
        Score = state.Score;
        PlayerPosition = state.PlayerPosition;
        Console.WriteLine($"Loaded: Level {Level}, Score {Score}");
    }
}

public class SaveManager
{
    private readonly Dictionary<string, GameState> _saves = new();
    
    public void Save(string name, GameState state)
    {
        _saves[name] = state;
    }
    
    public GameState Load(string name)
    {
        return _saves.TryGetValue(name, out var state) 
            ? state 
            : throw new KeyNotFoundException($"No save named {name}");
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Encapsulation:</strong> Internal state is not exposed to external objects</li>
            <li><strong>Simplicity:</strong> Originator's code is simplified as state management is delegated</li>
            <li><strong>Flexibility:</strong> Easy to add undo/redo or checkpointing functionality</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Drawbacks
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Memory Usage:</strong> Storing many mementos can consume significant memory</li>
            <li><strong>Performance:</strong> Creating deep copies of large objects can be slow</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/state" className="text-blue-600 dark:text-blue-400 hover:underline">State Pattern</Link></li>
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS with Event Sourcing</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/memento-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Memento Pattern
              </a>
            </li>
            <li>
              <a href="http://bit.ly/DesignPatternsLibrary" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - Design Patterns Library
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
