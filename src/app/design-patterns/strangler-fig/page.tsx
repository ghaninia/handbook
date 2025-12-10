'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StranglerFigPage() {
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
        Strangler Fig Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What is Strangler Fig?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Strangler Fig pattern is a migration strategy for gradually replacing a legacy system with a new one. Named after the strangler fig tree that grows around and eventually replaces its host tree, this pattern allows you to incrementally modernize applications without the risk of a big-bang rewrite.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Instead of replacing the entire system at once, you gradually intercept calls to the legacy system and redirect them to new implementations, eventually "strangling" the old system until it can be safely removed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            The Problem with Big Bang Rewrites
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              <strong>Big Bang Approach Risks:</strong> Replacing entire systems at once is expensive, risky, and often fails due to underestimated complexity and business requirements that emerge during development.
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li>High risk of project failure</li>
            <li>Long periods without delivering business value</li>
            <li>Difficult to handle changing requirements</li>
            <li>Legacy system continues to accumulate technical debt</li>
            <li>Users must adapt to completely new system all at once</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            How Strangler Fig Works
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mb-4">
            <li><strong>Identify Boundaries:</strong> Break the legacy system into logical components or services</li>
            <li><strong>Create Facade:</strong> Build an interface layer that can route requests to either old or new implementations</li>
            <li><strong>Implement Incrementally:</strong> Build new functionality piece by piece</li>
            <li><strong>Redirect Traffic:</strong> Gradually redirect calls from legacy to new implementation</li>
            <li><strong>Remove Legacy:</strong> Once fully replaced, remove the old implementation</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Implementation Example
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            1. Legacy System
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Legacy monolithic system
public class LegacyOrderSystem
{
    public void ProcessOrder(Order order)
    {
        // Complex legacy logic
        ValidateOrder(order);
        CalculatePricing(order);
        ProcessPayment(order);
        UpdateInventory(order);
        SendNotifications(order);
    }
    
    private void ValidateOrder(Order order) { /* Legacy validation */ }
    private void CalculatePricing(Order order) { /* Legacy pricing */ }
    private void ProcessPayment(Order order) { /* Legacy payment */ }
    private void UpdateInventory(Order order) { /* Legacy inventory */ }
    private void SendNotifications(Order order) { /* Legacy notifications */ }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            2. Create Facade/Router
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public class OrderProcessingFacade
{
    private readonly LegacyOrderSystem _legacySystem;
    private readonly IOrderValidator _newValidator;
    private readonly IPricingService _newPricingService;
    private readonly IPaymentService _newPaymentService;
    private readonly IConfiguration _config;
    
    public OrderProcessingFacade(
        LegacyOrderSystem legacySystem,
        IOrderValidator newValidator,
        IPricingService newPricingService,
        IPaymentService newPaymentService,
        IConfiguration config)
    {
        _legacySystem = legacySystem;
        _newValidator = newValidator;
        _newPricingService = newPricingService;
        _newPaymentService = newPaymentService;
        _config = config;
    }
    
    public async Task ProcessOrderAsync(Order order)
    {
        // Feature flags to control routing
        var useNewValidation = _config.GetValue<bool>("UseNewValidation");
        var useNewPricing = _config.GetValue<bool>("UseNewPricing");
        var useNewPayment = _config.GetValue<bool>("UseNewPayment");
        
        // Validation - gradually migrate
        if (useNewValidation)
        {
            await _newValidator.ValidateAsync(order);
        }
        else
        {
            _legacySystem.ValidateOrder(order);
        }
        
        // Pricing - gradually migrate
        if (useNewPricing)
        {
            order.Total = await _newPricingService.CalculateAsync(order);
        }
        else
        {
            _legacySystem.CalculatePricing(order);
        }
        
        // Payment - gradually migrate
        if (useNewPayment)
        {
            await _newPaymentService.ProcessAsync(order);
        }
        else
        {
            _legacySystem.ProcessPayment(order);
        }
        
        // Still using legacy for remaining parts
        _legacySystem.UpdateInventory(order);
        _legacySystem.SendNotifications(order);
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 mt-6">
            3. New Service Implementations
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// New modern implementations
public class ModernOrderValidator : IOrderValidator
{
    public async Task ValidateAsync(Order order)
    {
        // Modern validation with async operations
        // Better error handling, logging, etc.
    }
}

public class ModernPricingService : IPricingService
{
    public async Task<decimal> CalculateAsync(Order order)
    {
        // Modern pricing logic
        // Support for complex pricing rules, discounts, etc.
        return order.Items.Sum(i => i.Price * i.Quantity);
    }
}

public class ModernPaymentService : IPaymentService
{
    public async Task ProcessAsync(Order order)
    {
        // Modern payment processing
        // Integration with modern payment providers
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Migration Strategy
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Phase 1: Infrastructure
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mr-4 mb-4 text-sm">
            <li>Set up facade/router</li>
            <li>Implement feature flags</li>
            <li>Add monitoring and logging</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Phase 2: Gradual Migration
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mr-4 mb-4 text-sm">
            <li>Start with least risky components</li>
            <li>Implement new services one by one</li>
            <li>Use canary deployments and A/B testing</li>
            <li>Compare results between old and new</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Phase 3: Complete Migration
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mr-4 mb-4 text-sm">
            <li>Route 100% traffic to new services</li>
            <li>Remove legacy code</li>
            <li>Clean up facade if no longer needed</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Reduced Risk:</strong> Incremental changes are less risky than big-bang rewrites</li>
            <li><strong>Continuous Value:</strong> Deliver improvements incrementally</li>
            <li><strong>Easier Testing:</strong> Test new components in isolation</li>
            <li><strong>Gradual User Adoption:</strong> Users adapt to changes slowly</li>
            <li><strong>Rollback Capability:</strong> Easy to revert if issues arise</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Considerations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Data Synchronization:</strong> May need to keep legacy and new systems in sync</li>
            <li><strong>Increased Complexity:</strong> Temporarily increases system complexity</li>
            <li><strong>Performance Overhead:</strong> Facade layer adds some overhead</li>
            <li><strong>Testing Complexity:</strong> Need to test multiple code paths</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Related Patterns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/facade" className="text-blue-600 dark:text-blue-400 hover:underline">Facade Pattern</Link></li>
            <li><Link href="/design-patterns/adapter" className="text-blue-600 dark:text-blue-400 hover:underline">Adapter Pattern</Link></li>
            <li><Link href="/design-patterns/proxy" className="text-blue-600 dark:text-blue-400 hover:underline">Proxy Pattern</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://deviq.com/design-patterns/strangler-fig-pattern" target="_blank" rel="noopener" className="hover:underline">
                DevIQ - Strangler Fig Pattern
              </a>
            </li>
            <li>
              <a href="https://martinfowler.com/bliki/StranglerFigApplication.html" target="_blank" rel="noopener" className="hover:underline">
                Martin Fowler - StranglerFigApplication
              </a>
            </li>
            <li>
              <a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler-fig" target="_blank" rel="noopener" className="hover:underline">
                Microsoft - Strangler Fig Pattern
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}