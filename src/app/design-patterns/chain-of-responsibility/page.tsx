'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ChainOfResponsibilityPage() {
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
        Chain of Responsibility Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Chain of Responsibility?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Chain of Responsibility pattern is a behavioral design pattern that allows you to pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Key Components
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Request:</strong> Contains the information to be processed by the chain of handlers</li>
            <li><strong>Abstract Handler:</strong> Includes two methods - one to set the next handler and one to process requests</li>
            <li><strong>Concrete Handler:</strong> Specific implementation that handles a specific type of request or passes it on</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Decoupling:</strong> The sender is not aware of the specific handlers that will process it</li>
            <li><strong>Reusability:</strong> Handlers can be reused in different chains</li>
            <li><strong>Dynamic handling:</strong> Requests can be handled differently based on runtime context</li>
            <li><strong>Error handling:</strong> Centralized mechanism for handling errors and exceptions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Applications
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Authentication:</strong> Different types of credentials can be accepted</li>
            <li><strong>Event Handling:</strong> Respond to different types of domain events</li>
            <li><strong>Workflow:</strong> Execute tasks of an automated business process in sequence</li>
            <li><strong>Authorization:</strong> Check whether a user has permissions to a process</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Chain of Responsibility in .NET
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            ASP.NET Core Middleware
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The ASP.NET Core middleware layer is made up of many handlers to process requests. The handlers are configured in <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">Program.cs</code>. The order they are added is the order that a request is handled - this is how the chain is built.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            MediatR Pipeline Behaviors
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            MediatR implements the Chain of Responsibility pattern through its use of pipelines. Pipelines are behaviors executed before and after a request is handled. Each behavior can intercept the request, modify it, or prevent it from reaching the handler.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// MediatR Pipeline Behavior example
public class ValidationBehavior<TRequest, TResponse> 
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;
    
    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
    {
        _validators = validators;
    }
    
    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        // Validate before processing
        var context = new ValidationContext<TRequest>(request);
        var failures = _validators
            .Select(v => v.Validate(context))
            .SelectMany(result => result.Errors)
            .Where(f => f != null)
            .ToList();
        
        if (failures.Any())
        {
            throw new ValidationException(failures);
        }
        
        // Pass to next handler in chain
        return await next();
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            ChainedTokenCredential
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            An example of using Chain of Responsibility for authentication is the <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">ChainedTokenCredential</code> in Azure.Identity:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public CosmosHelper()
{
    ChainedTokenCredential credential = new ChainedTokenCredential(
        new AzureCliCredential(),
        new ManagedIdentityCredential()
    );
    
    client = new CosmosClient(
        accountEndpoint: CosmosUri,
        tokenCredential: credential
    );
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link></li>
            <li><Link href="/design-patterns/decorator" className="text-blue-600 dark:text-blue-400 hover:underline">Decorator Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/chain-of-responsibility-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Chain of Responsibility Pattern
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=eSQHpfaYspw" target="_blank" rel="noopener" className="hover:underline">
                YouTube - Decorator, Mediator, and Chain of Responsibility in C#
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
