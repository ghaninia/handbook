'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StatePage() {
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
        State Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is State?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The State pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class. This pattern is useful when you have objects that behave differently depending on their state, and you want to avoid large conditional statements.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Instead of having complex if/else or switch statements, each state is represented by a separate class that implements a common interface.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Objects with complex state-dependent behavior lead to large, hard-to-maintain conditional statements.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Without State Pattern - complex conditionals
public class MediaPlayer
{
    private PlayerState _state = PlayerState.Stopped;
    
    public void Play()
    {
        if (_state == PlayerState.Stopped)
        {
            // Start playing
            _state = PlayerState.Playing;
        }
        else if (_state == PlayerState.Paused)
        {
            // Resume playing
            _state = PlayerState.Playing;
        }
        else if (_state == PlayerState.Playing)
        {
            // Already playing, do nothing
        }
    }
    
    public void Pause()
    {
        if (_state == PlayerState.Playing)
        {
            _state = PlayerState.Paused;
        }
        else
        {
            // Can't pause when stopped or already paused
        }
    }
    
    // More methods with similar complex conditionals...
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            State Pattern Implementation
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            1. Define State Interface
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IPlayerState
{
    void Play(MediaPlayer player);
    void Pause(MediaPlayer player);
    void Stop(MediaPlayer player);
    string GetStatus();
}

public class MediaPlayer
{
    private IPlayerState _currentState;
    
    public MediaPlayer()
    {
        _currentState = new StoppedState();
    }
    
    public void SetState(IPlayerState state)
    {
        _currentState = state;
    }
    
    public void Play() => _currentState.Play(this);
    public void Pause() => _currentState.Pause(this);
    public void Stop() => _currentState.Stop(this);
    public string GetStatus() => _currentState.GetStatus();
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            2. Implement Concrete States
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class StoppedState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        Console.WriteLine("Starting playback...");
        player.SetState(new PlayingState());
    }
    
    public void Pause(MediaPlayer player)
    {
        Console.WriteLine("Cannot pause when stopped");
    }
    
    public void Stop(MediaPlayer player)
    {
        Console.WriteLine("Already stopped");
    }
    
    public string GetStatus() => "Stopped";
}

public class PlayingState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        Console.WriteLine("Already playing");
    }
    
    public void Pause(MediaPlayer player)
    {
        Console.WriteLine("Pausing playback...");
        player.SetState(new PausedState());
    }
    
    public void Stop(MediaPlayer player)
    {
        Console.WriteLine("Stopping playback...");
        player.SetState(new StoppedState());
    }
    
    public string GetStatus() => "Playing";
}

public class PausedState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        Console.WriteLine("Resuming playback...");
        player.SetState(new PlayingState());
    }
    
    public void Pause(MediaPlayer player)
    {
        Console.WriteLine("Already paused");
    }
    
    public void Stop(MediaPlayer player)
    {
        Console.WriteLine("Stopping from pause...");
        player.SetState(new StoppedState());
    }
    
    public string GetStatus() => "Paused";
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Order State Machine Example
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IOrderState
{
    void Pay(Order order);
    void Ship(Order order);
    void Cancel(Order order);
    void Deliver(Order order);
    string Status { get; }
}

public class Order
{
    private IOrderState _state;
    public decimal Total { get; set; }
    
    public Order(decimal total)
    {
        Total = total;
        _state = new PendingState();
    }
    
    public void SetState(IOrderState state) => _state = state;
    
    public void Pay() => _state.Pay(this);
    public void Ship() => _state.Ship(this);
    public void Cancel() => _state.Cancel(this);
    public void Deliver() => _state.Deliver(this);
    public string GetStatus() => _state.Status;
}

public class PendingState : IOrderState
{
    public string Status => "Pending Payment";
    
    public void Pay(Order order)
    {
        Console.WriteLine("Payment received");
        order.SetState(new PaidState());
    }
    
    public void Ship(Order order) => 
        Console.WriteLine("Cannot ship unpaid order");
    
    public void Cancel(Order order)
    {
        Console.WriteLine("Order cancelled");
        order.SetState(new CancelledState());
    }
    
    public void Deliver(Order order) => 
        Console.WriteLine("Cannot deliver unpaid order");
}

public class PaidState : IOrderState
{
    public string Status => "Paid";
    
    public void Pay(Order order) => 
        Console.WriteLine("Already paid");
    
    public void Ship(Order order)
    {
        Console.WriteLine("Order shipped");
        order.SetState(new ShippedState());
    }
    
    public void Cancel(Order order)
    {
        Console.WriteLine("Refunding payment...");
        order.SetState(new CancelledState());
    }
    
    public void Deliver(Order order) => 
        Console.WriteLine("Cannot deliver unshipped order");
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Single Responsibility:</strong> Each state handles its own behavior</li>
            <li><strong>Open/Closed:</strong> New states can be added without modifying existing ones</li>
            <li><strong>Eliminates Conditionals:</strong> No more complex if/switch statements</li>
            <li><strong>Clear State Transitions:</strong> State changes are explicit and traceable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/strategy" className="text-blue-600 dark:text-blue-400 hover:underline">Strategy Pattern</Link></li>
            <li><Link href="/design-patterns/memento" className="text-blue-600 dark:text-blue-400 hover:underline">Memento Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/state-design-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - State Pattern
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