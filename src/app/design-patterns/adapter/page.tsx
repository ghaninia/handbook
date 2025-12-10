'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdapterPage() {
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
        Adapter Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Intent
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
            "Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces." [GoF]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Adapter?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Adapter Design Pattern, also known as the Wrapper, allows two classes to work together that otherwise would have incompatible interfaces. This maps well to the real-world example of an electrical power adapter.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Adapter pattern relies on a common abstraction which defines the interface client code will consume. Different implementations of this interface are then created to support different otherwise incompatible ways of achieving the goal of the abstraction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example: Notification System
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            For example, an application may wish to send notifications. However, there are several approaches with different interfaces:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Different external interfaces
SendEmail(string toEmail, string fromEmail, string subject, string body)
SendText(string toNumber, string message)
SendToastNotification(string username, string message)

// Adapter interface - our abstraction
public interface INotificationAdapter
{
    void Notify(User user, Message message);
}

// Email adapter implementation
public class EmailNotificationAdapter : INotificationAdapter
{
    private readonly IEmailSender _emailSender;
    private readonly EmailSettings _settings;
    
    public EmailNotificationAdapter(IEmailSender emailSender, 
        EmailSettings settings)
    {
        _emailSender = emailSender;
        _settings = settings;
    }
    
    public void Notify(User user, Message message)
    {
        if (!user.AllowEmailNotifications) return;
        
        string fromEmail = _settings.DefaultFromAddress;
        _emailSender.Send(user.EmailAddress, fromEmail, 
            message.Title, message.Details);
    }
}

// SMS adapter implementation
public class SmsNotificationAdapter : INotificationAdapter
{
    private readonly ISmsSender _smsSender;
    
    public SmsNotificationAdapter(ISmsSender smsSender)
    {
        _smsSender = smsSender;
    }
    
    public void Notify(User user, Message message)
    {
        if (!user.AllowSmsNotifications) return;
        
        _smsSender.SendText(user.PhoneNumber, message.Details);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Key Points
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Important:</strong> The <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">INotificationAdapter</code> abstraction does not expose any details about how the notification might be sent. An Adapter should ideally be written using the abstractions of the application and should avoid exposing implementation details implicitly or explicitly.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Recall that the <strong>Dependency Inversion Principle</strong> requires that abstractions should not depend on details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Enables the <strong>Open-Closed Principle</strong> - new functionality can be added without modifying existing code</li>
            <li>Works well with <strong>Dependency Injection</strong></li>
            <li>Frequently used in <strong>Domain-Driven Design</strong> as part of Anti-Corruption Layers</li>
            <li>Decouples your code from third-party libraries</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/facade" className="text-blue-600 dark:text-blue-400 hover:underline">Facade Pattern</Link> - provides a simplified interface to a complex subsystem</li>
            <li><Link href="/design-patterns/proxy" className="text-blue-600 dark:text-blue-400 hover:underline">Proxy Pattern</Link> - provides a surrogate for another object</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/adapter-design-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Adapter Design Pattern
              </a>
            </li>
            <li>
              <a href="https://www.pluralsight.com/courses/c-sharp-design-patterns-adapter" target="_blank" rel="noopener" className="hover:underline">
                Pluralsight - C# Design Patterns: Adapter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
