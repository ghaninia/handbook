'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CQRSPage() {
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
        CQRS - Command Query Responsibility Segregation
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is CQRS?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            CQRS is a design pattern used in software architecture to address the complexity and performance issues that can arise in systems handling both read (query) and write (command) operations. CQRS suggests <strong>segregating the data models and operations</strong> for reads and writes into separate components, optimizing each for its specific use case.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            In a traditional architecture, the same data model is used for both reading and writing data. However, as an application grows, the read and write patterns might have different requirements and performance characteristics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            How CQRS Works
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-4">
            Separation of Models
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Instead of using a single data model for both reading and writing, CQRS recommends having separate models:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>Command Model:</strong> Optimized for handling write operations, ensuring data consistency and integrity</li>
            <li><strong>Query Model:</strong> Designed for efficient data retrieval and optimized for read operations</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-4">
            Command and Query Paths
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The application's code is divided into two distinct paths:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>Command Path:</strong> Handles write operations (create, update, delete)</li>
            <li><strong>Query Path:</strong> Handles read operations optimized for displaying data</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-4">
            Optimized Data Stores
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Query Model often uses specialized data stores optimized for querying, such as read-only databases, caching mechanisms, or search indexes. Because write operations are asynchronous and use separate models, it's not unusual for data in the query store to lag behind for recent updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Asynchronous Benefits
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Consider this example with social media:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>User posts a message → API sends a <strong>command</strong> to create a new post</li>
            <li>Command is validated and handled → data changes are made → event is triggered</li>
            <li>User looks up profile details → UI makes a call with a <strong>query</strong></li>
            <li>Query returns the data with profile details</li>
            <li>Event updates the read database and synchronizes</li>
            <li>Eventually, the profile indicates there is an update</li>
          </ol>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The nature of the reads and writes separated means that reads are not blocked by writes. There is <strong>eventual consistency</strong> - the read database will be in sync with the write database eventually, not immediately.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Common Patterns with CQRS
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-4">
            Event Sourcing
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Event Sourcing is often combined with CQRS to capture all changes to application state as a sequence of events. By replaying these events, you can reconstruct the state at any point in time.
          </p>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-4">
            Materialized Views
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Materialized Views are also seen with CQRS as read-only sources for queries. They are structured to allow for efficient querying and can improve response times.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            C# Example with MediatR
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Command
public record CreateOrderCommand(
    string CustomerId, 
    List<OrderItem> Items) : IRequest<int>;

// Command Handler
public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, int>
{
    private readonly IOrderRepository _repository;
    
    public CreateOrderHandler(IOrderRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<int> Handle(CreateOrderCommand request, 
        CancellationToken cancellationToken)
    {
        var order = new Order(request.CustomerId, request.Items);
        await _repository.AddAsync(order);
        return order.Id;
    }
}

// Query
public record GetOrderQuery(int OrderId) : IRequest<OrderDto>;

// Query Handler - uses optimized read model
public class GetOrderHandler : IRequestHandler<GetOrderQuery, OrderDto>
{
    private readonly IReadOnlyOrderRepository _readRepository;
    
    public GetOrderHandler(IReadOnlyOrderRepository readRepository)
    {
        _readRepository = readRepository;
    }
    
    public async Task<OrderDto> Handle(GetOrderQuery request, 
        CancellationToken cancellationToken)
    {
        return await _readRepository.GetByIdAsync(request.OrderId);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Conclusion
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              CQRS can bring several benefits including improved performance, scalability, and maintainability. However, it also introduces <strong>additional complexity</strong> and may not be suitable for all projects. It's recommended to assess whether the complexity is justified by the specific needs of your application.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link></li>
            <li><Link href="/design-patterns/repository" className="text-blue-600 dark:text-blue-400 hover:underline">Repository Pattern</Link></li>
            <li><Link href="/design-patterns/domain-events" className="text-blue-600 dark:text-blue-400 hover:underline">Domain Events Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/cqrs-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - CQRS Pattern
              </a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs" target="_blank" rel="noopener" className="hover:underline">
                Azure Architecture: CQRS
              </a>
            </li>
            <li>
              <a href="https://martinfowler.com/bliki/CQRS.html" target="_blank" rel="noopener" className="hover:underline">
                Martin Fowler - CQRS
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
