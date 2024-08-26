---
title: 'PHP WeakMaps are awesome!'
description: 'I recently came across a problem in a template function where WeakMap turned out to be the best tool for the job.'
category: 'Languages'
date: '2024-08-19'
tags: ['php']
breadcrumbTitle: 'PHP WeakMap'
image: 'media/blog/post-thumbnails/php-weakmap.png'
---

I was recently faced with an interesting PHP need that I wanted to solve in the most graceful manner. The marketing team asked me to write a comparison table, so I had to basically loop through four product objects and build an HTML table that would make it easy for visitors to compare the product attributes.

The HTML was outputed through a class method, and I needed to store a computed value and attached it to each product object so it could be reused further down the code. In other words, I needed to add a non-persisting value to an exising model that was only necessary in the scope of the method.

Since `WeakMap` is a map (or dictionary) that accepts objects as keys, it was the ideal tool for the job. When the object, the product in this case, is garbage collected, it will be removed from the WeakMap.

```php
class CompTable
{

  public string $htmlTable;
  protected WeakMap $prices;

  public function __construct()
  {
    $this->prices = new WeakMap();
  }

  public function generateHtmlTable(array $products): static
  {
    ob_start();
    ?>
    <div class="comparatif">
      <table>
        <!-- some HTML -->
        <tr data-compare="price">
          <th>Prix TTC</th>
          <?php
          foreach ($products as $product):
            $value = $product->get_regular_price();
            if ($product->is_type('variable')) {
              $value = $product->get_variation_regular_price('max');
              if (isset($this->variationIds) &&
                in_array($product->get_id(), array_keys($this->variationIds))) {
                $variation = g2r_get_product($this->variationIds[$product->get_id()]);
                $value = $variation->get_regular_price();
              }
            }
            // Cache the price for reuse in the last table row
            $this->prices[$product] = $value;
            ?>
            <td><?= number_format($value, thousands_separator: ' ') ?> €</td>
          <?php
          endforeach; ?>
        </tr>
        <!-- some HTML -->
        <tr data-compare="price">
          <th>Prix après bonus écologique</th>
          <?php
          foreach ($products as $product):
            $bonus = $product->get_bonus_etat();
            ?>
            <td><?= number_format($this->prices[$product] - (float)$bonus, thousands_separator: ' ') ?> €</td>
          <?php
          endforeach; ?>
        </tr>
      </table>
    </div>
    <?php
    $this->htmlTable = ob_get_clean();

    return $this;
  }

}
```

In this example, the computed price depends on wether or not the product to compare is a variation, once figured out I assign it to the **$prices** property of `WeakMap` type using the syntax `$this->prices[$product] = $value`, which allows me to reuse it on line 63 by calling `$this->prices[$product]`. 

As you can see, a [WeakMap](https://www.php.net/manual/en/class.weakmap.php) can be used like an associative array.

Here's the visual result :

![my image](/media/blog/2024/html-table-built-in-php-with-weakmap.png)

So yes, I could have stored the computed price in a simple variable before calling `ob_start()`, but it would have been much less elegant, and `WeakMap` are available in the language for this exact purpose.
