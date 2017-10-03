ShopifyApp.configure do |config|
  config.application_name = "My Shopify App"
  config.api_key = "d88998dda44c1a94f8953148fb2e8a31"
  config.secret = "4cc9cf3cd517db8dee2553a3043d45b4"
  config.scope = "read_orders, read_products"
  config.embedded_app = true
  config.after_authenticate_job = false
  config.session_repository = Shop
end
