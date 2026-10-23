# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): Claude Sonnet 5.5 Medium; react.dev/learn (official React docs)
- What I asked for:
  - Whether git remote add origin still works if I forget .git at the end
    of the GitHub URL (A6), and how to check the remote with git remote -v.
  - What the "U" letter next to a file in VS Code means (untracked), and
    how to cancel a git add . without losing my work (git restore --staged .).
  - Explanations for the REFLECTION.md questions (B4): imperative vs
    declarative, why component names are capitalised, what a fragment <>...</>
    does compared to a <div>, and a benefit of small components.
  - Help understanding passages I was reading on react.dev/learn: what
    export default does vs named exports, what JSX and "markup" mean, why a
    component must return one parent element, why className is used instead
    of class, how CSS is added with a <link> tag, and how curly braces {}
    "escape back" into JavaScript.
  - How JSX relates to plain HTML and <script>, and that Java and JavaScript
    are different languages.
- What I kept, changed or rejected, and why:
  - Studied: the react.dev/learn pages on components, JSX and curly braces
    first, then asked the AI only when a sentence in the docs was unclear.
  - Kept: the ideas behind each answer. I rewrote the REFLECTION.md answers
    in my own words (1-3 sentences each) instead of pasting the AI's model
    answers, because the lab says to write them myself.
  - Kept: git restore --staged . to unstage. I did not run git rm --cached,
    which was only needed for a repo with no commits.
- One thing the AI got wrong and how I fixed it: When I pasted my
  REFLECTION questions with no answers, the AI replied with full model
  answers instead of only hints. I did not submit those; I used them to
  understand each concept, then wrote my own answers and checked them back
  with the AI.

## Week 2

- Tool(s): Claude Sonnet 5.5 (Medium); react.dev/learn (official React docs)
- What I asked for:
  - Help understanding the react.dev/learn section on rendering lists:
    how .map() and arrow functions (=>) work, why each item needs a key,
    and why an array can be declared with const (C1).
  - Help finishing my vendor data in src/data/vendors.js: suggestions for
    five more menu items (prices, descriptions, categories) to reach 15
    items for Mamak Mia, then replacing one dessert with Telur Mata (RM1).
  - A review of my App.jsx: state for the selected vendor and cart, and
    passing onAdd and cartCount down as props (C2 and C3).
  - How to format my code (Prettier, indentation, .prettierrc).
- What I kept, changed or rejected, and why:
  - Studied: the react.dev/learn pages on rendering lists and on state, so
    I could explain the .map() and useState code instead of only copying it.
  - Kept: the 15 menu items and prices, after checking them against my
    stall's style. I fixed the Nasi Goreng Kampung description myself
    (it said "rice noodles" but nasi goreng is rice).
  - Changed: I swapped the AI's suggested Pisang Goreng, then Kuih Lapis,
    for Telur Mata as a side dish for RM1.
  - Changed: I added "available" to every menu item and set a few to
    false, so Mamak Mia also shows Sold out items like Ruang Café.
  - Kept: the onAdd / cartCount props pattern from the lab sheet, with
    setCart((prev) => [...prev, item]) and no cart.push.
- One thing the AI got wrong and how I fixed it: The AI's extra menu items
  copied my "popular" field, but the lab's MenuItemCard reads
  item.available. Without that field every item showed Sold out
  with a disabled button. I found it by reading MenuItemCard and the
  lab sheet, then added "available": true/false to every item.

## Week 3

## Week 3
- Tool(s): Claude (claude.ai chat); react.dev/learn (official React docs)
- What I asked for:
  - How to do B2: fetching vendors in useEffect with loading, error and
    vendors state, a res.ok check, an AbortController cleanup, a reloadKey
    for the Try again button, and selecting the first vendor.
  - Help moving my vendors into public/api/vendors.json (my shop plus a
    classmate's shop, Ruang Café from 2414362) and fixing the JSON syntax.
  - How to do B3: cart lines of { item, qty }, merging quantities when the
    same item is added, handleChangeQty, handleRemove, the header badge with
    reduce, the view state, and which file each piece goes in.
  - A review of CheckoutForm.jsx (B5) and help completing its TODOs
    (mahallah rule, pickup time rule, calling onPlaceOrder).
  - Debugging a blank screen by having my App.jsx and index.css reviewed.
  - Making some Mamak Mia items sold out by adding an "available" field.
  - B6 (matric digit 0): how to build the "Search menu by name" feature
    with a controlled input and a derived, case-insensitive filtered list.
- What I kept, changed or rejected, and why:
  - Studied: the react.dev/learn pages on state, responding to events and
    effects, and I used the code-along SearchList (A2) as the model for my
    search box.
  - Kept: the useEffect fetch pattern, the cart functions, the reduce for
    cartCount and the total, the finished validate() function.
  - Kept: the search feature design. The query is state in App and the
    visible items are derived with filter + toLowerCase + includes, not
    stored in state. I added .trim() and a "No items match" message
    because MenuList's own empty message did not fit a search.
  - Changed: I added "available" to every Mamak Mia item in vendors.json
    and set three to false, so both vendors use the same fields. I chose
    this over the shortcut of changing MenuItemCard to treat a missing
    "available" as true.
  - Changed: I removed a broken duplicate block at the bottom of index.css
    (it contained "borderradius").
  - Changed: I moved useState and handlePlaceOrder inside App, because the
    first version I pasted had them outside the component and crashed.
- One thing the AI got wrong and how I fixed it: When I asked how to push
  as a backup, the AI told me to leave out git tag week-3. The lab sheet
  (B7 and the checkpoint rubric) requires the week-3 tag, so I compared
  its advice with the sheet, ran git tag week-3 and git push origin week-3,
  and will keep the tag.
