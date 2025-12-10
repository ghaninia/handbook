'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ReprPage() {
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
        REPR Pattern (Request-Endpoint-Response)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is REPR?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The REPR (Request-Endpoint-Response) pattern is an architectural approach for building APIs that structures each endpoint around three concepts: a <strong>Request</strong> (the input), an <strong>Endpoint</strong> (the handler), and a <strong>Response</strong> (the output).
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This pattern promotes single-responsibility endpoints, making APIs more maintainable, testable, and aligned with REST principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem with Controllers
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Traditional MVC controllers tend to grow into "god classes" with many action methods and dependencies, violating the Single Responsibility Principle.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Traditional controller - grows into a "god class"
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;
    private readonly ICustomerService _customerService;
    private readonly IPaymentService _paymentService;
    private readonly IEmailService _emailService;
    // ... 10 more dependencies
    
    [HttpGet]
    public async Task<IActionResult> GetOrders() { ... }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetOrder(int id) { ... }
    
    [HttpPost]
    public async Task<IActionResult> CreateOrder() { ... }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateOrder(int id) { ... }
    
    [HttpPost("{id}/ship")]
    public async Task<IActionResult> ShipOrder(int id) { ... }
    
    // ... 20 more action methods
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            REPR Structure
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Request - strongly typed input
public record CreateOrderRequest(
    int CustomerId,
    List<OrderItemDto> Items,
    string? Notes
);

// Response - strongly typed output
public record CreateOrderResponse(
    int OrderId,
    string Status,
    DateTime CreatedAt
);

// Endpoint - single-purpose handler
public class CreateOrderEndpoint : EndpointBaseAsync
    .WithRequest<CreateOrderRequest>
    .WithResult<CreateOrderResponse>
{
    private readonly IOrderService _orderService;
    
    public CreateOrderEndpoint(IOrderService orderService)
    {
        _orderService = orderService;
    }
    
    [HttpPost("/api/orders")]
    public override async Task<CreateOrderResponse> HandleAsync(
        CreateOrderRequest request,
        CancellationToken ct = default)
    {
        var order = await _orderService.CreateAsync(
            request.CustomerId,
            request.Items,
            request.Notes,
            ct);
        
        return new CreateOrderResponse(
            order.Id,
            order.Status.ToString(),
            order.CreatedAt);
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            FastEndpoints Library
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            FastEndpoints is a popular .NET library that implements the REPR pattern with excellent performance:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Using FastEndpoints
public class CreateOrderEndpoint : Endpoint<CreateOrderRequest, CreateOrderResponse>
{
    public override void Configure()
    {
        Post("/api/orders");
        AllowAnonymous();
    }
    
    public override async Task HandleAsync(CreateOrderRequest req, CancellationToken ct)
    {
        // Process order...
        
        await SendAsync(new CreateOrderResponse
        {
            OrderId = order.Id,
            Status = "Created"
        });
    }
}

// With validation
public class CreateOrderValidator : Validator<CreateOrderRequest>
{
    public CreateOrderValidator()
    {
        RuleFor(x => x.CustomerId)
            .GreaterThan(0);
            
        RuleFor(x => x.Items)
            .NotEmpty()
            .WithMessage("Order must have at least one item");
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Ardalis.ApiEndpoints
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Another option is the Ardalis.ApiEndpoints library which integrates with standard ASP.NET Core:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Install-Package Ardalis.ApiEndpoints

public class GetOrder : EndpointBaseAsync
    .WithRequest<int>
    .WithActionResult<OrderDto>
{
    private readonly IOrderRepository _repository;
    
    public GetOrder(IOrderRepository repository)
    {
        _repository = repository;
    }
    
    [HttpGet("/api/orders/{id}")]
    [SwaggerOperation(
        Summary = "Gets an order by ID",
        Tags = new[] { "Orders" }
    )]
    public override async Task<ActionResult<OrderDto>> HandleAsync(
        [FromRoute] int id,
        CancellationToken ct = default)
    {
        var order = await _repository.GetByIdAsync(id, ct);
        
        if (order == null)
            return NotFound();
            
        return Ok(OrderDto.From(order));
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Single Responsibility:</strong> Each endpoint has one job</li>
            <li><strong>Testability:</strong> Easy to test individual endpoints</li>
            <li><strong>Maintainability:</strong> Small, focused classes are easier to understand</li>
            <li><strong>Discoverability:</strong> Easy to find the code for a specific API endpoint</li>
            <li><strong>Dependency Injection:</strong> Only inject what each endpoint needs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS Pattern</Link></li>
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/repr-design-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - REPR Design Pattern
              </a>
            </li>
            <li>
              <a href="https://fast-endpoints.com/" target="_blank" rel="noopener" className="hover:underline">
                FastEndpoints Library
              </a>
            </li>
            <li>
              <a href="https://github.com/ardalis/ApiEndpoints" target="_blank" rel="noopener" className="hover:underline">
                Ardalis.ApiEndpoints GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
