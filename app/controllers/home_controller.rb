class HomeController < ShopifyApp::AuthenticatedController
  def index
    @products = ShopifyAPI::Product.find(:limit 10)
    @webhooks = ShopifyAPI::Webhook.find(:all)
  end
end
