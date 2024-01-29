(function(t,r,a,q){t[q]=t[q]||[];t[q].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=r.getElementsByTagName(a)[0],
j=r.createElement(a);j.async=true;j.src='https://track.testing.traq.ch/traq.js';
f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer');

window.dataLayer = window.dataLayer || [];

function trackViewItem() {
  window.dataLayer.push({
    event: 'view_item',
    ecommerce: {
      currency: 'USD',
      value: 7.77,
      items: [
        {
          item_id: 'SKU_12345',
          item_name: 'Stan and Friends Tee',
          affiliation: 'Google Merchandise Store',
          coupon: 'SUMMER_FUN',
          discount: 2.22,
          index: 0,
          item_brand: 'Google',
          item_category: 'Apparel',
          item_category2: 'Adult',
          item_category3: 'Shirts',
          item_category4: 'Crew',
          item_category5: 'Short sleeve',
          item_list_id: 'related_products',
          item_list_name: 'Related Products',
          item_variant: 'green',
          location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
          price: 9.99,
          quantity: 1
        }
      ]
    }
  });
}

function trackAddToCart() {
  window.dataLayer.push({
    event: 'add_to_cart',
    ecommerce: {
      currency: 'USD',
      value: 7.77,
      items: [
      {
        item_id: 'SKU_12345',
        item_name: 'Stan and Friends Tee',
        affiliation: 'Google Merchandise Store',
        coupon: 'SUMMER_FUN',
        discount: 2.22,
        index: 0,
        item_brand: 'Google',
        item_category: 'Apparel',
        item_category2: 'Adult',
        item_category3: 'Shirts',
        item_category4: 'Crew',
        item_category5: 'Short sleeve',
        item_list_id: 'related_products',
        item_list_name: 'Related Products',
        item_variant: 'green',
        location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        price: 9.99,
        quantity: 1
      }
      ]
    }
  });
}

function trackPurchase() {
  window.dataLayer.push({
    event: 'add_to_cart',
    ecommerce: {
      transaction_id: 'T_12345',
      value: 25.42,
      tax: 4.90,
      shipping: 5.99,
      currency: 'USD',
      coupon: 'SUMMER_SALE',
      items: [
        {
          item_id: 'SKU_12345',
          item_name: 'Stan and Friends Tee',
          affiliation: 'Google Merchandise Store',
          coupon: 'SUMMER_FUN',
          discount: 2.22,
          index: 0,
          item_brand: 'Google',
          item_category: 'Apparel',
          item_category2: 'Adult',
          item_category3: 'Shirts',
          item_category4: 'Crew',
          item_category5: 'Short sleeve',
          item_list_id: 'related_products',
          item_list_name: 'Related Products',
          item_variant: 'green',
          location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
          price: 9.99,
          quantity: 1
        },
        {
          item_id: 'SKU_12346',
          item_name: 'Google Grey Womens Tee',
          affiliation: 'Google Merchandise Store',
          coupon: 'SUMMER_FUN',
          discount: 3.33,
          index: 1,
          item_brand: 'Google',
          item_category: 'Apparel',
          item_category2: 'Adult',
          item_category3: 'Shirts',
          item_category4: 'Crew',
          item_category5: 'Short sleeve',
          item_list_id: 'related_products',
          item_list_name: 'Related Products',
          item_variant: 'gray',
          location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
          price: 20.99,
          promotion_id: 'P_12345',
          promotion_name: 'Summer Sale',
          quantity: 1
        }
      ]
    }
  });
}