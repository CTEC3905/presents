<!-- CSS VARIABLES -->

===

# CSS VARIABLES **01**
<!-- .slide: class="smalltext crammed" -->
  
Being a style language based on key-value pairs, for a long time CSS had no variables. [LESS](http://lesscss.org/) and [Sass](https://sass-lang.com/) filled the gap and added other functionality, some of which is being **added to the CSS standard**

CSS **custom properties** are one example and are **usable in all modern browsers**. They **differ from LESS/Sass variables** (`@` and `$`) by being prefixed with “`--`” e.g. `--myPink: #fce;`

They are **scoped** to the **selector** in which they are defined, and inherited by the **descendants** of that selector

---

# CSS VARIABLES **02**
Because of this scope, the `:root` pseudo-element is often used in examples as a “global” selector…

```CSS
:root {
  --darkGreen: #051;
  --myPink: #fce;
}

main {
  color: var(--darkGreen);
  background: var(--myPink);
}
.my-class {
  border-color: var(--myPink);
}
```

SVG graphics need the variables at `:root` as they have their own DOM

---

# CSS VARIABLES **03**

…however, **any selector** (element, class, id) can be used to set **CSS Custom Properties** (not just `:root`) - you can then access them in **all child elements** of that selector

So CSS variables in `html` or `body` also mean that **any element** in your CSS file has access to them…

```CSS
body {
  --darkGreen: #051;
}

.my-class {
  color: var(--darkGreen);
}
```

---

# CSS VARIABLES **04**
<!-- .slide: class="crammed" -->

Elements **outside** the variable **selector** which contains the variables **cannot access them**:

```html
&lt;main>main content&lt;/main>
&lt;footer>footer content&lt;/footer>
```

```CSS
main {
  --darkGreen: #051;
}

footer {
  color: var(--darkGreen);
  /* OOPS: cannot see the variable in “main” */
}
```

---

# CSS VARIABLES **05**
<!-- .slide: class="crammed smallcode" -->

**store** an **attribute value** once, then **use elsewhere**:

```css
/* set the variables in a root element */
html {
  --myWidth: 360px;
  --myBorder: 4px solid var(--myPink);
  --codeFont: "Courier New", monospace;
}

/* use the variables anywhere */
section {
  border: var(myBorder);
}
figure {
  width: var(--myWidth);
}
code {
  font-family: var(--codeFont);
}
```

---

# CSS VARIABLES **06**
<!-- .slide: class="crammed smallcode" -->

For responsive design, you can **reset custom properties inside `@media` queries**. For example, you could **expand the margin** around major layout elements for **wider screen widths**:

```css
:root {
  --gutter: 4px;
}

section {
  margin: var(--gutter);
}

@media (min-width: 600px) {
  :root {
    --gutter: 16px;
  }
  /* this change is only activated above 600px */
}
```

---

# CSS VARIABLES **07**
<!-- .slide: class="crammed" -->
  
Resources:

- [CSS Variables: Why Should You Care?](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
- [Using CSS custom properties (variables) (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [Browser support for CSS variables (Can I Use)](https://caniuse.com/#feat=css-variables)

===

<!-- END CSS VARIABLES -->


<!-- CODE COMEDY -->

<section data-markdown class="big-pic small-head crammed">
![Do I know it or do I say I know it???](images/two-types-cv.jpg)
</section>

===

