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
        REPR Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            REPR Design Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی REPR Design Pattern، web API endpoint ها را به عنوان داشتن سه component تعریف می‌کند: یک Request، یک Endpoint، و یک Response. این الگو frequently-used MVC pattern را ساده می‌کند و بیشتر روی API development متمرکز است.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">REPR - Request Endpoint Response</h3>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مسئله با الگوی MVC در API ها
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی classic MVC (Model, View, Controller) برای decades ها وجود داشته و برای UI app ها با موفقیت برای مدت زیادی استفاده شده است. اما حتی با non-API ASP.NET app ها، fit مناسبی نیست، چون اغلب چیزهایی مانند ViewModel ها را می‌بینید که به mix اضافه می‌شوند، که البته pattern آن را mention نمی‌کند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اما در مورد API ها چطور؟ آیا اصلاً منطقی است که ViewModel هایی برای API ها داشته باشیم؟ نه، واقعاً نه. نوعی از DTO (Data Transfer Object)، البته، اما مطمئناً ViewModel نه، با در نظر گیری اینکه هیچ View ای وجود ندارد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            معمولاً من این‌ها را ApiModel ها می‌نامم، فقط برای differentiate کردنشان از اصطلاح too-generic، DTO. اما حتی آن اغلب insufficient است، چون اغلب می‌خواهم از type های مختلف برای Request ها و Response ها استفاده کنم. خوب بود اگر بتوانم intent خود را در نام type ها reveal کنم، به جای اینکه فقط FooDTO یا FooApiModel باشد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            و در مورد Controller ها چطور؟ آنها تمایل awful به bloated شدن دارند، با load method ها و constructor های بزرگ با many (unrelated) dependency ها. واقعاً تنها چیزی که برایش استفاده می‌شوند routing و convenient grouping filter ها است. وقتی یک API endpoint اضافه یا update می‌کنیم، معمولاً فقط به یک method اهمیت می‌دهیم، نه کل class پر از آنها.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            راه‌حل REPR
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            می‌توانید این کار را با tools مانند MediatR achieve کنید، اما هنوز با این vestigial Controller structure باقی خواهید ماند که purpose کمی دارد. approach بهتر این است که کاملاً از multi-action Controller ها دست بکشید، و API Endpoint ها را embrace کنید.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            با استفاده از این approach، API شما حول individual endpoint class ها طراحی می‌شود. هر کدام یک single Handle method دارند که دقیقاً مانند یک single Controller action عمل می‌کند (چون under the covers همین است). هر endpoint می‌تواند یک optional Request type و یک optional Response type تعریف کند. در کل، endpoint ها را با استفاده از فقط این type ها تعریف می‌کنید:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>Request</strong></li>
            <li><strong>Endpoint</strong></li>
            <li><strong>Response</strong></li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Request-Endpoint-Response، یا REPR ("reaper") pattern بسیار ساده‌تری برای developing API endpoint ها نسبت به MVC است. هیچ View ای وجود ندارد. هیچ bloated controller ای وجود ندارد. تنها model هایی که به آنها اهمیت می‌دهید Request و Response هستند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در مورد big M model از MVC، آن که همه business logic را دارد چطور؟ این pattern dictate نمی‌کند که چگونه logic درون endpoint را implement کنید. می‌توانید تمام logic را در Handle method قرار دهید. اما برای non-trivial application ها احتمالاً می‌خواهید برخی service(s) را به endpoint inject کنید، و مقدار non-UI logic موجود در آن را minimize کنید. اما اینکه انتخاب کنید این کار را بکنید یا نه بخشی از REPR pattern نیست.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            REST و Resources
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی REPR یک REST pattern نیست. یک resource-based pattern نیست. یک pattern برای تعریف API endpoint ها است. یک pattern برای تعریف resource ها نیست. می‌توانید از آن برای تعریف RESTful resource ها استفاده کنید، اما همچنین می‌توانید از آن برای تعریف RPC-style endpoint ها استفاده کنید. به خودتان بستگی دارد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اگر می‌خواهید REPR را با REST-style resource ها استفاده کنید، به سادگی می‌خواهید appropriate resource schema را درون Request و Response type ها include کنید. مثلاً، اگر Customer resource دارید، ممکن است GetCustomerRequest و GetCustomerResponse type داشته باشید. Request type ممکن است client-generated CustomerId property شامل شود، و Response type newly-created Customer resource را به عنوان property (یا link به route ای که ممکن است آنجا پیدا شود) شامل شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال REPR Implementation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در اینجا مثالی از نحوه implement کردن REPR pattern در C# آورده شده است:
          </p>
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
    DateTime CreatedAt,
    decimal Total
);

// Endpoint - single-purpose handler
public class CreateOrderEndpoint : EndpointBaseAsync
    .WithRequest<CreateOrderRequest>
    .WithActionResult<CreateOrderResponse>
{
    private readonly IOrderService _orderService;
    
    public CreateOrderEndpoint(IOrderService orderService)
    {
        _orderService = orderService;
    }
    
    [HttpPost("/api/orders")]
    [SwaggerOperation(
        Summary = "Create a new order",
        Tags = new[] { "Orders" }
    )]
    public override async Task<ActionResult<CreateOrderResponse>> HandleAsync(
        CreateOrderRequest request,
        CancellationToken ct = default)
    {
        try
        {
            var order = await _orderService.CreateAsync(
                request.CustomerId,
                request.Items,
                request.Notes,
                ct);
            
            return new CreateOrderResponse(
                order.Id,
                order.Status.ToString(),
                order.CreatedAt,
                order.Total);
        }
        catch (CustomerNotFoundException)
        {
            return BadRequest("Customer not found");
        }
        catch (InsufficientInventoryException ex)
        {
            return BadRequest($"Insufficient inventory: {ex.Message}");
        }
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای REPR Pattern
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Single Responsibility:</strong> هر endpoint یک وظیفه واحد و واضح دارد</li>
            <li><strong>Testability:</strong> testing individual endpoint ها آسان‌تر است</li>
            <li><strong>Maintainability:</strong> کلاس‌های کوچک‌تر و focused آسان‌تر maintain می‌شوند</li>
            <li><strong>Discoverability:</strong> پیدا کردن implementation یک endpoint خاص straightforward است</li>
            <li><strong>Dependency Injection:</strong> فقط dependencies مورد نیاز inject می‌شوند</li>
            <li><strong>Type Safety:</strong> strongly typed Request و Response objects</li>
            <li><strong>Clear Intent:</strong> Request و Response type names intent را reveal می‌کنند</li>
            <li><strong>No Bloated Controllers:</strong> از multi-action controller های bloated اجتناب می‌کند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Libraries برای REPR
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            Ardalis.ApiEndpoints
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            کتابخانه محبوبی که REPR pattern را با ASP.NET Core integrate می‌کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Install-Package Ardalis.ApiEndpoints

public class GetOrderEndpoint : EndpointBaseAsync
    .WithRequest<int>
    .WithActionResult<OrderDto>
{
    private readonly IOrderRepository _repository;
    
    public GetOrderEndpoint(IOrderRepository repository)
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

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            FastEndpoints
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            کتابخانه high-performance دیگری که REPR را با excellent performance implement می‌کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Install-Package FastEndpoints

public class CreateOrderEndpoint : Endpoint<CreateOrderRequest, CreateOrderResponse>
{
    public override void Configure()
    {
        Post("/api/orders");
        Roles("Admin", "Manager");
    }
    
    public override async Task HandleAsync(CreateOrderRequest req, CancellationToken ct)
    {
        // Validation is automatic based on FluentValidation rules
        
        var order = await orderService.CreateAsync(req, ct);
        
        await SendOkAsync(new CreateOrderResponse
        {
            OrderId = order.Id,
            Status = "Created",
            CreatedAt = order.CreatedAt
        }, ct);
    }
}

// Built-in validation support
public class CreateOrderValidator : Validator<CreateOrderRequest>
{
    public CreateOrderValidator()
    {
        RuleFor(x => x.CustomerId)
            .GreaterThan(0)
            .WithMessage("Valid customer ID required");
            
        RuleFor(x => x.Items)
            .NotEmpty()
            .WithMessage("Order must contain at least one item");
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Learning Curve:</strong> تیم نیاز به یادگیری pattern و libraries جدید دارد</li>
            <li><strong>More Files:</strong> تعداد بیشتری file برای manage کردن</li>
            <li><strong>Potential Duplication:</strong> ممکن است code duplication در validation یا mapping داشته باشید</li>
            <li><strong>Framework Dependency:</strong> وابستگی به third-party libraries</li>
            <li><strong>Migration Effort:</strong> تغییر از existing MVC controllers زمان‌بر است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            کی از REPR استفاده کنیم
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>API-First Applications:</strong> برای application هایی که primarily API هستند</li>
            <li><strong>Microservices:</strong> در microservice architecture ها</li>
            <li><strong>Large Teams:</strong> تیم‌های بزرگی که روی endpoint های مختلف کار می‌کنند</li>
            <li><strong>Complex Business Logic:</strong> endpoint هایی با business logic پیچیده</li>
            <li><strong>High Testability Requirements:</strong> نیاز بالا به unit testing</li>
            <li><strong>Clear API Documentation:</strong> زمانی که strongly-typed API documentation مهم است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/cqrs" className="text-blue-600 dark:text-blue-400 hover:underline">CQRS Pattern</Link> - می‌تواند با REPR برای separate کردن read/write operations استفاده شود</li>
            <li><Link href="/design-patterns/mediator" className="text-blue-600 dark:text-blue-400 hover:underline">Mediator Pattern</Link> - برای decoupling endpoint logic از business logic</li>
            <li><strong>Command Pattern</strong> - REPR endpoint ها اغلب command pattern را implement می‌کنند</li>
            <li><strong>DTO Pattern</strong> - Request و Response objects نوعی از DTO هستند</li>
            <li><strong>MVC Pattern</strong> - REPR یک alternative یا simplification MVC است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                (YouTube) The .NET Docs Show - Controllers are Dinosaurs: The Case for API Endpoints
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                MVC Controllers are Dinosaurs - Embrace API Endpoints
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ardalis.ApiEndpoints NuGet Package
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ardalis.ApiEndpoints GitHub repo
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FastEndpoints Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FastEndpoints NuGet
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
